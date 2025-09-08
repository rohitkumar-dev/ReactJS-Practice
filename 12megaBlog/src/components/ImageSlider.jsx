import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg",
  ];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImageUrl = images[imgIndex] || "";

  return (
    <div className="relative h-85 sm:h-120 w-full overflow-hidden flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${currentImageUrl})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 transition-all duration-1000 ease-in-out"
      ></div>
      <div className="relative z-10 p-6 text-white text-center">
        <h1 className="font-bold text-xl sm:text-4xl">
          The best blogging open platform for travellers and content creators
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          expedita.
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
