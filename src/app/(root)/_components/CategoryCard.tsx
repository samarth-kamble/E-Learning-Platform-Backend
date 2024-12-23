import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  link: string;
  discount: string;
}

const CategoryCard = ({
  title,
  description,
  imageUrl,
  link,
  discount,
}: CategoryCardProps) => {
  return (
    <div>
      <Link
        href={link}
        className="relative block rounded-tr-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-black"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          {discount}
        </span>

        <Image
          src={imageUrl}
          alt={title}
          className="h-80 w-full rounded-tr-3xl object-cover"
          width={800}
          height={600}
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </strong>

          <p className="mt-2 text-pretty text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <span className="mt-4 block rounded-md border border-indigo-900 dark:border-indigo-400 bg-indigo-900 dark:bg-indigo-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white dark:text-black transition-colors hover:bg-white hover:text-indigo-900 dark:hover:bg-black dark:hover:text-indigo-400">
            Shop Now
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
