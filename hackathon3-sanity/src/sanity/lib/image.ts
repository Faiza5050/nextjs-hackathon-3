import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource | null, width?: number, height?: number) => {
  if (!source || (typeof source !== "object" || !("asset" in source) || !source.asset?._ref)) {
    console.warn("Invalid image source:", source);
    return "/fallback-image.jpg";
  }

  try {
    let imageBuilder = builder.image(source);

    if (width) imageBuilder = imageBuilder.width(width);
    if (height) imageBuilder = imageBuilder.height(height);

    return imageBuilder.url();
  } catch (error) {
    console.error("Error generating image URL:", error);
    return "/fallback-image.jpg";
  }
};
