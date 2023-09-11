"use client";
import React from "react";
import ScrollCarousel from "scroll-carousel-react";

const ScrollCarouselComponent = () => {
  const images = [
    {
      image:
        "https://media.istockphoto.com/id/498301640/tr/vekt%C3%B6r/big-sale-banner.jpg?s=612x612&w=0&k=20&c=sVi8Wm5r4cDe-gUc2ZxyxYI_S8vUj2gV7XfVHVYiCTs=",
    },
    {
      image:
        "https://media.istockphoto.com/id/498301640/tr/vekt%C3%B6r/big-sale-banner.jpg?s=612x612&w=0&k=20&c=sVi8Wm5r4cDe-gUc2ZxyxYI_S8vUj2gV7XfVHVYiCTs=",
    },
    {
      image:
        "https://media.istockphoto.com/id/498301640/tr/vekt%C3%B6r/big-sale-banner.jpg?s=612x612&w=0&k=20&c=sVi8Wm5r4cDe-gUc2ZxyxYI_S8vUj2gV7XfVHVYiCTs=",
    },
    {
      image:
        "https://media.istockphoto.com/id/498301640/tr/vekt%C3%B6r/big-sale-banner.jpg?s=612x612&w=0&k=20&c=sVi8Wm5r4cDe-gUc2ZxyxYI_S8vUj2gV7XfVHVYiCTs=",
    },
  ];

  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={8}
      onReady={() => console.log("I am ready")}
      className="border rounded-lg shadow-md p-4"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-64 h-40 mx-auto p-4 bg-white rounded-lg shadow-md"
        >
          <img
            src={image.image}
            alt={`Image ${index + 2}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
