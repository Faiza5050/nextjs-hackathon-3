import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import AddToCartButton from "@/components/AddToCartButton";
import useCartStore from "@/store/useCartStore";

interface Products {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ProductDetailProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Products | null> {
  const product = await client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "image": image.asset->url,
      price,
    }`,
    { slug }
  );

  return product || null;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="aspect-square">
          {product.image && (
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
