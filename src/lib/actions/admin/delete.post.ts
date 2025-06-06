"use server";

import { v2 as cloudinary } from "cloudinary";
import prisma from "../../prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type DeletePostResponse = {
  success?: boolean;
  error?: string;
};

export const deletePost = async (postId: string): Promise<DeletePostResponse> => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { error: "You must be logged in to delete a post." };
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: {
        authorId: true,
        featuredImage: true,
      },
    });

    if (!post) {
      return { error: "Post not found." };
    }

    if (post.authorId !== userId) {
      return { error: "You do not have permission to delete this post." };
    }

    if (post.featuredImage) {
      const publicId = extractPublicId(post.featuredImage);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete post error:", error);
    return { error: "An error occurred while deleting the post." };
  }
};

function extractPublicId(url: string): string | null {
  try {
    const parts = url.split("/");
    const publicIdWithExtension = parts.slice(-2).join("/"); 
    const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, "");
    return publicId;
  } catch {
    return null;
  }
}
