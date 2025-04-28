import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-primary to-background-secondary z-0"></div>
      
      {/* Blurred Circle Decorations */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-accent-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent-secondary opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center mx-auto">
            Here's a little bit about my background and what drives me.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="glassmorphism rounded-2xl p-6 md:p-8 mb-8"
          >
            <p className="text-text-secondary mb-4 text-lg">
              I'm Ashray, an engineer passionate about emerging technologies like AI/ML, blockchain, and cloud computing.
               I've been working in the industry for 5 years, and have been creating tech solutions for over a decade. 
               I have a B.S. in Computer Science from Georgia Tech, concentrating in Artificial Intelligence and 
               Database/Networking Design.
            </p>
            <p className="text-text-secondary mb-4 text-lg">
              Over my time as a professional engineer, I've worked on a variety of projects, 
              from building scalable cloud solutions, to creating data pipelines for AI/ML models,
              to developing open source blockchain technology and decentralized applications. Most recently,
              I am an active maintainer of the xrpl.js and xrpl.py libraries, which are the leading libraries for 
              interacting with the XRP Ledger blockchain, as well as the official XRPL Livenet Explorer.
            </p>
            <p className="text-text-secondary text-lg">
              Outside of work, you can find me on a tennis court, playing the guitar, building hobbyist robotics projects,
              or exploring new hiking trails.     
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-text-primary text-lg">Bachelor of Science, Computer Science</p>
                  <p className="text-text-secondary">Conc. in AI, Database/Networking</p>
                  <p className="text-text-tertiary">Georgia Institute of Technology</p>
                </li>
                <li>
                  <p className="font-medium text-text-primary text-lg">Minor, Finance</p>
                  <p className="text-text-tertiary">Georgia Institute of Technology</p>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Interests</h3>
              <ul className="grid grid-cols-2 gap-3 text-text-tertiary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
                 Artificial Intelligence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-secondary rounded-full mr-2"></span>
                  Blockchain
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-tertiary rounded-full mr-2"></span>
                  Cloud Architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
                  Open Source
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-secondary rounded-full mr-2"></span>
                  Full Stack
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-tertiary rounded-full mr-2"></span>
                  Data Analytics
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;