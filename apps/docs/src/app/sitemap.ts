import type { MetadataRoute } from "next";
import { source } from "@/lib/content/source";
import { baseUrl } from "@/lib/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();
  const items = await Promise.all(
    source.getPages().map((page) => {
      return {
        url: url(page.url),
        changeFrequency: "weekly",
        lastModified: page.data.lastModified
          ? new Date(page.data.lastModified)
          : undefined,
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    })
  );

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/docs"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...items.filter((v) => v !== undefined),
  ];
}
