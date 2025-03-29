// MeetOurTeamSection.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Arinaitwe Fausta", role: "Founder & CEO", quote: "Bringing fresh food to every table is our mission." },
  { name: "Atuhairwe K. Bridget", role: "Head of Operations", quote: "Quality and consistency are our top priorities." },
  { name: "Nalugwa Josephine", role: "Chief Sourcing Officer", quote: "We partner with the best local farmers." },
  { name: "Kisakye Michelle", role: "Customer Relations Manager", quote: "Your satisfaction is our success." }
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function MeetOurTeamSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-3">
            The People Behind Fresh Harvest
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Our passionate team is dedicated to bringing you the best quality produce.
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((person, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-200 to-green-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">{person.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
              <p className="text-green-600 font-medium mb-3">{person.role}</p>
              <p className="text-gray-600 italic text-sm">"{person.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
