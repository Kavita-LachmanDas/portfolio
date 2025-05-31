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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div id='contactus' className="min-h-screen  py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold  mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-orange-400">
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
                marginHeight="0" 
                marginWidth="0" 
                scrolling="no" 
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi,Pakistan+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
                style={{filter: 'grayscale(0.8) contrast(1.2) brightness(0.9)'}}
              />
              
              {/* Floating Contact Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-3 group">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Address</h3>
                        <p className="text-gray-600 mt-1 text-sm">Eros Complex near Nasheman Cinema Saddar Karachi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Email</h3>
                        <a href="mailto:kavitaluhana11@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors mt-1 text-sm">
                          kavitaluhana11@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 group">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm tracking-wide uppercase">Phone</h3>
                        <a href="tel:03197946724" className="text-green-600 hover:text-green-800 transition-colors mt-1 text-sm">
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
                    <h3 className="text-3xl font-bold text-white mb-3">Send Message</h3>
                    <p className="text-gray-300">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <div className={`absolute left-4 top-4 transition-all duration-300 ${focusedField === 'name' || formData.name ? 'text-purple-400' : 'text-gray-400'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className={`absolute left-4 top-4 transition-all duration-300 ${focusedField === 'email' || formData.email ? 'text-purple-400' : 'text-gray-400'}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <div className={`absolute left-4 top-4 transition-all duration-300 ${focusedField === 'message' || formData.message ? 'text-purple-400' : 'text-gray-400'}`}>
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="text-gray-400 text-sm mt-6 text-center">
                    I'll get back to you within 24 hours!
                  </p>
                </>
              ) : (
                /* Success State */
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

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;