"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes?: string[];
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
}

const SizeSelector = ({
  sizes = ["S", "M", "L", "XL"],
  selectedSize = "M",
  onSizeChange = () => {},
}: SizeSelectorProps) => {
  const [activeSize, setActiveSize] = useState(selectedSize);

  const handleSizeChange = (size: string) => {
    setActiveSize(size);
    onSizeChange(size);
  };

  return (
    <div className="w-full max-w-[300px] bg-white p-4">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-700">Size</h3>
      </div>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            className={cn(
              "h-10 w-10 rounded-md border text-sm font-medium transition-colors",
              activeSize === size
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-gray-400",
            )}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-500">Size Guide</p>
    </div>
  );
};

export default SizeSelector;
