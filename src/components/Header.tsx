import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("Beranda", "Home"), href: "/" },
    { label: t("Pengalaman", "Experience"), href: "/#experience" },
    { label: t("Tech Stack", "Tech Stack"), href: "/#tech-stack" },
    { label: t("Proyek", "Projects"), href: "/projects" },
    { label: t("Kontak", "Contact"), href: "/#contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    return location.pathname.startsWith(href.split("#")[0]);
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path || path === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 hidden md:block"
    >
      <div className="mx-4 mt-4">
        <nav className="container max-w-4xl bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-card flex items-center justify-between">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;