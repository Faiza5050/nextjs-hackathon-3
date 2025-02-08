import { defineType, defineField, defineArrayMember } from "sanity";
import React from "react";
export default defineType({
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    // Order Status
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        layout: "radio",
      },
      initialValue: "Pending",
    }),

    // Cart Items
    // defineField({
    //   name: "cartItems",
    //   title: "Cart Items",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "object",
    //       fields: [
    //         { name: "title", title: "Product Name", type: "string" },
    //         { name: "quantity", title: "Quantity", type: "number" },
    //         { name: "price", title: "Price", type: "number" },
    //         { name: "imageUrl", title: "Image URL", type: "url" },
    //       ],
    //     }),
    //   ],
    // }),

    //
    // Cart Items
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "title", title: "Product Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
            { name: "imageUrl", title: "Image URL", type: "url" },
          ],
          preview: {
            select: {
              title: "title",
              imageUrl: "imageUrl",
            },
            prepare(selection) {
              const { title, imageUrl } = selection;

              return {
                title,
                subtitle: "Cart Item",
                media: imageUrl
                  ? React.createElement("img", {
                      src: imageUrl,
                      style: {
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      },
                    })
                  : undefined,
              };
            },
          },
        }),
      ],
    }),

    // Shipping Details
    defineField({
      name: "shippingDetails",
      title: "Shipping Details",
      type: "object",
      fields: [
        { name: "name", title: "Full Name", type: "string" },
        { name: "address", title: "Address", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "zipCode", title: "ZIP Code", type: "string" },
        { name: "country", title: "Country", type: "string" },
      ],
    }),

    // Total Price
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    }),

    // Created At (Timestamp)
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
