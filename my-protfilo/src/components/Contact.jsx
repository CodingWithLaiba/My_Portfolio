import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const floatVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    x: [0, 6, 0],
    rotate: [0, 0.5, 0],
    transition: {
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function Contact() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: "laibaijaz904@gmail.com",
      href: "mailto:laibaijaz904@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 336 4066035",
      href: "tel:+923364066035",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sheikhupura, Pakistan",
      href: "https://www.google.com/maps/place/Sheikhupura,+Punjab,+Pakistan",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "CodingWithLaiba",
      href: "https://github.com/CodingWithLaiba",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Profile",
      href: "https://www.linkedin.com/in/laiba-ijaz52422/",
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      {/* Background Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/40" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[150px]" />
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />

     <div className="container mx-auto px-6 md:px-12 relative z-10">

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-start mx-auto mb-14"
  >
    <h2 className="text-4xl md:text-5xl font-bold">
      Get In <span className="text-primary">Touch</span>
    </h2>

    <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
      I'm currently open to new opportunities — freelance projects, full-time roles, or technical collaborations.
      If you have an idea you'd like to bring to life, I'd love to hear from you.
    </p>

    {/* CTA Button */}
    <motion.a
      href="mailto:laibaijaz904@gmail.com"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex mt-6 items-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition"
    >
      📩 Send Email
    </motion.a>
  </motion.div>

  {/* Cards Grid */}
  <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {cards.map((card, i) => (
      <motion.a
        key={i}
        href={card.href}
        custom={i}
        variants={floatVariants}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.08,
          y: -12,
        }}
        className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden transition-all"
      >

        {/* animated glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 blur-xl" />

        {/* icon */}
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
          <card.icon className="w-5 h-5 text-primary" />
        </div>

        {/* text */}
        <h4 className="text-xs uppercase tracking-wide text-muted-foreground">
          {card.title}
        </h4>

        <p className="text-sm font-medium mt-1 group-hover:text-primary transition">
          {card.value}
        </p>

        {/* subtle border animation */}
        <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition" />
      </motion.a>
    ))}
  </div>

  {/* Bottom CTA */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mt-20"
  >
    <p className="text-muted-foreground text-sm mb-3">
      Available for freelance & remote opportunities ⚡
    </p>

    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex px-6 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition"
    >
      Let’s Build Something 🚀
    </motion.a>
  </motion.div>

</div>
    </section>
  );
}