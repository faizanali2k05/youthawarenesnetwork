import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../../assets/826164d80fd732187bfaf088c09dae7c138832fd.png';

interface HeroSectionProps {
  onJoinClick: () => void;
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#363636] via-[#424242] to-[#4a4a4a] text-white py-24 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img 
            src={logoImage} 
            alt="YAN Logo" 
            className="h-48 w-auto"
            style={{ mixBlendMode: 'lighten', filter: 'brightness(1.1)' }}
            animate={{ 
              filter: ["brightness(1.1) drop-shadow(0 0 10px rgba(255,255,255,0.2))", "brightness(1.15) drop-shadow(0 0 30px rgba(255,255,255,0.4))", "brightness(1.1) drop-shadow(0 0 10px rgba(255,255,255,0.2))"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
            Youth Awareness Network
          </h1>
        </motion.div>

        <motion.div
          className="relative inline-block mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-lg blur opacity-50"></div>
          <p className="relative text-2xl md:text-3xl text-gray-100 px-6 py-3">
            Connecting Youth to Opportunities, Knowledge, and Global Exposure
          </p>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          We are a youth-led platform committed to providing free access to awareness, guidance, and international opportunities. Our mission is to equip students with the knowledge, exposure, and direction they need to grow beyond limitations.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-white" size={32} />
          </motion.div>
          <p className="text-xl font-medium">Free opportunities. Global exposure. Awareness</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.button
            onClick={onJoinClick}
            className="group relative bg-white text-[#363636] px-10 py-5 rounded-xl font-semibold text-lg shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Our Movement
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}