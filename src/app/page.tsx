import React from "react";
import ProductHero from "@/components/ProductHero";
import camisa1frente from "@/images/camisas_site.zip - off - frente.jpg"
import camisa1costa2 from "@/images/off-verso2.jpg"
import camisa3frente from "@/images/azul-frente.jpg"
import camisa3costa from "@/images/azul-verso.jpg"
import camisa3costa2 from "@/images/azul-verso2.jpg"
import { FaLinkedinIn, FaGithub, FaRegGrinTears } from "react-icons/fa";
import logo from "@/images/logomedicina.png";


export default function Home() {
  // Product data
  const productData = {
    name: "Camisa | Medicina",
    description:
      "Our signature t-shirt combines timeless design with exceptional comfort. Made from 100% organic cotton, this versatile piece features a classic crew neck and relaxed fit that pairs perfectly with any outfit.",
    price: 55.00,
    originalPrice: 65.99,
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
        src: camisa1frente.src,
        alt: "Camisa Off front view",
        color: "off",
      },
      {
        src: camisa1costa2.src,
        alt: "Camisa Off back view",
        color: "off",
      },
      {
        src: camisa3frente.src,
        alt: "Camisa Blue front view",
        color: "azul",
      },
      {
        src: camisa3costa2.src,
        alt: "Camisa Blue back view",
        color: "azul",
      },
      
    ],
    colors: [
      {
        id: "azul",
        name: "Azul",
        value: "#000000",
        thumbnail:
        camisa3frente.src,
      },
      {
        id: "off",
        name: "Off",
        value: "#FFFFFF",
        thumbnail:
          camisa1frente.src,
      },
    
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <img src={logo.src} alt="Logo" className="h-16" />

            <div className="text-xl font-bold">T126</div>
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
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>

            <p className="mt-2">
              Developed by: Marcos Paulo{" "}
            <a
              href="https://www.linkedin.com/in/marcos-paulo-12766621a/" // Substitua pelo seu link do LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
            <FaLinkedinIn className="inline-block h-5 w-5" />
            </a>
            <a
              href="https://github.com/marcoosspaulo16" // Substitua pelo seu link do GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <FaGithub className="inline-block h-5 w-5" />
            </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
