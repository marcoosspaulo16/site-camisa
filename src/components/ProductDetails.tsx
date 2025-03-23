"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductDetailsProps {
  name?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  material?: string;
  care?: string[];
  inStock?: boolean;
}

export default function ProductDetails({
  name = "Premium Cotton T-Shirt",
  description = "Our signature t-shirt combines timeless design with exceptional comfort. Made from 100% organic cotton, this versatile piece features a classic crew neck and relaxed fit that pairs perfectly with any outfit.",
  price = 29.99,
  originalPrice = 39.99,
  material = "100% Organic Cotton",
  care = [
    "Machine wash cold",
    "Tumble dry low",
    "Do not bleach",
    "Iron on low heat",
  ],
  inStock = true,
}: ProductDetailsProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="flex flex-col space-y-6 bg-white p-6 rounded-md">
      {/* Product Name */}
      <div>
        <h1 className="text-3xl font-medium text-gray-900">{name}</h1>

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
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Material Information */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-2">
          Material
        </h3>
        <p className="text-gray-600">{material}</p>
      </div>

      {/* Care Instructions */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-2">
          Care
        </h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          {care.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div>
        <Separator className="my-2" />
        <div className="flex items-center">
          <span className="text-sm font-medium mr-2">Availability:</span>
          {inStock ? (
            <span className="text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
