"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // Container for staggering children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-black"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white font-mono"
            variants={fadeUp}
          >
            <span className="text-ducati">//</span> Get In Touch
          </motion.h2>

          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            variants={scaleIn}
          >
            <div className="w-12 h-0.5 bg-ducati" />
            <Mail className="w-8 h-8 text-ducati" />
            <div className="w-12 h-0.5 bg-ducati" />
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeUp}
          >
            <a
              href="mailto:gopalkaul5@gmail.com"
              className="group relative px-10 py-5 bg-ducati text-white font-mono font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-ducati/50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-3">
                Say Hello
                <Send
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-1 -translate-y-1" : ""
                  }`}
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-red-700"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>

            <a
              href="mailto:gopalkaul5@gmail.com"
              className="px-10 py-5 border-2 border-ducati text-ducati font-mono font-semibold text-lg rounded-lg hover:bg-ducati hover:text-white transition-all duration-300 hover:scale-105"
            >
              gopalkaul5@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="mt-16 pt-16 border-t border-zinc-800"
            variants={fadeUp}
          >
            <p className="text-gray-500 font-mono text-sm">
              Let's build something amazing together
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
