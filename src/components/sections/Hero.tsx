import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com', 
      label: 'Twitter' 
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:contact@example.com', 
      label: 'Email' 
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto z-10 pt-20">
        <div className="mt-10 mb-16 md:my-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent-primary font-mono mb-3"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 text-text-primary"
            >
              Ashray Chowdhry
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-4xl text-text-secondary font-display mb-6 h-[40px] md:h-[60px]"
            >
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Full Stack Developer',
                    'UI/UX Enthusiast',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-text-tertiary max-w-xl mb-8 text-sm sm:text-base"
            >
              I build exceptional and accessible digital experiences for the web.
              Focused on creating products that are not only functional but delightful to use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="btn btn-primary text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#"
                className="btn btn-outline text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-4 mt-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-text-tertiary hover:text-white transition-colors p-2 rounded-full hover:bg-background-tertiary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background-tertiary text-white"
        >
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;