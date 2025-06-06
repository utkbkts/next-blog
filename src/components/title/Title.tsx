"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Projects",
    href: "/",
  },
  {
    id: 2,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
];

const Title = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    const current = data.find((item) => item.href === pathname);
    if (current) setActive(current.title);
  }, [pathname]);
  return (
    <nav className="flex flex-col gap-4 mt-16">
      <div className="md:text-start text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold md:text-5xl text-4xl "
        >
          Full Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="italic"
        >
          💭 &#39;I&apos;m a dreamer. I have to dream and reach for the stars,
          and if I miss a star then I grab a handful of clouds.&#34; — Mike
          Tyson
        </motion.p>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-8 border-b overflow-x-auto scrollbar-hide"
      >
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.title)}
            className={`whitespace-nowrap px-1 py-2 text-lg font-medium flex-shrink-0 cursor-pointer transition-colors duration-200 dark:text-gray-200 ${
              active === item.title
                ? "text-black dark:text-gray-600"
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            <Link href={item.href}> {item.title}</Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Title;
