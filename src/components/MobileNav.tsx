import { Home, Briefcase, FolderOpen, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Experience", href: "/#experience" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: Mail, label: "Contact", href: "/#contact" }
];

const MobileNav = () => {
  const location = useLocation();

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
                "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
              {active && (
                <div className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-primary" />
              )}
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
      </div>
    </nav>
  );
};

export default MobileNav;