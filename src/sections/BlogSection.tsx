import React, { useState } from "react";
import { blogs } from "../constants";
import TitleHeader from "../components/TitleHeader";
import BlogCard from "../components/BlogCard";

const BlogSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="blogs" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Read Something new!"
          sub="⭐️ Want to stay updated with the latest in tech? Check out our blog section for insightful articles and updates."
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16">
          {blogs.slice(0, visibleCount).map((blog, index) => (
            <BlogCard index={index} blog={blog} />
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
