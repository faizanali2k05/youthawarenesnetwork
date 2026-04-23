import { BookOpen, Users, Award, Heart } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const missions = [
    {
      icon: BookOpen,
      title: 'Education & Critical Thinking',
      description: 'Equipping students with clear knowledge, direction, and decision-making skills for academic and career growth.',
    },
    {
      icon: Users,
      title: 'Awareness & Opportunity Access',
      description: 'Bridging information gaps by sharing relevant opportunities, resources, and guidance often inaccessible to many students.',
    },
    {
      icon: Award,
      title: 'Leadership & Global Engagement',
      description: 'Developing confident individuals through collaboration, virtual exchange programs, and international exposure.',
    },
    {
      icon: Heart,
      title: 'Holistic Growth',
      description: 'Supporting academic, personal, and professional development to prepare youth for real-world challenges.',
    },
  ];

  return (
    <section id="mission" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#363636] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#363636] opacity-5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#363636] via-[#4a4a4a] to-[#363636] rounded-2xl opacity-20"
              initial={{ scale: 0.8, rotate: -5 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute -inset-6 border-2 border-[#363636] rounded-3xl opacity-20"
              initial={{ scale: 0.7, rotate: 5 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="relative text-5xl md:text-6xl text-[#363636] font-bold px-8 py-4">
              Our Mission
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            To provide free access to awareness, guidance, and global opportunities, enabling youth to make informed decisions and grow beyond limitations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 transition-all duration-300 border-2 border-[#363636]/20 hover:border-[#363636] relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#363636]/20 via-transparent to-[#363636]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start gap-5">
                  <motion.div 
                    className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-4 rounded-xl flex-shrink-0 border-2 border-[#4a4a4a]/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-[#363636] text-2xl font-bold mb-3 group-hover:text-[#4a4a4a] transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#363636] to-[#4a4a4a]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}