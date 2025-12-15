import { motion } from "framer-motion";
import { 
  Flame, 
  AlertTriangle, 
  BookOpen, 
  Rocket, 
  CheckCircle2, 
  Info,
  Shield,
  Zap,
  LucideIcon
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Insight } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  "alert-triangle": AlertTriangle,
  "book-open": BookOpen,
  rocket: Rocket,
  "check-circle": CheckCircle2,
  info: Info,
  shield: Shield,
  zap: Zap,
};

const typeStyles = {
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
  info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const iconStyles = {
  success: "text-emerald-400",
  warning: "text-amber-400",
  danger: "text-red-400",
  info: "text-blue-400",
};

interface InsightCardProps {
  insight: Insight;
  index?: number;
}

export function InsightCard({ insight, index = 0 }: InsightCardProps) {
  const Icon = iconMap[insight.icon] || Info;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Card 
        className={`flex items-center gap-3 p-4 border ${typeStyles[insight.type]} backdrop-blur-sm`}
        data-testid={`insight-card-${insight.id}`}
      >
        <Icon className={`w-5 h-5 flex-shrink-0 ${iconStyles[insight.type]}`} />
        <span className="text-sm font-medium text-foreground">{insight.message}</span>
      </Card>
    </motion.div>
  );
}
