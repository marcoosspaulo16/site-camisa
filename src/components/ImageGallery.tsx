"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images?: {
    src: string;
    alt: string;
    color: string;
  }[];
  selectedColor?: string;
}

const ImageGallery = ({
  images = [
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      alt: "White t-shirt front view",
      color: "white",
    },
    {
      src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      alt: "White t-shirt back view",
      color: "white",
    },
    {
      src: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
      alt: "Black t-shirt front view",
      color: "black",
    },
    {
      src: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800&q=80",
      alt: "Black t-shirt back view",
      color: "black",
    },
    {
      src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      alt: "Blue t-shirt front view",
      color: "blue",
    },
    {
      src: "https://images.unsplash.com/photo-1618354691229-a3f5041e0379?w=800&q=80",
      alt: "Blue t-shirt back view",
      color: "blue",
    },
  ],
  selectedColor = "white",
}: ImageGalleryProps) => {
  // Filter images by selected color
  const filteredImages = images.filter(
    (image) => image.color === selectedColor,
  );

  // State for current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  // If no images match the selected color, show a placeholder
  if (filteredImages.length === 0) {
    return (
      <div className="relative w-full h-[550px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available for this color</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[700px] h-[550px] bg-white">
      {/* Main image */}
      <div className="relative w-full h-[480px] overflow-hidden rounded-lg">
        <Image
          src={filteredImages[currentIndex].src}
          alt={filteredImages[currentIndex].alt}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4">
        {filteredImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${currentIndex === index ? "border-black" : "border-transparent"}`}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
