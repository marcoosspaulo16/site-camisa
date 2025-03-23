import React from "react";
import ProductHero from "@/components/ProductHero";
import ProductDetails from "@/components/ProductDetails";
import PurchaseActions from "@/components/PurchaseActions";

export default function Home() {
  // Product data
  const productData = {
    name: "Premium Cotton T-Shirt",
    description:
      "Our signature t-shirt combines timeless design with exceptional comfort. Made from 100% organic cotton, this versatile piece features a classic crew neck and relaxed fit that pairs perfectly with any outfit.",
    price: 29.99,
    originalPrice: 39.99,
    material: "100% Organic Cotton",
    care: [
      "Machine wash cold",
      "Tumble dry low",
      "Do not bleach",
      "Iron on low heat",
    ],
    inStock: true,
    images: [
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
        alt: "Navy t-shirt front view",
        color: "navy",
      },
      {
        src: "https://images.unsplash.com/photo-1618354691229-a3f5041e0379?w=800&q=80",
        alt: "Navy t-shirt back view",
        color: "navy",
      },
    ],
    colors: [
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
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">MINIMALIST</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shop
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                aria-label="Search"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                aria-label="Cart"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex text-sm text-gray-500">
              <li className="mr-2">
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mr-2">/</li>
              <li className="mr-2">
                <a href="#" className="hover:text-gray-900">
                  Clothing
                </a>
              </li>
              <li className="mr-2">/</li>
              <li className="font-medium text-gray-900">{productData.name}</li>
            </ol>
          </nav>

          {/* Product Hero Section */}
          <ProductHero
            productName={productData.name}
            images={productData.images}
            colors={productData.colors}
            sizes={productData.sizes}
          />

          {/* Product Details and Purchase Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductDetails
              name={productData.name}
              description={productData.description}
              price={productData.price}
              originalPrice={productData.originalPrice}
              material={productData.material}
              care={productData.care}
              inStock={productData.inStock}
            />
            <PurchaseActions
              price={`$${productData.price.toFixed(2)}`}
              inStock={productData.inStock}
              estimatedDelivery="3-5 business days"
              shippingInfo="Free shipping on orders over $50"
            />
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Related Product Cards */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={`https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80`}
                    alt="Related product"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  Essential T-Shirt
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$25.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">MINIMALIST</h3>
              <p className="text-gray-400">
                Premium quality clothing with minimalist design aesthetic.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full text-gray-900 focus:ring-black focus:border-black"
                />
                <button className="bg-white text-gray-900 px-4 py-2 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MINIMALIST. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
