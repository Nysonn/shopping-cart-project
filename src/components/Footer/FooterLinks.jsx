import React from "react";
import FooterLinkGroup from "./FooterLinkGroup";

export default function FooterLinks() {
  const footerLinkGroups = [
    {
      title: "Shop",
      links: [
        { name: "All Products", url: "/products" },
        { name: "Fresh Fruits", url: "/products?category=fruits" },
        { name: "Vegetables", url: "/products?category=vegetables" },
        { name: "Organic Products", url: "/products?category=organic" },
        { name: "Special Offers", url: "/products?special=true" },
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "My Account", url: "/account" },
        { name: "Track Your Order", url: "/orders/track" },
        { name: "Shipping Policy", url: "/shipping-policy" },
        { name: "Returns & Exchanges", url: "/returns" },
        { name: "FAQs", url: "/faqs" },
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", url: "/about" },
        { name: "Farm Locations", url: "/locations" },
        { name: "Sustainability", url: "/sustainability" },
        { name: "Careers", url: "/careers" },
        { name: "Contact Us", url: "/contact" },
      ]
    }
  ];

  return (
    <>
      {footerLinkGroups.map((group, index) => (
        <FooterLinkGroup key={index} title={group.title} links={group.links} />
      ))}
    </>
  );
}
