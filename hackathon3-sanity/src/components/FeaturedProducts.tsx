"use client";

import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = groq`*[_type == "products" && "featured" in tags] {
        _id,
        title,
        price,
        image,
        slug
      }`;
      const result: Product[] = await client.fetch(query);
      setProducts(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <Link href={`/productDetail/${product.slug.current}`}>
                <div className="cursor-pointer">
                  {product.image && (
                    <Image
                      src={urlFor(product.image)}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                  <p className="text-gray-600">${product.price} USD</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
