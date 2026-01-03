import { motion } from "framer-motion";
import { MapPin, Download, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 shadow-card-hover">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile-photo.png" 
                  alt="Yanuar Prayoga" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t("Tersedia", "Available")}
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                Yanuar Prayoga
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>Kebumen, Jawa Tengah</span>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                <span className="text-foreground font-semibold">Fullstack Developer</span>
                <br className="md:hidden" />
                <span className="hidden md:inline"> — </span>
                React, Next.js, Golang
              </p>

              <p className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                {t(
                  "Membangun aplikasi web yang skalabel dengan teknologi modern. Passionate tentang clean code, performa, dan pengalaman pengguna.",
                  "Building scalable web applications with modern technologies. Passionate about clean code, performance, and user experience."
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/projects">
                  <Briefcase className="w-4 h-4" />
                  {t("Lihat Proyek", "View Projects")}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                {t("Unduh CV", "Download CV")}
              </Button>
              <Button variant="ghost" size="lg" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  {t("Kontak", "Contact")}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;