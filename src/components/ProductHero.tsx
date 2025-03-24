"use client";

import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import ColorSelector from "./ColorSelector";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";

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
  price?: number;
  originalPrice?: number;
}

const ProductHero = ({
  productName = "Premium Cotton T-Shirt",
  images = [],
  price = 55.00,
  originalPrice = 65.00,
  colors = [
    {
      id: "green",
      name: "Green",
      value: "#000000",
      thumbnail:
        "",
    },
    {
      id: "off",
      name: "Off",
      value: "#FFFFFF",
      thumbnail:
        "",
    },
  ],
}: ProductHeroProps) => {
  const [selectedColor, setSelectedColor] = useState("green");

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId);
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

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

          {/* Additional information */}
          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Selected options:{" "}
              {colors.find((c) => c.id === selectedColor)?.name}
            </p>
          </div>

          {/* Price Section */}
        <div className="mt-2 flex items-center space-x-3">
          <span className="text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <>
              <span className="text-lg text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                {discount}% off
              </Badge>
            </>
          )}
        </div>

          {/* Order Button */}
          <Button className="w-full py-6 text-base font-semibold flex items-center justify-center gap-2">
          <a 
            href="https://docs.google.com/forms/d/1btz68cuXpIvv5sPV7cM3o3gwkuGpQbJUdAVesTnQTic/edit "
            target="_blank"
            rel="noopener noreferrer"
            >
              Faça seu pedido
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
