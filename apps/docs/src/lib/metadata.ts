import type { Metadata } from "next/types";
import { paths } from "@/config/paths";
import { urls } from "@/config/urls";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: urls.production,
      images: paths.og.root,
      siteName: "Sora UI",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@money_is_shark",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: paths.og.root,
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL(urls.development)
    : new URL(urls.production);
