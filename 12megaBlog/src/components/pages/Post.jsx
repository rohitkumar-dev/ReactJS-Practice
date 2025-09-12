import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/config";
import { Button, Container, SectionTag } from "../index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="">
      <SectionTag tagname={"Read Post"} />
      <div className="py-10 mx-2 sm:mx-24">
        <Container>
          <div className="w-full flex-row justify-center mb-6 rounded-xl ">
            {isAuthor && (
              <div className="w-full flex flex-row gap-5 pb-5">
                <Link to={`/edit-post/${post.$id}`} className="w-1/2">
                  <Button bgColor="bg-green-500 " className="w-full">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500 w-1/2 " onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
            <img
              src={service.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full h-60 sm:h-120 rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full bg-gray-500 rounded-lg p-5 ">
            <h1 className="text-2xl font-bold pb-5 text-center">
              {post.title}
            </h1>
            <div className="browser-css">{parse(post.content)}</div>
          </div>
        </Container>
      </div>
    </div>
  ) : null;
}
