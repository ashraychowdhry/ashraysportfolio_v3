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
    title: 'Software Engineer II',
    company: 'Ripple',
    duration: 'Aug 2022 - Present',
    description: [
      'Operate as community admin and maintainer for open-sourced XRP Ledger blockchain servers (L1) and client libraries and APIs',
      'Develop technical specs for new blockchain features and implement them in related repositories',
      'Integrate new C++ improvements on the XRP Ledger, maintain APIs in Python, JavaScript, and Rust',
      'Build the XRPL Explorer (React.js/Node.js) for robust community analytics about the XRP Ledger',
      'Build https://livenet.xrpl.org/ for robust community analytics about the XRP Ledger, and review XRPL Grants',
      'Integrated B2B payment solutions APIs via blockchain through the RippleNet platform for payment routing, distribution, and smart liquidation',
      'Owned, architected, and delivered a customer onboarding service that reduced institutional customer onboarding time by 60%',
      'Created numerous B2B payments services, APIs, features, and testing platforms via Java, AWS, Salesforce, React.js (TypeScript), SQL, Node.js',
    ],
    technologies: ['C++', 'Python', 'TypeScript', 'Java','Rust', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Git', 'Open Source']
  },
  {
    title: 'Software Engineer',
    company: 'Capital One Financial',
    duration: 'May 2021 - Sept 2021',
    description: [
      'Spearheaded the Savings Success web platform to provide convenient digitized retirement planning',
      'Created customer-ready viable product with React.js, Python Flask, PostgreSQL, & AWS'
    ],
    technologies: ['React.js', 'TypeScript', 'MongoDB', 'Python', 'Flask', 'AWS']
  },
  {
    title: 'Data Analytics Engineer',
    company: 'John Deere Financial',
    duration: 'May 2020 - Sept 2020',
    description: [
      'Developed customer churn predictive model to improve buying trend analysis with PySpark & SQL',
      'Optimized model by over 35% and structured for production with Databricks and MLFlow',
    ],
    technologies: ['Python', 'PySpark', 'SQL', 'Databricks', 'MLFlow']
  },
  {
    title: 'Systems Eng. Modeling Researcher',
    company: 'Sustainable Design and Manufacturing Laboratory',
    duration: 'Dec 2019 - Jun 2022',
    description: [
      'Designed a modelling software to streamline simulation of large-scale ecosystems with MATLAB',
      'Implement web application for user-friendly third-party ecological network analysis with React JS',
      'Co-authored a published IEEE Systems journal paper of a novel systems metric'
    ],
    technologies: ['MATLAB', 'React.js', 'Python', 'SQL', 'AWS']
  },
  {
    title: 'Research Partner',
    company: 'Rutgers University Continuous Manufacturing Laboratory',
    duration: 'Jun 2018 - Mar 2019',
    description: [
      'Created cybersecurity system for continuous pharmaceutical manufacturing control system',
      'Compiled work across several research sources to identify production areas of vulnerability'
    ],
    technologies: ['Manufacturing', 'Cybersecurity', 'Excel', 'Basic']
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