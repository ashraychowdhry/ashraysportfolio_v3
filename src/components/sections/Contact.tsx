import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="text-accent-primary" size={24} />,
      title: 'Email',
      detail: 'ashray@example.com',
      link: 'mailto:ashray@example.com',
    },
    {
      icon: <Phone className="text-accent-primary" size={24} />,
      title: 'Phone',
      detail: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
    },
    {
      icon: <MapPin className="text-accent-primary" size={24} />,
      title: 'Location',
      detail: 'San Francisco, CA',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-secondary to-background-primary z-0"></div>
      
      {/* Blurred Circle Decorations */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-accent-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-accent-secondary opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle text-center mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="space-y-8">
                {contactDetails.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="glassmorphism rounded-xl p-6 flex items-start space-x-4 hover:bg-background-tertiary hover:bg-opacity-40 transition duration-300"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-text-tertiary">{item.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <form onSubmit={handleSubmit} className="glassmorphism rounded-xl p-6 md:p-8">
                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500 bg-opacity-20 text-green-300">
                    Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500 bg-opacity-20 text-red-300">
                    {submitError}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-text-secondary text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-tertiary bg-opacity-50 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-text-secondary text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background-tertiary bg-opacity-50 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-text-secondary text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background-tertiary bg-opacity-50 border border-white/10 text-white focus:border-accent-primary focus:outline-none transition resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;