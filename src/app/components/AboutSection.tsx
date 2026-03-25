import { Users, Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 border-2 border-[#363636] rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute -inset-6 border border-[#363636] opacity-30 rounded-3xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="relative text-5xl md:text-6xl text-[#363636] font-bold px-8 py-4">
              About Us
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
          >
            Discover the story behind our mission to empower and inspire the next generation
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-2xl mb-12 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Youth Awareness Network (YAN) was founded by <span className="font-bold text-[#363636] text-xl">Ahmad Raza</span> with a vision to guide young minds toward positive thinking, informed decision-making, and responsible citizenship. We believe that awareness is the first step toward meaningful change.
          </p>
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Our approach centers on three pillars: <span className="text-[#363636] font-semibold text-xl">Awareness, Learning, and Action</span>. We don't just talk about change—we create it through education, engagement, and empowerment.
          </p>
          <motion.p 
            className="text-[#363636] text-2xl font-bold text-center py-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            YAN is run by youth, for youth.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="group bg-white rounded-2xl p-8 text-center relative overflow-hidden border-2 border-transparent hover:border-[#363636] transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px -12px rgba(54, 54, 54, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="relative flex justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                <Users className="text-white" size={40} />
              </div>
            </motion.div>
            <h3 className="relative text-[#363636] text-2xl font-bold mb-3">Youth-Led</h3>
            <p className="relative text-gray-700 leading-relaxed">
              Run by young people who understand youth challenges and aspirations, creating authentic connections and real impact
            </p>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl p-8 text-center relative overflow-hidden border-2 border-transparent hover:border-[#363636] transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px -12px rgba(54, 54, 54, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="relative flex justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                <Award className="text-white" size={40} />
              </div>
            </motion.div>
            <h3 className="relative text-[#363636] text-2xl font-bold mb-3">Action-Oriented</h3>
            <p className="relative text-gray-700 leading-relaxed">
              Focused on making real change through practical awareness, education, and community engagement initiatives
            </p>
          </motion.div>

          <motion.div 
            className="group bg-white rounded-2xl p-8 text-center relative overflow-hidden border-2 border-transparent hover:border-[#363636] transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px -12px rgba(54, 54, 54, 0.3)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="relative flex justify-center mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                <TrendingUp className="text-white" size={40} />
              </div>
            </motion.div>
            <h3 className="relative text-[#363636] text-2xl font-bold mb-3">Growth Focused</h3>
            <p className="relative text-gray-700 leading-relaxed">
              Committed to helping youth grow intellectually, morally, and socially through continuous learning and development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}