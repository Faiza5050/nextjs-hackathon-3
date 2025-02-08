import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
// import orders from "@sanity/order"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};
