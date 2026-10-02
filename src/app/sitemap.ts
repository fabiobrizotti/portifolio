import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fabiobrizotti.vercel.app",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://fabiobrizotti.vercel.app/blog",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://fabiobrizotti.vercel.app/blog/anne-ia",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://fabiobrizotti.vercel.app/blog/anne-ia/workflow",
      lastModified: new Date("2026-10-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
