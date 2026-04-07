import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);

      const response = await fetch('https://formspree.io/f/xjgpljjk', {
        method: 'POST',
        body: formData,
        redirect: 'manual',
      });

      // Formspree returns 303 on successful submission
      if (response.status === 303 || response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 4000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-4 border-2 border-[#363636] rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute -inset-6 border border-[#363636] opacity-20 rounded-3xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.2 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="relative text-5xl md:text-6xl text-[#363636] font-bold px-8 py-4">
              Contact Us
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions or want to get involved? We're here to connect, collaborate, and create change together
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'youthawarenessnetwork@gmail.com',
              href: 'mailto:youthawarenessnetwork@gmail.com'
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              content: '+92 340 5463601',
              href: 'https://wa.me/923405463601'
            },
            {
              icon: MapPin,
              title: 'Location',
              content: 'Pakistan',
              href: null
            }
          ].map((item, index) => {
            const Icon = item.icon;
            const content = item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-700 hover:text-[#363636] transition-colors break-all"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-gray-700">{item.content}</p>
            );

            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-[#363636] transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#363636]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="relative flex justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] p-5 rounded-2xl shadow-lg">
                    <Icon className="text-white" size={40} />
                  </div>
                </motion.div>
                <h3 className="relative text-2xl font-bold text-[#363636] mb-4">{item.title}</h3>
                <div className="relative text-lg">{content}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="bg-white rounded-2xl p-10 max-w-3xl mx-auto shadow-xl border-2 border-[#363636]/10 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-[#363636] mb-6 text-center">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-[#363636] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#363636]/20 rounded-lg focus:outline-none focus:border-[#363636] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-[#363636] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#363636]/20 rounded-lg focus:outline-none focus:border-[#363636] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-[#363636] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#363636]/20 rounded-lg focus:outline-none focus:border-[#363636] transition-colors resize-none"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#363636] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#4a4a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={22} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-600 font-semibold"
              >
                ✓ Message sent successfully! Thank you for reaching out.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-red-600 font-semibold"
              >
                ✗ Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#363636] to-[#4a4a4a] rounded-2xl p-10 text-white text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-white opacity-5">
            <motion.div
              className="absolute inset-0"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
          <motion.h3 
            className="relative text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            Ready to Make a Difference?
          </motion.h3>
          <motion.p 
            className="relative text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
          >
            Whether you want to join YAN, collaborate on projects, or simply learn more about our mission, we'd love to hear from you!
          </motion.p>
          <motion.div 
            className="relative flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="mailto:youthawarenessnetwork@gmail.com"
              className="group bg-white text-[#363636] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={22} />
              Send Email
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send size={18} />
              </motion.div>
            </motion.a>
            <motion.a
              href="https://wa.me/923405463601"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#363636] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}