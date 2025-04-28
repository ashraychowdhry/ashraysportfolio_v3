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
            <p className="text-text-secondary mb-4">
              Hello! I'm Ashray, a software engineer passionate about creating 
              beautiful and functional web experiences. My journey in tech started 
              when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p className="text-text-secondary mb-4">
              With a background in computer science and years of industry experience, 
              I specialize in creating responsive, user-friendly applications that 
              solve real problems. I'm particularly interested in the intersection of 
              design and development, where aesthetics meet functionality.
            </p>
            <p className="text-text-secondary">
              When I'm not coding, you can find me exploring new hiking trails, 
              experimenting with photography, or diving into a good book. I believe 
              in continuous learning and am always excited to take on new challenges.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-text-primary">Master of Computer Science</p>
                  <p className="text-text-tertiary">Stanford University</p>
                  <p className="text-sm text-text-tertiary">2018 - 2020</p>
                </li>
                <li>
                  <p className="font-medium text-text-primary">Bachelor of Computer Science</p>
                  <p className="text-text-tertiary">MIT</p>
                  <p className="text-sm text-text-tertiary">2014 - 2018</p>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Interests</h3>
              <ul className="grid grid-cols-2 gap-3 text-text-tertiary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-secondary rounded-full mr-2"></span>
                  UI/UX Design
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
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-tertiary rounded-full mr-2"></span>
                  Blockchain
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