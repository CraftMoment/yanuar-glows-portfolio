import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Yanuar Prayoga. {t("Hak cipta dilindungi.", "All rights reserved.")}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("Dibuat dengan", "Built with")} React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;