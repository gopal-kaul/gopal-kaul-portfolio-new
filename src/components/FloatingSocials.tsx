import { motion } from "framer-motion";
import { Github, Instagram, Music2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/gopal-kaul", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://instagram.com/kaulmegops",
    label: "Instagram",
  },
  {
    icon: Music2,
    href: "https://open.spotify.com/user/1xr1nqgy1t0n47dhj23h1xaev?si=ebc0dbb5c98d43b4",
    label: "Spotify",
  },
  { icon: Mail, href: "mailto:gopalkaul5@gmail.com", label: "Email" },
];

export default function FloatingSocials() {
  return (
    <>
      {/* Left side - Social links */}
      <motion.div
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ducati hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
        <motion.div
          className="w-0.5 h-24 bg-gray-600"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
      </motion.div>

      {/* Right side - Email */}
      <motion.div
        className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="mailto:gopalkaul5@gmail.com"
          className="text-gray-400 hover:text-ducati font-mono text-sm tracking-widest transition-all duration-300 hover:-translate-y-1"
          style={{ writingMode: "vertical-rl" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          gopalkaul5@gmail.com
        </motion.a>
        <motion.div
          className="w-0.5 h-24 bg-gray-600"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
      </motion.div>
    </>
  );
}
