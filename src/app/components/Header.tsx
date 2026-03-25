import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import logoImage from '../../assets/826164d80fd732187bfaf088c09dae7c138832fd.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'mission', label: 'Mission' },
    { id: 'activities', label: 'Activities' },
    { id: 'join', label: 'Join Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`bg-[#363636] text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl py-3' : 'shadow-lg py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={logoImage}
              alt="YAN Logo"
              className="h-12 w-auto drop-shadow-lg"
              style={{ mixBlendMode: 'normal' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="font-semibold text-xl tracking-wide">Youth Awareness Network</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all relative overflow-hidden ${
                  activeSection === item.id
                    ? 'bg-white text-[#363636] font-semibold'
                    : 'hover:bg-[#4a4a4a]'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#363636]"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 hover:bg-[#4a4a4a] rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden pb-4 flex flex-col gap-2 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-white text-[#363636] font-semibold'
                    : 'hover:bg-[#4a4a4a]'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}