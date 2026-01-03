import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { t, language } = useLanguage();

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const content = language === "id" ? project.content.id : project.content.en;

  return (
    <main className="pt-24 pb-20 md:pb-0 relative">
      <AnimatedBackground />
      <article className="container max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to="/projects" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("Kembali ke Proyek", "Back to Projects")}
            </Link>
          </Button>

          {/* Hero Image */}
          <div className="aspect-video bg-secondary/50 rounded-xl overflow-hidden mb-8 relative">
            {project.image && project.image !== "/placeholder.svg" ? (
              <img 
                src={project.image} 
                alt={content.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">
                  {content.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                </span>
              </div>
            )}
          </div>

          {/* Title & Client */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {content.title}
            </h1>
            {content.client && (
              <p className="text-lg text-muted-foreground">
                {content.client}
              </p>
            )}
          </header>

          {/* Introduction & Problem */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              {t("Pendahuluan & Masalah", "Introduction & Problem")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.introduction}
            </p>
          </section>

          {/* Purpose & Benefit */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              {t("Tujuan & Manfaat", "Purpose & Benefit")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.purpose}
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              {t("Fitur Utama", "Key Features")}
            </h2>
            <ul className="space-y-3">
              {content.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <TechBadge key={tech} name={tech} index={index} />
              ))}
            </div>
          </section>

          {/* Live Demo */}
          {project.liveDemo && (
            <section className="mb-10">
              <Button asChild variant="outline" className="gap-2">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            </section>
          )}

          {/* Conclusion */}
          <section className="mb-12 p-6 bg-secondary/30 rounded-xl border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("Kesimpulan", "Conclusion")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.conclusion}
            </p>
          </section>

          {/* Navigation */}
          <div className="flex justify-center mb-16">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("Kembali ke Proyek", "Back to Projects")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </article>
      <Footer />
    </main>
  );
};

export default ProjectDetail;