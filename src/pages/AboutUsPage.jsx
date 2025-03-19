import React from "react";
import welcomeImg from '../assets/mix-fruits.jpg';

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 mb-2">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn more about Fresh Harvest's mission, values, and the people behind our products.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <img 
            src={welcomeImg} 
            alt="Fresh fruits and vegetables" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Fresh Harvest was founded in 2018 with a simple mission: to bring the freshest, most nutritious produce directly from local farms to your table. 
            What began as a small market stall has grown into a thriving business, but our core values remain unchanged.
          </p>
          <p className="text-gray-700">
            We believe that everyone deserves access to fresh, healthy food. That's why we partner with local farmers who practice sustainable agriculture, 
            ensuring that our products are not only good for you but also good for the environment.
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-600 mb-2">Freshness</h3>
            <p className="text-gray-700">
              We guarantee that our produce reaches you at peak freshness, often harvested within 24 hours of delivery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-600 mb-2">Sustainability</h3>
            <p className="text-gray-700">
              We support eco-friendly farming practices and work to reduce food waste throughout our supply chain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-600 mb-2">Community</h3>
            <p className="text-gray-700">
              By supporting local farmers, we help build stronger communities and economies in the regions we serve.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Sarah Mugisha", role: "Founder & CEO" },
            { name: "Daniel Okello", role: "Head of Operations" },
            { name: "Rebecca Aceng", role: "Chief Sourcing Officer" },
            { name: "Joseph Mukasa", role: "Customer Relations Manager" }
          ].map((person, index) => (
            <div key={index} className="bg-gradient-to-b from-yellow-50 to-green-50 p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-green-700">{person.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-green-700">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 