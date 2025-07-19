
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Send, User, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkogbww", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        alert("❌ Failed to send message.");
        console.error(result);
      }
    } catch (error) {
      console.error("Formspree error:", error);
      alert("❌ Something went wrong! Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contactus" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-orange-400">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Let's create something amazing together. Drop me a message!
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Map Section */}
          <div className={`lg:w-2/3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 h-96 lg:h-full relative group">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                frameBorder="0"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi,Pakistan+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: 'grayscale(0.8) contrast(1.2) brightness(0.9)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm uppercase">Address</h3>
                        <p className="text-gray-600 mt-1 text-sm">Eros Complex near Nasheman Cinema Saddar Karachi</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm uppercase">Email</h3>
                        <a href="mailto:kavitaluhana11@gmail.com" className="text-blue-600 hover:text-blue-800 mt-1 text-sm">
                          kavitaluhana11@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm uppercase">Phone</h3>
                        <a href="tel:03197946724" className="text-green-600 hover:text-green-800 mt-1 text-sm">
                          03197946724
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:w-1/3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 h-full">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mb-3">Send Message</h3>
                    <p className="text-gray-500">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${focusedField === 'name' || formData.name ? ' text-purple-600' : ' text-purple-600'}`}>
                        <User className="w-5 h-5 text-purple-600" />

                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/90 border border-gray-300 rounded-2xl py-4 pl-14 pr-4 text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 backdrop-blur-sm transition-all duration-200"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${focusedField === 'email' || formData.email ? 'text-purple-400' : 'text-gray-400'}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/90 border border-gray-300 rounded-2xl py-4 pl-14 pr-4 text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 backdrop-blur-sm transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <div className={`absolute left-4 top-4 transition-colors duration-200 ${focusedField === 'message' || formData.message ? 'text-purple-400' : 'text-gray-400'}`}>
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/90 border border-gray-300 rounded-2xl py-4 pl-14 pr-4 text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 backdrop-blur-sm resize-none transition-all duration-200"
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="button"
                      onClick={handleSub}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 transition-all duration-200"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;