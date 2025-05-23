import React from "react";
import { motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection({ testimonials, testimonialsRef }) {
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.2 });

  return (
    <section ref={testimonialsRef} className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={testimonialsInView ? { opacity: 1 } : {}}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mb-4 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaStar className="text-xl text-yellow-500" />
                </div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} mx-0.5`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic text-center">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
