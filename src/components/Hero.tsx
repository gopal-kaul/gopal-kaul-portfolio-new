import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "Problem Solver", "Creative Thinker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hey, I'm <span className="text-ducati">Gopal!</span>
          </motion.h1>

          <motion.div
            className="text-3xl md:text-5xl font-mono text-gray-400 mb-8 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>{displayText}</span>
            <span className="animate-pulse text-ducati">|</span>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting digital experiences that blend elegant code with beautiful
            design
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-ducati text-white font-mono font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="px-8 py-4 border-2 border-ducati text-ducati font-mono font-semibold rounded-lg hover:bg-ducati hover:text-white transition-all duration-300"
            >
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
