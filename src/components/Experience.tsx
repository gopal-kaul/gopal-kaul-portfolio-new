"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Applications Engineer",
    company: "Oracle India Pvt. Ltd.",
    period: "Oct 2025 - Present",
    description:
      "Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and establishing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Applications Developer 2",
    company: "Oracle India Pvt. Ltd.",
    period: "June 2023 - Oct 2025",
    description:
      "Built and shipped multiple features for a SaaS platform. Improved application performance by 40% through optimization strategies.",
    technologies: ["Next.js", "Python", "Docker", "MongoDB"],
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Asymmetri",
    period: "Dec 2021 - May 2023",
    description:
      "Developed responsive web applications and implemented pixel-perfect designs. Collaborated with designers to create seamless user experiences.",
    technologies: ["React", "JavaScript", "CSS", "Figma"],
  },
  {
    title: "Frontend Developer Intern",
    company: "SkilZen",
    period: "Jul 2021 - Sept 2021",
    description:
      "Developed responsive web applications and implemented pixel-perfect designs. Collaborated with designers to create seamless user experiences.",
    technologies: ["React", "JavaScript", "CSS", "Figma"],
  },
  {
    title: "Software Developer Intern",
    company: "SkilZen",
    period: "Apr 2020 - May 2021",
    description:
      "Started my professional journey building websites and learning modern web technologies. Contributed to various client projects.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-black"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-20 text-white font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ducati">//</span> Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ducati via-red-800 to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ delay: 0.2, duration: 1.5 }}
          />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-0 w-5 h-5 bg-ducati rounded-full border-4 border-black shadow-lg shadow-ducati/50"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="absolute left-4 top-12 w-9 h-9 bg-black border-2 border-ducati rounded-lg flex items-center justify-center"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                >
                  <Briefcase className="w-4 h-4 text-ducati" />
                </motion.div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-ducati/50 transition-colors duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-ducati transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-mono text-gray-400 mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-lg text-ducati font-semibold mb-3 font-mono">
                    {exp.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        custom={i}
                        variants={techVariants}
                        className="px-3 py-1 text-sm font-mono bg-ducati/10 text-ducati border border-ducati/30 rounded"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
