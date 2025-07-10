import type { Metadata } from "next";

export const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME || "Soradius";
export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Empowering businesses with digital innovation.";
export const siteKeywords =
  process.env.NEXT_PUBLIC_SITE_KEYWORDS || "Soradius, software development, cloud, mobile apps, web apps";
export const siteAuthor = process.env.NEXT_PUBLIC_SITE_AUTHOR || "Soradius Technologies";

export const defaultMetadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteAuthor }],
  generator: "Gatura.js",
  applicationName: siteTitle,
  referrer: "strict-origin" as "strict-origin", 
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://soradius.com"),
};

