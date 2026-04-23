import { Heart, Lightbulb, Mail, MessageCircle, MapPin, Linkedin, Instagram, Facebook, Youtube, Link } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../../assets/826164d80fd732187bfaf088c09dae7c138832fd.png';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Link, href: 'https://linktree.com', label: 'Linktree' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2a2a2a] to-[#363636] text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.img 
                src={logoImage} 
                alt="YAN Logo" 
                className="h-14 w-auto"
                style={{ mixBlendMode: 'lighten' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="font-bold text-2xl">Youth Awareness Network</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Empowering Youth with Knowledge, Skills, and Responsibility
            </p>
            <motion.div 
              className="flex items-center gap-2 mt-4 text-gray-300"
              whileHover={{ x: 5 }}
            >
              <Lightbulb size={20} />
              <p className="text-sm italic">Building informed minds, transforming societies</p>
            </motion.div>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Connect with us:</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      aria-label={social.label}
                    >
                      <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all group-hover:bg-white group-hover:border-white">
                        <Icon className="text-white transition-colors group-hover:text-[#363636]" size={24} />
                      </div>
                      <motion.div
                        className="absolute -inset-1 bg-white rounded-xl opacity-0 blur-md"
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {['Home', 'About Us', 'Mission', 'Activities', 'Join Us', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
                      whileHover={{ width: 16 }}
                    />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-gray-300">
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <a 
                  href="mailto:youthawarenessnetwork@gmail.com" 
                  className="hover:text-white transition-colors break-all"
                >
                  youthawarenessnetwork@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
                <MessageCircle size={20} className="flex-shrink-0" />
                <a 
                  href="https://wa.me/923405463601" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  +92 340 5463601
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
                <MapPin size={20} className="flex-shrink-0" />
                <span>Pakistan</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-600 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="flex items-center gap-3 text-gray-300"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Lightbulb className="text-white" size={24} />
              </motion.div>
              <p className="text-lg">We believe informed youth can build a better society</p>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="text-red-500" size={18} fill="currentColor" />
              </motion.div>
              <span>by Youth Awareness Network</span>
            </motion.div>
          </div>
          <motion.p 
            className="text-center text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Youth Awareness Network. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}