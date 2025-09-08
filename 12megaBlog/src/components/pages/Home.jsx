import React, { useEffect, useMemo, useState } from "react";
import service from "../../appwrite/config";
import { Container, PostCard, ImageSlider, StartBtnArea, ImageGallery, ContactForm } from "../index";


function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center ">
  //       <Container>
  //         <div className="flex flex-wrap">
  //           <div className="p-2 w-full">
  //             <h1 className="text-2xl font-bold hover:text-gray-500">
  //               Login to read posts
  //             </h1>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }
  return (
    <div className="w-full ">

      <ImageSlider/>
      <StartBtnArea/>

      <div className="my-10 ">
        <p className="px-6 py-5 sm:px-30 bg-amber-500 text-white font-medium text-2xl">Featured Blogs</p>
      </div>
      
      <Container>
        <div className=" ">
          {posts.map((post) => (
            <div key={post.$id} className="mx-3 my-6 sm">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>

      <ImageGallery/>

      <ContactForm/>
    </div>
  );
}

export default Home;
