


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import img1 from '../assets/img1.jpg'
// import ThemeToggle from "./ThemeToggle";




// const Hero = () => {
//   const [activeNav, setActiveNav] = useState("HOME");


//   const navItems = [
//     "HOME", "ABOUT US", "SERVICES", "PROJECTS", 
//     "TESTIMONIALS", "CONTACT US" 
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Image with Overlay */}
     
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0"
//       style={{
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${img1})`,
//   backgroundSize: "cover",  // ✅ this keeps image at original aspect ratio
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// }}

//       />

//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 flex items-center justify-between p-6 lg:px-12"
//       >
//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="text-3xl lg:text-4xl font-bold text-white"
//         >
//           Kavita <span className="text-orange-400">•</span>
//         </motion.div>

//         {/* Navigation Links */}
//         <div className="hidden lg:flex space-x-8">
//           {navItems.map((item, index) => (
//             <motion.button
//               key={item}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.1, color: "#fb923c" }}
//             //   onClick={() => setActiveNav(item)}
//                 onClick={() => {
//     setActiveNav(item);
//     const id = item.toLowerCase().replace(/\s+/g, '');
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: 'smooth' });
//   }}
//               className={`text-sm font-medium transition-colors duration-300 ${
//                 activeNav === item ? "text-orange-400" : "text-white hover:text-orange-300"
//               }`}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="lg:hidden text-white"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </motion.button>
//       </motion.nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
//         <div className="text-center max-w-4xl">
//           {/* Main Heading */}
//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
//           >
//             HELLO I'M{" "}
//             <motion.span
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="text-orange-400"
//             >
//               KAVITA
//             </motion.span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
//           >
//            I specialize in MERN Stack development, turning ideas into full-fledged digital experiences with a passion for clean code, responsive design, and seamless user interactions — both on the frontend and backend.
//           </motion.p>

//           {/* Services Line */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.9 }}
//             className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light"
//           >
//            Driven by curiosity, powered by{" "}
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               whileHover={{ scale: 1.05 }}
//               className="text-white font-bold cursor-default"
//             >
//               creativity.
//             </motion.span>
//           </motion.div>

//           {/* CTA Button (Optional) */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1.1 }}
//             className="mt-16"
//           >
//            <a href="/kavita-luhana Resume.pdf" target="_blank" rel="noopener noreferrer"> <motion.button
//               whileHover={{ 
//                 scale: 1.05, 
//                 boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" 
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
//             >
//               Hire Me
//             </motion.button> </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Wave Bottom */}
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 1.3 }}
//         className="absolute bottom-0 left-0 w-full"
//       >
//         <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
//           <motion.path
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 1.5 }}
//             d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             fill="white"
//           />
//         </svg>
//       </motion.div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               opacity: 0,
//             }}
//             animate={{
//               y: [null, -50, -100],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: Math.random() * 4 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>
   
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/img1.jpg'
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  const [activeNav, setActiveNav] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT US", id: "aboutus" },
    { name: "SERVICES", id: "services" },
    { name: "PROJECTS", id: "projects" },
    { name: "TESTIMONIALS", id: "testimonials" },
    { name: "CONTACT US", id: "contactus" }
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.name);
    setIsMobileMenuOpen(false); // Close mobile menu on click
    
    // Scroll to section
    const section = document.getElementById(item.id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex items-center justify-between p-4 sm:p-6 lg:px-12"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
        >
          Kavita <span className="text-orange-400">•</span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#fb923c" }}
              onClick={() => handleNavClick(item)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeNav === item.name ? "text-orange-400" : "text-white hover:text-orange-300"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 bg-black/20 backdrop-blur-sm rounded-md border border-white/20"
          style={{ zIndex: 100 }}
        >
          {isMobileMenuOpen ? (
            // Cancel/Close Icon
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-30 pt-20"
          >
            <div className="px-6 py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left py-3 px-4 text-lg font-medium transition-colors duration-300 rounded-lg mb-2 ${
                    activeNav === item.name 
                      ? "text-orange-400 bg-orange-400/10" 
                      : "text-white hover:text-orange-300 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Close Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 -z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6">
        <div className="text-center max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            HELLO I'M{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-orange-400"
            >
              KAVITA
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
           I specialize in MERN Stack development, turning ideas into full-fledged digital experiences with a passion for clean code, responsive design, and seamless user interactions — both on the frontend and backend.
          </motion.p>

          {/* Services Line */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light px-4"
          >
           Driven by curiosity, powered by{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold cursor-default"
            >
              creativity.
            </motion.span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 sm:mt-16"
          >
            <a href="/kavita-luhana Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Hire Me
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Wave Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg viewBox="0 0 1440 120" className="w-full h-16 sm:h-20 md:h-32">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="white"
          />
        </svg>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
              opacity: 0,
            }}
            animate={{
              y: [null, -50, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;