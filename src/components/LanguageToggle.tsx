import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      className="gap-1.5 rounded-full px-3"
      data-hoverable
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs font-medium uppercase">{language}</span>
    </Button>
  );
};

export default LanguageToggle;