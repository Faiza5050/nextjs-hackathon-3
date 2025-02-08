import { useState, useEffect } from "react";
import Image from "next/image";
import { client as sanityClient } from "@/sanity/lib/client"

export default function CategoryList() {
  interface Category {
    title: string;
    image?: { asset: { url: string } };
    products: number;
  }

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "categories"]{ title, image, products }`;
      const data = await sanityClient.fetch(query);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.title}>
            <h2>{category.title}</h2>
            {category.image && <Image src={category.image.asset.url} alt={category.title} width={100} />}
            <p>Products: {category.products}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
