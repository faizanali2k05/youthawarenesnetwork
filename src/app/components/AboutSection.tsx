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
      transition: { duration: 0.6 }
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
            <span className="text-[#363636] font-semibold text-xl">Youth Awareness Network (YAN)</span> is a youth-led initiative focused on providing free access to awareness, guidance, and global opportunities for students, especially those with limited resources or direction.
          </p>
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            We support young individuals in understanding their academic and career paths, building strong profiles, and connecting with international peers through structured programs and virtual exchanges.
          </p>
          <motion.p 
            className="text-[#363636] text-2xl font-bold text-center py-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Lead by Youth to Lead Youth
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
              Driven by young individuals who understand real challenges, ensuring relevant solutions and authentic impact.
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
              Focused on delivering practical awareness, structured guidance, and real opportunities—not just ideas.
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
            <h3 className="relative text-[#363636] text-2xl font-bold mb-3">Growth-Focused</h3>
            <p className="relative text-gray-700 leading-relaxed">
              Committed to supporting academic, personal, and professional development through continuous learning and exposure.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}