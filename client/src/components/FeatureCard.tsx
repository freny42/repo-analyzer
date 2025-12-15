import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, gradient, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Card 
        className="relative overflow-hidden p-6 bg-card/40 backdrop-blur-md border-card-border hover-elevate transition-all duration-300 group h-full"
        data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-[1px] rounded-[calc(var(--radius)-1px)] bg-card/90 backdrop-blur-sm" />
        
        <div className="relative">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
