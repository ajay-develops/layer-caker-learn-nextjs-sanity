import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getVanityName = (image: any): string | undefined => {
  if (!image?.asset?._ref) return undefined;

  // Asset ref format: image-{sha1hash}-{dimensions}-{extension}
  // Example: image-abc123-1920x1080-jpg
  // The hash often includes the original filename encoded
  const ref = image.asset._ref;
  const parts = ref.split("-");

  // Extract the hash portion (between 'image-' and dimensions)
  if (parts.length >= 2) {
    return parts[1]; // Use the asset hash as vanity name
  }

  return undefined;
};
