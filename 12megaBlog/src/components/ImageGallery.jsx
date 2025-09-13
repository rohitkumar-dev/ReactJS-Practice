import React from "react";

function ImageGallery() {
  const images = [
    "https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
  ];

  return (
      <div className="h-full mx-6 pt-2 pb-12 sm:mx-24 ">
        {images.map((image, i) => (
          <div key={i} className="h-60 pt-0">
            <img
              src={image}
              alt="gallery image"
              className="w-full h-full object-cover mt-10 rounded-xl "
            />
            
          </div>
        ))}
      </div>
  );
}

export default ImageGallery;
