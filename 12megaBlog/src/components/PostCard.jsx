import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config.js";

export default function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="sm:flex w-full bg-gray-100 rounded-xl px-3 py-5">
      <div
        className="w-full h-45 justify-center sm:w-2/3 "
        //       style={{
        //   backgroundImage: `url("https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg")`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <img
          src={service.getFileView(featuredImage)}
          alt={title}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
      <div className="sm:w-1/3 sm:flex sm:flex-col sm:justify-between">
        <h2 className="text-2xl font-medium py-5 my-auto">{title}</h2>
        <div className="flex justify-end  bg-amber-800">
          <Link to={`/post/${$id}`} className="p-1 bg-amber-600">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
}
