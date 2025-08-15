import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../constants";
import { TypeBlog } from "./types";

const BlogDetails = ({
  index,
  title,
  summary,
  description,
  imgPath,
  date,
  link
}: TypeBlog) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const blog = blogs.find(b => b.link.split("/").pop() === slug);

  if (!blog) {
    return <h2 className="text-center mt-10">Blog not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 text-sm mb-6">{date}</p>
      <img src={imgPath} alt={title} className="mb-6 rounded-lg w-full" />
      <p className="text-lg leading-relaxed">{summary}</p>
    </div>
  );
};

export default BlogDetails;