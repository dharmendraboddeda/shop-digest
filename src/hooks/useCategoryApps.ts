import type { ICategoryCardProps } from "@/components/CategoryCard";
import Flipkart from "@/assets/flipkart.jpg";
import Myntra from "@/assets/myntra.jpg";
import Shopify from "@/assets/shopify.jpg";
import Printerest from "@/assets/printerest.jpg";
import Snap from "@/assets/snap.jpg";
import Instagram from "@/assets/instagram.jpg";

const logos = [Shopify, Myntra, Flipkart, Printerest, Snap, Instagram];

const getRandomApps = () => {
  return Array.from({ length: 3 }, () => {
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    return {
      title: randomLogo.src.split("/").pop()?.split(".")[0] || "App",
      image: randomLogo.src,
    };
  });
};

export const useCategoryApps = (): ICategoryCardProps[] => {
  const categories = [
    {
      cardTitle: "Works with Shopify POS",
      cardDescription:
        "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    },
    {
      cardTitle: "Top E-commerce Apps",
      cardDescription:
        "Discover the top e-commerce apps to boost your online store's performance and sales.",
    },
    {
      cardTitle: "Popular Social Media Integrations",
      cardDescription:
        "Integrate your store with popular social media platforms to reach a wider audience.",
    },
  ];

  return Array.from({ length: 60 }, () => {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    return {
      ...randomCategory,
      apps: getRandomApps(),
    };
  });
};
