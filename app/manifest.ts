import type { MetadataRoute } from "next";

/** Web app manifest, from ebi-yaa.com's site.webmanifest (colours matched to this site's background). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ebi-Yaa Kwaw",
    short_name: "Ebi-Yaa Kwaw",
    icons: [
      { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#f1f1f3",
    background_color: "#f1f1f3",
    display: "standalone",
  };
}
