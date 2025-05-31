import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, TechCorp Pakistan",
      company: "TechCorp",
      text: "Outstanding work! The attention to detail and creativity exceeded our expectations. Highly professional and delivered on time.",
      rating: 5
    },
    {
      name: "Fatima Khan",
      role: "Marketing Director",
      company: "Digital Solutions",
      text: "Incredible design skills and perfect execution. The project was completed flawlessly and communication was excellent throughout.",
      rating: 5
    },
    {
      name: "Ali Raza",
      role: "Startup Founder",
      company: "InnovateHub",
      text: "Amazing portfolio work! Very creative approach and modern design. Would definitely recommend for any design project.",
      rating: 5
    },
    {
      name: "Sara Ahmed",
      role: "Product Manager",
      company: "WebFlow Agency",
      text: "Professional service with great results. The final output was exactly what we needed for our brand. Excellent collaboration!",
      rating: 5
    },
    {
      name: "Muhammad Usman",
      role: "Business Owner",
      company: "Local Enterprise",
      text: "Top-notch quality and service! The design perfectly captured our vision and helped boost our online presence significantly.",
      rating: 5
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id='testimonials' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What our amazing clients say about our work
          </p>
        </div>

        {/* Main Slider Container */}
        <div 
          className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Testimonial Content */}
          <div className="relative overflow-hidden h-96">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentIndex
                    ? 'translate-x-0 opacity-100 scale-100'
                    : index < currentIndex
                    ? '-translate-x-full opacity-0 scale-95'
                    : 'translate-x-full opacity-0 scale-95'
                }`}
              >
                <div className="flex flex-col justify-center h-full text-center px-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="w-16 h-16 text-purple-400 opacity-60" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-2xl text-white mb-8 leading-relaxed font-light italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-300 text-lg">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-purple-400'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300"
          >
            {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;