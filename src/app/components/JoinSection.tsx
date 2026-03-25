import { Users, Sparkles, Heart, ArrowRight, Target, CheckCircle, Lightbulb } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface JoinSectionProps {
  onContactClick: () => void;
}

export function JoinSection({ onContactClick }: JoinSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="join" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#363636] rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#363636] rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-4 border-2 border-[#363636] rounded-2xl"
              initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute -inset-6 border border-[#363636] opacity-20 rounded-3xl"
              initial={{ scale: 0.7, opacity: 0, rotate: 3 }}
              animate={isInView ? { scale: 1, opacity: 0.2, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="relative text-5xl md:text-6xl text-[#363636] font-bold px-8 py-4">Join Us</h2>
          </div>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            If you're a student or young individual eager to learn, grow, and contribute to society, we welcome you to join Youth Awareness Network. Together, we create awareness and drive positive change.
          </motion.p>
        </motion.div>

        {/* Three Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Why Join YAN?',
              items: ['Build leadership skills', 'Create social impact', 'Learn through real activities', 'Network with like-minded youth']
            },
            {
              icon: Users,
              title: 'Who Can Apply?',
              items: ['Students', 'Young professionals', 'Volunteers passionate about awareness', 'Anyone committed to social change']
            },
            {
              icon: Lightbulb,
              title: 'What You\'ll Do',
              items: ['Awareness campaigns', 'Research & content writing', 'Community activities', 'Educational workshops']
            }
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#363636] relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="relative flex justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                    <Icon className="text-white" size={48} />
                  </div>
                </motion.div>
                <h3 className="relative text-2xl font-bold mb-6 text-center text-[#363636]">{card.title}</h3>
                <ul className="relative space-y-3">
                  {card.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                    >
                      <CheckCircle className="text-[#363636] flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Application Form */}
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#363636] mb-3">Application Form</h3>
            <p className="text-gray-600">Fill out the form below to join our network</p>
          </div>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] text-white rounded-2xl p-10 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="text-white" size={64} />
              </motion.div>
              <h4 className="text-3xl font-bold mb-3">Thank You!</h4>
              <p className="text-xl">We've received your application. We'll get back to you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 XXX XXXXXXX' },
              ].map((field) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + Object.keys(formData).indexOf(field.name) * 0.1 }}
                  className="relative"
                >
                  <label htmlFor={field.name} className="block mb-2 text-gray-700 font-medium">
                    {field.label} *
                  </label>
                  <div className="relative">
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#363636] transition-all"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.01 }}
                      animate={{ 
                        borderColor: focusedField === field.name ? '#363636' : '#d1d5db',
                        boxShadow: focusedField === field.name ? '0 4px 12px rgba(54, 54, 54, 0.15)' : '0 0 0 rgba(54, 54, 54, 0)'
                      }}
                    />
                    {focusedField === field.name && (
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-[#363636] to-[#4a4a4a] rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                  Tell us why you want to join Youth Awareness Network *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#363636] transition-all resize-none"
                  placeholder="Tell us about your motivation, skills, and how you'd like to contribute to YAN..."
                  whileFocus={{ scale: 1.02 }}
                  animate={{ borderColor: focusedField === 'message' ? '#363636' : '#d1d5db' }}
                />
              </motion.div>

              <motion.div 
                className="text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 }}
              >
                <motion.button
                  type="submit"
                  className="group relative bg-gradient-to-r from-[#363636] to-[#4a4a4a] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(54, 54, 54, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Application
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight size={22} />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#363636]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>

        {/* Contact Alternative */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          <p className="text-gray-700 mb-3 text-lg">Have questions before applying?</p>
          <motion.button
            onClick={onContactClick}
            className="text-[#363636] font-semibold text-lg hover:underline transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Directly →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}