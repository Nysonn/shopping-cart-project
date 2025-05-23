import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div variants={itemVariants} className="p-8 lg:p-12 lg:w-2/3">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Send Us A Message
        <div className="h-1 w-20 bg-green-500 mt-2 rounded-full"></div>
      </h2>
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex items-start gap-4"
        >
          <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
          <div>
            <p className="font-bold">Thank you for your message!</p>
            <p>We've received your inquiry and will get back to you as soon as possible, usually within 24 hours.</p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
                placeholder="Your name"
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
                placeholder="Your email"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
              placeholder="What is this regarding?"
            />
            {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
              placeholder="How can we help you?"
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Send Message
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
