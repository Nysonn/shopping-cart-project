import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Form validation
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
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) return;
    
    // Simulate API call
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Contact information data
  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-xl" />, 
      title: "Our Location", 
      details: ["123 Harvest Street", "Kampala, Uganda"]
    },
    { 
      icon: <FaPhoneAlt className="text-xl" />, 
      title: "Phone Number", 
      details: ["+256 123 456 789", "+256 987 654 321"]
    },
    { 
      icon: <FaEnvelope className="text-xl" />, 
      title: "Email Address", 
      details: ["info@freshharvest.com", "support@freshharvest.com"]
    },
    { 
      icon: <FaClock className="text-xl" />, 
      title: "Business Hours", 
      details: ["Monday - Saturday: 8am - 6pm", "Sunday: Closed"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-green-50/50 to-white pb-16"
    >
      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium tracking-wide mb-4 border border-green-200"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              We're Here To Help
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Let's Start a 
              <span className="relative inline-block mx-3">
                Conversation
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 124 12" fill="none">
                  <path d="M1 8.5C20.6667 3.33333 59.7 -4.49999 123.5 8.5" stroke="#16a34a" strokeWidth="2"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Have questions about our products or services? We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Information Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                {/* Left side with gradient background */}
                <div className="bg-gradient-to-br from-green-600 via-green-500 to-green-600 p-8 lg:p-12 text-white lg:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
                  <div className="relative z-10">
                    <motion.div
                      variants={itemVariants}
                    >
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

                {/* Enhanced form section */}
                <motion.div 
                  variants={itemVariants}
                  className="p-8 lg:p-12 lg:w-2/3"
                >
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
                          {formErrors.name && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                          )}
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
                          {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                          )}
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
                        {formErrors.subject && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                        )}
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
                        {formErrors.message && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                        )}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Got more questions? We're here to help! Check our most common questions or contact us directly.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-4"
          >
            {[
              { 
                question: "What is your delivery area?", 
                answer: "We currently deliver to all areas within Kampala and neighboring districts. Enter your address at checkout to confirm if delivery is available in your area." 
              },
              { 
                question: "How do I track my order?", 
                answer: "Once your order is confirmed, you'll receive a tracking link via email and SMS that allows you to follow your delivery in real-time." 
              },
              { 
                question: "What happens if I'm not satisfied with the product quality?", 
                answer: "We have a 100% satisfaction guarantee. If you're not happy with any product, please contact us within 24 hours of delivery and we'll replace it or issue a refund." 
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 text-lg font-medium cursor-pointer marker:content-none">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gray-400">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
} 