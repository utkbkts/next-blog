import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CommentsSvg, Eyes, LikedSvg } from "@/lib/svg";
import { data } from "../work/WorkPage";
const BlogPage = () => {
  return (
 <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="grid grid-cols-1 gap-6 mt-8"
>
  <div className="flex flex-col gap-6">
    {data.map((item) => (
      <div
        key={item.id}
        className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
          rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700
          hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-500 
          hover:-translate-y-1.5 flex items-center gap-4 p-2 md:flex-row flex-col"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-blue-50/50 via-purple-50/30 to-pink-50/20 
          dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        {/* Image */}
        <div className="md:aspect-[14/8] aspect-auto relative overflow-hidden rounded-xl group max-md:h-[400px] max-md:w-full">
          <Image
            alt={item.title}
            src={item.image}
            title={item.title}
            loading="lazy"
            width={500}
            height={200}
            className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {item.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold text-purple-800 bg-purple-100 
                  dark:text-purple-200 dark:bg-purple-800/30 
                  rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 
                  hover:text-white transition-all duration-300 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2.5 
            group-hover:text-transparent group-hover:bg-clip-text 
            group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 
            transition-all duration-500"
          >
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 
            transition-all duration-500 group-hover:text-gray-700 dark:group-hover:text-white"
          >
            {item.description.slice(0, 80)}...
          </p>

          {/* Button */}
          <button className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 
            hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 group/button cursor-pointer"
          >
            <span className="relative overflow-hidden">
              {item.button}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 
                transform -translate-x-full group-hover/button:translate-x-0 
                transition-transform duration-300"
              ></span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-4 h-4 transition-all duration-300 group-hover/button:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          {/* Meta Info */}
          <div className="flex items-center gap-2 mt-4 mb-2">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              01.01.2025 - 7 min read
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              <Eyes />
              <span className="-mt-[2px] ml-1">3</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
              <CommentsSvg />
              <span className="-mt-[2px]">3</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center -mt-[1px]">
              <LikedSvg />
              <span className="-mt-[1px] ml-1">3</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>

  );
};

export default BlogPage;
