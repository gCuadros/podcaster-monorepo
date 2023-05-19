import { DefaultSeoProps } from "next-seo";

const SEO_CONFIG: DefaultSeoProps = {
  title: "Podcaster",
  description:
    "Discover engaging and informative podcasts on our site. From interviews to storytelling, our podcasts cover a wide range of topics. Listen now for free!",
  openGraph: {
    title: "Podcaster.com",
    description:
      "Discover engaging and informative podcasts on our site. From interviews to storytelling, our podcasts cover a wide range of topics. Listen now for free!",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "/assets/logo.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
    ],
    siteName: "Podcaster",
  },
  twitter: {
    site: "@podcaster",
    cardType: "summary_large_image",
  },
};

export default SEO_CONFIG;
