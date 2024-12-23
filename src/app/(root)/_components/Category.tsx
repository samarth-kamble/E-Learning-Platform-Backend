import React from "react";
import CategoryCard from "./CategoryCard"; // Adjust the import path as needed

import Laptop from "../../../../public/img/images/hero/macbook.png";
import Headphone from "../../../../public/img/images/hero/headphone.png";
import Phone from "../../../../public/img/images/hero/Phone.jpg";
import PageTitle from "@/components/PageTitle";
const categories = [
  {
    title: "Laptops",
    description:
      "High-performance laptops for work, gaming, and entertainment.",
    imageUrl: Laptop,
    link: "/laptops",
    discount: "Save 15%",
  },
  {
    title: "Mobile Phones",
    description: "Explore the latest smartphones with cutting-edge technology.",
    imageUrl: Phone,
    link: "/mobile-phones",
    discount: "Save 10%",
  },
  {
    title: "Accessories",
    description: "Find the best accessories to complement your devices.",
    imageUrl: Headphone,
    link: "/accessories",
    discount: "Save 20%",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Explore Our Categories
        </h2> */}
        <PageTitle title="Explore Our Categories" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              link={category.link}
              discount={category.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
