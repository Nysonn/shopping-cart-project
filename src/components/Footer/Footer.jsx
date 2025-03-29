import React from "react";
import NewsletterSubscription from "./NewsletterSubscription";
import CompanyInfo from "./CompanyInfo";
import FooterLinks from "./FooterLinks";
import BadgesSection from "./BadgesSection";
import SocialMediaAndCopyright from "./SocialMediaAndCopyright";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <NewsletterSubscription />
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-700/50">
          <CompanyInfo />
          <FooterLinks />
        </div>
        <BadgesSection />
        <SocialMediaAndCopyright />
      </div>
    </footer>
  );
}
