"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

interface SanityImageAsset {
  _ref: string;
  _type: string;
}

interface SanityImage {
  asset: SanityImageAsset;
  _type: "image";
}

interface Product {
  _id: string;
  title: string;
  description: string;
  image: SanityImage | SanityImage[] | string;
  price: number;
  slug: { current: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) return null;

  try {
    const product = await client.fetch(
      groq`*[_type == "products" && slug.current == $slug][0] {
        _id,
        title,
        description,
        image,
        price,
        slug
      }`,
      { slug }
    );

    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [notFoundState, setNotFoundState] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      if (!slug) {
        setNotFoundState(true);
        return;
      }

      const data = await getProduct(slug);
      if (!data) {
        setNotFoundState(true);
        return;
      }

      setProduct(data);
    }
    fetchProduct();
  }, [slug]);

  if (notFoundState) {
    return <div className="text-center text-red-500 text-xl">Product not found</div>;
  }

  if (!product) return <p className="text-center">Loading...</p>;

  let imageUrl = "/placeholder.jpg";

  if (typeof product.image === "string" && product.image.startsWith("http")) {
    imageUrl = product.image;
  } else if (product.image && typeof product.image === "object" && "asset" in product.image) {
    imageUrl = urlFor(product.image, 500, 500);
  } else if (Array.isArray(product.image) && product.image.length > 0) {
    if (typeof product.image[0] === "object" && "asset" in product.image[0]) {
      imageUrl = urlFor(product.image[0], 500, 500);
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          <Image
            src={imageUrl}
            alt={product.title || "Product Image"}
            width={500}
            height={500}
            className="rounded-lg shadow-md object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
