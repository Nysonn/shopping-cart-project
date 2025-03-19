import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700 mb-2">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! 
          Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Information */}
          <div className="bg-gradient-to-b from-yellow-400 to-green-300 p-8 text-white md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Address:</p>
                <p>123 Harvest Street, Kampala, Uganda</p>
              </div>
              <div>
                <p className="font-bold">Phone:</p>
                <p>+256 123 456 789</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p>info@freshharvest.com</p>
              </div>
              <div>
                <p className="font-bold">Hours:</p>
                <p>Monday - Saturday: 8am - 6pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:w-2/3">
            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                <p className="font-bold">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 