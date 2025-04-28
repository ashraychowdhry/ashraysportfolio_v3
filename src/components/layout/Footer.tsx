import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glassmorphism rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                Ashray Chowdhry
              </h2>
              <p className="text-text-tertiary">
                Building beautiful digital experiences.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-tertiary hover:text-white transition-colors p-2 rounded-full hover:bg-background-tertiary"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-tertiary hover:text-white transition-colors p-2 rounded-full hover:bg-background-tertiary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-text-tertiary hover:text-white transition-colors p-2 rounded-full hover:bg-background-tertiary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                aria-label="Email"
                className="text-text-tertiary hover:text-white transition-colors p-2 rounded-full hover:bg-background-tertiary"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-text-tertiary">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} Ashray Chowdhry. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;