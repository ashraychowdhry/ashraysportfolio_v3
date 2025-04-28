import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-10
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 9 },
      { name: 'JavaScript', level: 9 },
      { name: 'TypeScript', level: 8 },
      { name: 'HTML/CSS', level: 9 },
      { name: 'Vue.js', level: 7 },
      { name: 'Next.js', level: 8 },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 8 },
      { name: 'Express', level: 8 },
      { name: 'Python', level: 7 },
      { name: 'Django', level: 6 },
      { name: 'GraphQL', level: 7 },
      { name: 'RESTful APIs', level: 9 },
    ]
  },
  {
    name: 'Other',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'Docker', level: 7 },
      { name: 'AWS', level: 7 },
      { name: 'CI/CD', level: 8 },
      { name: 'UI/UX Design', level: 7 },
      { name: 'Agile/Scrum', level: 8 },
    ]
  }
];

const Skills: React.FC = () => {
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

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level * 10}%`,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-secondary to-background-primary z-0"></div>
      
      {/* Blurred Circle Decorations */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-accent-secondary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent-primary opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">{skill.name}</span>
                        <span className="text-text-tertiary text-sm">{skill.level}/10</span>
                      </div>
                      <div className="w-full h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={barVariants}
                          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;