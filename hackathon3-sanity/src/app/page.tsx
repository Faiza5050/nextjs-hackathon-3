"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  badge?: string;
  slug: {
    current: string;
    _type: string;
  };
  quantity: number;
}

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "products" && "featured" in tags] {
        _id,
        title,
        price,
        description,
        "image": image,
        "slug": slug.current,
        tags      
      }`;
      const result = await client.fetch(query);
      setFeaturedProducts(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      
      <Hero />

      <div>
        <h1 className="text-3xl font-bold mb-20 text-center">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={urlFor(product.image) ?? "/placeholder.jpg"} // Fallback image if URL is not available
                  alt={product.title}
                  width={100}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600 mt-2">Price: ${product.price}</p>

                {product.badge && (
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mt-2">
                    {product.badge}
                  </span>
                )}

                <Link
                  href={`/productDetail/${product.slug}`}
                  className="bg-red-400 px-4 py-2 rounded block text-center mt-2"
                >
                  View Details
                </Link>

                <AddToCartButton
                  product={{
                    _id: product._id,
                    title: product.title,
                    description: product.description || "",
                    price: product.price,
                    image: urlFor(product.image),
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded block text-center mt-2 w-full hover:bg-blue-700 transition-all"
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No featured products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
