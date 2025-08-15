import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, index }) => {

  const cardRefs = useRef<HTMLDivElement[]>([]);

  return (
    <div key={index} className="items-center gap-3 card-border rounded-xl mb-5 break-inside-avoid-column">
      <div className="w-full p-4 max-h-[200px] md:max-h-[150px] sm:max-h-[100px] sm:max-w-full overflow-hidden">
        <img src={blog.imgPath} alt="" />
      </div>
      <div className="px-5 mt-2">
        <h3 className="font-bold">
          <a href="">
            {blog.title}
          </a>
        </h3>
        <p className="text-sm mt-2">{blog.summary}</p>
        <div className="flex items-center gap-4 mt-2 mb-4">
          <span className="text-xs text-gray-400">{blog.date}</span>
          <Link
            to={blog.link}
            className="text-blue-500 underline ml-2 cursor-pointer hover:text-blue-700"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  )
};

export default BlogCard;
