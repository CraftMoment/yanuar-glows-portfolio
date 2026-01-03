import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  company: string;
  role: { id: string; en: string };
  year: string;
  type: { id: string; en: string };
}

const experiences: Experience[] = [
  {
    company: "PT Tristar Surya Gemilang",
    role: { id: "Fullstack Developer", en: "Fullstack Developer" },
    year: "2025",
    type: { id: "Penuh Waktu", en: "Full-time" }
  },
  {
    company: "PT Tristar Surya Gemilang",
    role: { id: "Intern Fullstack Developer", en: "Intern Fullstack Developer" },
    year: "2024",
    type: { id: "Magang", en: "Internship" }
  }
];

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("Pengalaman", "Experience")}
          </h2>
          <p className="text-muted-foreground">
            {t(
              "Perjalanan profesional saya dalam pengembangan perangkat lunak",
              "My professional journey in software development"
            )}
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition-all duration-300"
              data-hoverable
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {language === "id" ? exp.role.id : exp.role.en}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-shrink-0">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-badge text-badge-foreground">
                    {language === "id" ? exp.type.id : exp.type.en}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;