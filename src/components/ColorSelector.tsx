"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ColorOption {
  id: string;
  name: string;
  value: string;
  thumbnail: string;
}

interface ColorSelectorProps {
  colors?: ColorOption[];
  selectedColor?: string;
  onColorChange?: (colorId: string) => void;
}

const ColorSelector = ({
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
    {
      id: "gray",
      name: "Gray",
      value: "#808080",
      thumbnail:
        "https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?w=100&q=80",
    },
  ],
  selectedColor = "black",
  onColorChange = () => {},
}: ColorSelectorProps) => {
  const [activeColor, setActiveColor] = useState(selectedColor);

  const handleColorSelect = (colorId: string) => {
    setActiveColor(colorId);
    onColorChange(colorId);
  };

  return (
    <div className="bg-white w-full max-w-md">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-700">
          Color: {colors.find((c) => c.id === activeColor)?.name}
        </h3>
      </div>
      <div className="flex space-x-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => handleColorSelect(color.id)}
            className={cn(
              "relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all",
              activeColor === color.id
                ? "border-black ring-2 ring-black ring-offset-1"
                : "border-gray-200",
            )}
            aria-label={`Select ${color.name} color`}
            title={color.name}
          >
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ backgroundColor: color.value }}
            >
              {color.thumbnail && (
                <img
                  src={color.thumbnail}
                  alt={color.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
