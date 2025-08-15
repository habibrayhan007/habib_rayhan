import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { TypeBlog } from './types';

const BlogCard = ({
  index,
  title,
  summary,
  description,
  imgPath,
  date,
  link
}: TypeBlog) => {

  return (
    <div
      key={index}
      className="items-center 
      gap-3 
      card-border 
      rounded-xl 
      mb-5 
      break-inside-avoid-column">
      <div
        className="w-full 
      p-4 
      max-h-[200px] 
      md:max-h-[150px] 
      sm:max-h-[100px] 
      sm:max-w-full 
      overflow-hidden">
        <img src={imgPath} alt="" />
      </div>
      <div className="px-5 mt-2">
        <h3 className="font-bold">
          <a href="">
            {title}
          </a>
        </h3>
        <p className="text-sm mt-2">{summary}</p>
        <div className="flex items-center gap-4 mt-2 mb-4">
          <span className="text-xs text-gray-400">{date}</span>
          <Link
            to={link}
            className="
            text-blue-500 
            underline ml-2 
            cursor-pointer 
            hover:text-blue-700">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  )
};

export default BlogCard;
