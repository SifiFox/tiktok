import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "0uwome7e",
  dataset: "production",
  apiVersion: "2023-03-30",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
