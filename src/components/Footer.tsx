import { Mail, Github, Linkedin} from "lucide-react";
import { FaPhone,FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/60 mt-10">
      <div className="container py-14">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-xl font-semibold">Kulsoom Jahangir</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Flutter Front-End Developer · Let's build something great.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:kulsoom.jahangir528@gmail.com"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-secondary/40 text-muted-foreground transition-smooth hover:text-primary hover:border-primary/60"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Kulsoom-Jahangir"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-secondary/40 text-muted-foreground transition-smooth hover:text-primary hover:border-primary/60"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kulsoom-jahangir-81a87228b"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-secondary/40 text-muted-foreground transition-smooth hover:text-primary hover:border-primary/60"
            >
              <Linkedin className="h-4 w-4" />
            </a> 
            <a
              href="tel:+923115285356"
              aria-label="Phone"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-secondary/40 text-muted-foreground transition-smooth hover:text-primary hover:border-primary/60"
            >
            
               <FaPhone className="h-4 w-4" />
            </a>
            <a href="https://wa.me/923115285356"
             target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-secondary/40 text-muted-foreground transition-smooth hover:text-primary hover:border-primary/60"
              >
            <FaWhatsapp />
          </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kulsoom Jahangir. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
