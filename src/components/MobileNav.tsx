import { Home, Briefcase, FolderOpen, Mail, Sun, Moon, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const MobileNav = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { icon: Home, label: t("Beranda", "Home"), href: "/" },
    { icon: Briefcase, label: t("Pengalaman", "Exp"), href: "/#experience" },
    { icon: FolderOpen, label: t("Proyek", "Projects"), href: "/projects" },
    { icon: Mail, label: t("Kontak", "Contact"), href: "/#contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname.startsWith(href.split("#")[0]);
  };

  const handleClick = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path || path === "/") {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const isHash = item.href.includes("#");
          
          const content = (
            <div
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </div>
          );

          if (isHash && (location.pathname === "/" || item.href.startsWith("/#"))) {
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="relative"
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              className="relative"
              onClick={() => handleClick(item.href)}
            >
              {content}
            </Link>
          );
        })}

        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === "id" ? "en" : "id")}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-muted-foreground"
        >
          <Globe className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase">{language}</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-muted-foreground"
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          <span className="text-[10px] font-medium">{t("Tema", "Theme")}</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;