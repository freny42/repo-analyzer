import { motion } from "framer-motion";
import { 
  FileText, 
  GitBranch, 
  Code2, 
  Shield, 
  TestTube, 
  Rocket,
  Brain,
  Layers,
  LucideIcon
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AnalysisSection } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  "file-text": FileText,
  "git-branch": GitBranch,
  code: Code2,
  shield: Shield,
  "test-tube": TestTube,
  rocket: Rocket,
  brain: Brain,
  layers: Layers,
};

const verdictStyles = {
  excellent: {
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    accent: "from-emerald-500/20 to-transparent",
  },
  good: {
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    accent: "from-blue-500/20 to-transparent",
  },
  "needs-improvement": {
    badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    accent: "from-amber-500/20 to-transparent",
  },
  critical: {
    badge: "bg-red-500/15 text-red-400 border-red-500/30",
    accent: "from-red-500/20 to-transparent",
  },
};

const verdictLabels = {
  excellent: "Excellent",
  good: "Good",
  "needs-improvement": "Needs Work",
  critical: "Critical",
};

interface HealthCardProps {
  section: AnalysisSection;
  index?: number;
}

export function HealthCard({ section, index = 0 }: HealthCardProps) {
  const Icon = iconMap[section.icon] || Code2;
  const styles = verdictStyles[section.verdict];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card 
        className="relative overflow-hidden p-6 bg-card/70 backdrop-blur-sm border-card-border hover-elevate"
        data-testid={`health-card-${section.id}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent} pointer-events-none`} />
        
        <div className="relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
            </div>
            <Badge variant="outline" className={`${styles.badge} flex-shrink-0`}>
              {verdictLabels[section.verdict]}
            </Badge>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">{section.summary}</p>
          
          <ul className="space-y-2">
            {section.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}
