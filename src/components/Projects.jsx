import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, Code, Palette, Smartphone } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample projects data - aap apne projects se replace kar sakte hain
  const projects = [
    {
      id: 1,
      title: "Sundown Studio",
      description: "A visually captivating landing page for Sundown Studio showcasing modern design and responsive layout.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRzk5mNEpRmBdrOFnTgdlWMLypZaxNCbhvg&s",
      category: "Web App",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://peppy-licorice-d2b49c.netlify.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/sundown",
      featured: true
    },
    {
      id: 2,
      title: "Agentia World",
      description: "A sleek and modern digital agency website showcasing services, portfolio, and team in a responsive layout.",
      image: "https://media.licdn.com/dms/image/v2/D4D05AQFNjGXaermkQg/videocover-low/B4DZUQoRiXHwCM-/0/1739740757914?e=2147483647&v=beta&t=jNQnLRX_ZjDzjK7q-S1iAnFO2P1A0QlTS7e9LfzmJ48",
      category: "Web App",
      technologies: ["React js", "and their libraries"],
      liveUrl: "https://agentia-world-ui-react-krwa.vercel.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/agentia_world_ui_react",
      featured: false
    },
    {
      id: 3,
      title: "Growth Mindset",
      description: "Designed a growth mindset app with Streamlit to record and update skills, experience, and personal achievements.",
      image: "data:image/jpeg;base64,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",
      category: "Web App",
      technologies: ["python", "streamlit"],
      liveUrl: "https://ggx4nczcog3aosvd2rpqti.streamlit.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/Growth-MindSet-Challenge",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects, skills, and experience with modern design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Website",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Unit Converter",
      description: "A simple and interactive unit converter web app built using Python and Streamlit.",
      image: "data:image/png;base64,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",
      category: "web App",
      technologies: ["python", "streamlit"],
      liveUrl: "https://unit-converter-project1.streamlit.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/unit-converter-py",
      featured: true
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with full CRUD operations and Firebase authentication for secure user login.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web App",
      technologies: ["React", "firebase"],
      liveUrl: "https://dynamic-blog-website1.netlify.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/dynamic-blog-website",
      featured: false
    },
    {
      id: 7,
      title: "Short notes maker",
      description: "Sticky-notes based CRUD web app for chapter-wise note-taking with Firebase backend.",
      image: "https://www.computerhope.com/jargon/n/notes.png",
      category: "Web App",
      technologies: ["Reactjs", "firebase"],
      liveUrl: "https://notebook-chi-sandy.vercel.app/login.html",
      githubUrl: "https://github.com/Kavita-LachmanDas/notebook",
      featured: false
    },
    {
      id: 8,
      title: "WonderLand",
      description: "A magical and immersive web experience inspired by the world of fantasy and wonder.",
      image: "data:image/jpeg;base64,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",
      category: "Website",
      technologies: ["React", "libraries"],
      liveUrl: "https://monumental-pasca-649892.netlify.app/",
      featured: true
    },
    {
      id: 9,
      title: "Movie Searcher",
      description: "A web app to search and explore movies using the TMDB API.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDId5tsY2vUB9sEcfPFxoVLgfF0fFep6qkg&s",
      category: "web App",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://glowing-froyo-ba7df8.netlify.app/",
      githubUrl: "https://github.com/Kavita-LachmanDas/movie_searcher",
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Website', ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Web App': return <Code className="w-4 h-4" />;
      case 'Website': return <Palette className="w-4 h-4" />;
      case 'Mobile App': return <Smartphone className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div id="projects" className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Eye className="w-4 h-4" />
            Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Recent{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Here are some of my favorite projects that showcase my skills in frontend development,
            UI/UX design, and problem-solving abilities.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: -45 }}
                      className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-1 text-xs font-bold"
                    >
                      FEATURED
                    </motion.div>
                  )}

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: hoveredProject === project.id ? 1 : 0 
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
       <a href={'https://github.com/Kavita-LachmanDas'} target='blank'>  <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
         <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.button>
        </motion.div> </a>
      </div>
    </div>
  );
};

export default Projects;