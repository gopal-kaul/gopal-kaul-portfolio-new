import { motion } from "framer-motion";
import { Github, Instagram, Music2 } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    color: "hover:text-purple-400",
    bgColor: "group-hover:bg-purple-500/10",
    borderColor: "group-hover:border-purple-400/50",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/yourusername",
    icon: Music2,
    color: "hover:text-green-400",
    bgColor: "group-hover:bg-green-500/10",
    borderColor: "group-hover:border-green-400/50",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: Instagram,
    color: "hover:text-pink-400",
    bgColor: "group-hover:bg-pink-500/10",
    borderColor: "group-hover:border-pink-400/50",
  },
];

export default function Socials() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-white font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ducati">//</span> Connect
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`relative bg-zinc-900/50 border-2 border-zinc-800 ${social.borderColor} rounded-xl p-8 transition-all duration-300 ${social.bgColor}`}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-ducati/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className="mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        className={`w-16 h-16 text-gray-400 ${social.color} transition-colors duration-300`}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-ducati transition-colors duration-300">
                      {social.name}
                    </h3>

                    <p className="text-gray-400 text-sm font-mono">
                      @yourusername
                    </p>

                    <motion.div className="mt-4 w-0 h-0.5 bg-ducati group-hover:w-full transition-all duration-300" />
                  </div>
                </div>

                {/* Decorative border effect */}
                <div className="absolute inset-0 border-2 border-ducati/0 group-hover:border-ducati/20 rounded-xl translate-x-2 translate-y-2 -z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-500 font-mono text-sm">
            Follow me on social media for updates and insights
          </p>
        </motion.div>
      </div>
    </section>
  );
}
