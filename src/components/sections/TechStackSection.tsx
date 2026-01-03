import { motion } from "framer-motion";
import TechBadge from "@/components/TechBadge";
import { useLanguage } from "@/contexts/LanguageContext";

interface TechCategory {
  name: { id: string; en: string };
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: { id: "Frontend", en: "Frontend" },
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Bootstrap"]
  },
  {
    name: { id: "Backend", en: "Backend" },
    technologies: ["Golang", "Node.js", "Express", "PHP", "Laravel", "Livewire"]
  },
  {
    name: { id: "Database", en: "Database" },
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    name: { id: "DevOps & Alat", en: "DevOps & Tools" },
    technologies: ["Docker", "Git", "MinIO", "Linux"]
  },
  {
    name: { id: "Pengujian", en: "Testing" },
    technologies: ["Jest", "Vitest", "Cypress"]
  }
];

const TechStackSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="tech-stack" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            {t(
              "Teknologi yang saya gunakan sehari-hari",
              "Technologies I work with on a daily basis"
            )}
          </p>
        </motion.div>

        <div className="space-y-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={language === "id" ? category.name.id : category.name.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {language === "id" ? category.name.id : category.name.en}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <TechBadge key={tech} name={tech} index={techIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;