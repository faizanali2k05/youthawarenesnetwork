import { MessageCircle, BookOpen, Megaphone, Users as UsersIcon, Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    {
      icon: MessageCircle,
      title: 'Awareness Sessions & Discussions',
      description: 'Interactive dialogue sessions on critical topics shaping youth perspectives and society',
    },
    {
      icon: BookOpen,
      title: 'Educational Content & Resources',
      description: 'Creating impactful educational materials and booklets for knowledge dissemination',
    },
    {
      icon: Megaphone,
      title: 'Digital & Online Campaigns',
      description: 'Strategic social media outreach campaigns to amplify awareness and engagement',
    },
    {
      icon: UsersIcon,
      title: 'Community Engagement',
      description: 'Mobilizing youth for meaningful community service and collaborative initiatives',
    },
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Comprehensive training programs cultivating the next generation of change-makers',
    },
    {
      icon: TrendingUp,
      title: 'Growing Together',
      description: 'Continuously evolving with new initiatives as our community expands',
    },
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-3 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'linear-gradient(90deg, #363636, #4a4a4a, #363636)',
                backgroundSize: '200% 100%',
              }}
            >
              <motion.div
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{ background: 'inherit' }}
              />
            </motion.div>
            <h2 className="relative text-5xl md:text-6xl text-[#363636] font-bold px-8 py-4 bg-white rounded-2xl">
              Activities & Projects
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Engaging initiatives designed to empower, educate, and inspire youth across communities
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 via-transparent to-[#363636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="relative flex justify-center mb-6"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                    <Icon className="text-white" size={36} />
                  </div>
                </motion.div>
                <h3 className="relative text-[#363636] text-xl font-bold mb-3 text-center group-hover:text-[#4a4a4a] transition-colors">
                  {activity.title}
                </h3>
                <p className="relative text-gray-700 text-center leading-relaxed">
                  {activity.description}
                </p>
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#363636] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-br from-[#363636] to-[#4a4a4a] text-white rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-white opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <motion.p 
            className="relative text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <span className="font-bold text-2xl">Note:</span> Our journey is just beginning—more impactful activities will be added as YAN grows and expands its reach!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}