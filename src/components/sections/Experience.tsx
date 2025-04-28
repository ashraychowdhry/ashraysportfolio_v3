import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Led a team of 5 developers to build and maintain a high-traffic e-commerce platform',
      'Architected and implemented a microservices infrastructure that improved system reliability by 40%',
      'Collaborated with design and product teams to deliver features that increased user engagement by 25%',
      'Mentored junior developers and conducted code reviews to ensure high quality standards'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    duration: 'Mar 2019 - Dec 2021',
    description: [
      'Built responsive web applications using modern JavaScript frameworks',
      'Designed and implemented RESTful APIs for mobile and web clients',
      'Optimized database queries that reduced page load times by 60%',
      'Integrated third-party services and APIs for payment processing and data analytics'
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Python', 'GraphQL']
  },
  {
    title: 'Front-End Developer',
    company: 'WebCraft Studios',
    duration: 'Jun 2017 - Feb 2019',
    description: [
      'Developed user interfaces for various client projects using HTML, CSS, and JavaScript',
      'Collaborated with designers to transform mockups into functional web pages',
      'Implemented responsive designs that worked across desktop and mobile devices',
      'Conducted cross-browser testing and fixed compatibility issues'
    ],
    technologies: ['JavaScript', 'CSS', 'HTML', 'jQuery', 'Sass']
  }
];

const Experience: React.FC = () => {
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
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-background-primary">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background-primary to-transparent z-0"></div>
      
      {/* Blurred Circle Decorations */}
      <div className="absolute top-60 -right-40 w-80 h-80 bg-accent-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-accent-tertiary opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Work Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center mx-auto">
            A timeline of my professional journey and achievements.
          </motion.p>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism rounded-2xl p-6 md:p-8 relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute top-full left-8 w-0.5 h-12 bg-gradient-to-b from-accent-primary to-transparent"></div>
                )}

                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                    <p className="text-accent-primary font-medium">{experience.company}</p>
                    <p className="text-text-tertiary text-sm mb-4 md:mb-0">{experience.duration}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-text-secondary flex items-start">
                          <span className="text-accent-primary mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm bg-background-tertiary text-text-secondary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;