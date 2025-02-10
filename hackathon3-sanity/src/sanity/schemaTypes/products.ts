import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "priceWithoutDiscount",
      title: "Price without Discount",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Follow products and discounts on Instagram", value: "instagram" },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
