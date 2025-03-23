"use client";

import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

interface ProductHeroProps {
  productName?: string;
  images?: {
    src: string;
    alt: string;
    color: string;
  }[];
  colors?: {
    id: string;
    name: string;
    value: string;
    thumbnail: string;
  }[];
  sizes?: string[];
}

const ProductHero = ({
  productName = "Premium Cotton T-Shirt",
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
      color: "navy",
    },
    {
      src: "https://images.unsplash.com/photo-1618354691229-a3f5041e0379?w=800&q=80",
      alt: "Blue t-shirt back view",
      color: "navy",
    },
  ],
  colors = [
    {
      id: "black",
      name: "Black",
      value: "#000000",
      thumbnail:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=100&q=80",
    },
    {
      id: "white",
      name: "White",
      value: "#FFFFFF",
      thumbnail:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&q=80",
    },
    {
      id: "navy",
      name: "Navy Blue",
      value: "#000080",
      thumbnail:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=100&q=80",
    },
  ],
  sizes = ["S", "M", "L", "XL"],
}: ProductHeroProps) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left side - Image Gallery */}
        <div className="w-full md:w-3/5">
          <ImageGallery images={images} selectedColor={selectedColor} />
        </div>

        {/* Right side - Product Info and Selectors */}
        <div className="w-full md:w-2/5 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{productName}</h1>

          {/* Color Selector */}
          <div className="pt-4">
            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
          </div>

          {/* Size Selector */}
          <div className="pt-2">
            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
            />
          </div>

          {/* Additional information */}
          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Selected options:{" "}
              {colors.find((c) => c.id === selectedColor)?.name}, Size{" "}
              {selectedSize}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
