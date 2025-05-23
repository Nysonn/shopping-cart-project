import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function ContactInfoSidebar() {
  return (
    <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-8 lg:p-12 text-white lg:w-1/3 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
      <div className="relative z-10">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">Let's Get In Touch</h2>
          <p className="mb-8 text-green-100">
            We're open for any suggestions or just to have a chat. Drop us a line and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/20 p-2 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-green-100">123 Harvest Street, Kampala, Uganda</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/20 p-2 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-green-100">+256 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/20 p-2 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-green-100">info@freshharvest.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/20 p-2 rounded-full">
                <FaClock />
              </div>
              <div>
                <h3 className="font-bold">Hours</h3>
                <p className="text-green-100">Monday - Saturday: 8am - 6pm</p>
                <p className="text-green-100">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}
