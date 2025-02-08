"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  interface Product {
    _id: string;
    title: string;
    price: number;
    image?: string;
    slug: {
      current: string;
    };
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result : Product[] = await client.fetch(allProducts);
      setProducts(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((products) => (
            <div key={products._id} className="border p-4">
              <Link href={`/components/products/${products.slug.current}`}>
              {products.image && (
                <Image
                  src={products.image}
                  alt="image"
                  width={100}
                  height={200}
                />
              )}
              <h3>{products.title}</h3>
              <p>{products.price} USD</p>
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
