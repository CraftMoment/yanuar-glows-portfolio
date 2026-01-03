import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+62 838-3881-2841",
    href: "tel:+6283838812841"
  },
  {
    icon: Mail,
    label: "Email",
    value: "yanuarprayogat@gmail.com",
    href: "mailto:yanuarprayogat@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://linkedin.com"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or want to discuss opportunities? 
            Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              data-hoverable
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;