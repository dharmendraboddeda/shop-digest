import type { ICategoryCardProps } from "@/components/CategoryCard";
import Flipkart from "@/assets/flipkart.jpg";
import Myntra from "@/assets/myntra.jpg";
import Shopify from "@/assets/shopify.jpg";

export const useCategoryApps = (): ICategoryCardProps[] => {
  return Array.from({ length: 30 }, () => ({
    cardTitle: "Works with Shopify POS",
    cardDescription:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    apps: [
      {
        title: "Shopify",
        image: Shopify.src,
        appLink: "https://shopify.com",
      },
      {
        title: "Myntra",
        image: Myntra.src,
        appLink: "https://myntra.com",
      },
      {
        title: "Flipkart",
        image: Flipkart.src,
        appLink: "https://flipkart.com",
      },
    ],
  }));
};
