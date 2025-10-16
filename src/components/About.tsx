"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parent–child animation coordination
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const techVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-black"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-white font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ducati">//</span> About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left text column */}
          <motion.div variants={textVariants}>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer who loves building things that live on
              the internet. My interest in web development started back in 2020
              when I decided to try creating custom themes — turns out hacking
              together HTML &amp; CSS taught me a lot!
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Fast-forward to today, and I've had the privilege of working on
              diverse projects ranging from startups to large-scale
              applications. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Technologies list */}
            <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm text-gray-400">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "Next.js",
                "Astro",
                "Tailwind CSS",
                "PostgreSQL",
                "Oracle VBCS",
                "Oracle ADF",
                "AWS",
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  custom={i}
                  variants={techVariants}
                  className="flex items-center gap-2"
                >
                  <span className="text-ducati">▹</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image column */}
          <motion.div className="relative group" variants={imageVariants}>
            <div className="relative z-10">
              <div className="w-full aspect-square rounded-lg overflow-hidden border-4 border-ducati shadow-2xl">
                <img
                  src="/me.webp"
                  alt="Gopal Kaul"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="absolute inset-0 border-4 border-ducati rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
