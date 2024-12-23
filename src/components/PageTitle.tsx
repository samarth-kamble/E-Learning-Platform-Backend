import React from "react";

const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="mx-auto px-4 sm:container pt-[60px] py-[20px]">
      <div className="border-b border-stroke dark:border-gray-900 flex flex-col items-center justify-center">
        <h2 className="mb-2 text-3xl font-semibold text-dark dark:text-white">
          {title}
        </h2>
        <p className="mb-6 text-sm font-medium text-body-color dark:text-dark-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
