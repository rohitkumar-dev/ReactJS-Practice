import React from "react";

function ImageGallery() {
  const images = [
    "https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg",
  ];

  return (
    <div className="p-0 m-0">
      {images.map((image, i) => (
        <div key={i} className="h-60 px-5 bg-amber-900 border border-amber-100">
          <img  src={image} alt="gallery image" className="w-full h-full object-cover"/>;
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
