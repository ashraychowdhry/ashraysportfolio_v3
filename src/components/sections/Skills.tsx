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
    name: 'Software Languages',
    skills: [
      { name: 'Rust', level: 10 },
      { name: 'C++', level: 9 },
      { name: 'Java', level: 10 },
      { name: 'TypeScript/JavaScript', level: 9 },
      { name: 'SQL', level: 7 },
      { name: 'Python', level: 9 },
      { name: 'MATLAB', level: 7 },
    ]
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React.js/Next.js', level: 10 },
      { name: 'PyTorch', level: 8 },
      { name: 'Node.js/Express.js', level: 10 },
      { name: 'Tensorflow', level: 9 },
      { name: 'Flask', level: 7 },
      { name: 'PostgreSQL', level: 9 },
      { name: 'MongoDB', level: 8 },
    ]
  },
  {
    name: 'Infrastructure',
    skills: [
      { name: 'AWS', level: 8 },
      { name: 'Git', level: 9 },
      { name: 'Docker/Kubernetes', level: 8 },
      { name: 'Google Cloud', level: 8 },
      { name: 'CI/CD', level: 8 },
      { name: 'JFrog', level: 6 },
      { name: 'JIRA Agile/Scrum', level: 7 },
    ]
  },
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
                        <span className="text-text-secondary text-lg">{skill.name}</span>
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