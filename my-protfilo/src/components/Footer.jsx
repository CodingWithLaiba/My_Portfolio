import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: FiGithub,
      href: "https://github.com/CodingWithLaiba",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/laiba-ijaz52422/",
      label: "LinkedIn",
    },
    {
      icon: MdEmail,
      href: "mailto:laibaijaz904@gmail.com",
      label: "Email",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@CodingWithLaiba",
      label: "YouTube",
    },
  ];

  return (
    <footer className="py-8 bg-background border-t border-border/30 backdrop-blur-xl">

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {currentYear} Laiba Ijaz. All rights reserved.
        </p>

        {/* Center Icons */}
        <div className="flex items-center gap-4">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative p-2 rounded-full border border-border/30 hover:border-primary/40 transition"
            >
              <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />

              {/* glow */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-primary/10 blur-md transition" />
            </a>
          ))}
        </div>

        {/* Right */}
        <p className="text-muted-foreground text-sm flex items-center gap-1 font-mono text-xs text-center md:text-right">
          Made with <span className="text-red-400">❤️</span> by CodingWithLaiba
        </p>

      </div>
    </footer>
  );
}