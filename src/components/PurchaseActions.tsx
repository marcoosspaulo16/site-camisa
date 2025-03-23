"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Truck, ShoppingCart, Clock } from "lucide-react";

interface PurchaseActionsProps {
  price?: string;
  inStock?: boolean;
  estimatedDelivery?: string;
  shippingInfo?: string;
}

const PurchaseActions = ({
  price = "$29.99",
  inStock = true,
  estimatedDelivery = "3-5 business days",
  shippingInfo = "Free shipping on orders over $50",
}: PurchaseActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg space-y-6">
      {/* Price and Stock Status */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{price}</div>
        <div className="text-sm">
          {inStock ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Quantity:</span>
        <div className="flex items-center border rounded-md">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 border-r hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-12 text-center border-none focus:ring-0"
            aria-label="Quantity"
          />
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 border-l hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        className="w-full py-6 text-base font-semibold flex items-center justify-center gap-2"
        disabled={!inStock}
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>

      {/* Shipping Information */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="h-4 w-4" />
          <span>{shippingInfo}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Estimated delivery: {estimatedDelivery}</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseActions;
