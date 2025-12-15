import { motion } from "framer-motion";
import { CheckCircle, Rocket, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ImprovementItem } from "@shared/schema";

const impactStyles = {
  high: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  medium: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  low: "bg-muted text-muted-foreground border-muted",
};

interface ImprovementRoadmapProps {
  improvements: ImprovementItem[];
}

export function ImprovementRoadmap({ improvements }: ImprovementRoadmapProps) {
  const shortTerm = improvements.filter((i) => i.priority === "short-term");
  const longTerm = improvements.filter((i) => i.priority === "long-term");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-card-border" data-testid="improvement-roadmap">
        <h3 className="text-xl font-semibold text-foreground mb-6">Improvement Roadmap</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-foreground">Short-term (1-2 weeks)</h4>
            </div>
            
            <ul className="space-y-3">
              {shortTerm.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  <div className="flex-1 flex items-start justify-between gap-2">
                    <span className="text-sm text-muted-foreground">{item.task}</span>
                    <Badge variant="outline" className={`text-xs flex-shrink-0 ${impactStyles[item.impact]}`}>
                      {item.impact}
                    </Badge>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400">
                <Rocket className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-foreground">Long-term (1-3 months)</h4>
            </div>
            
            <ul className="space-y-3">
              {longTerm.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="flex items-start gap-3 group"
                >
                  <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  <div className="flex-1 flex items-start justify-between gap-2">
                    <span className="text-sm text-muted-foreground">{item.task}</span>
                    <Badge variant="outline" className={`text-xs flex-shrink-0 ${impactStyles[item.impact]}`}>
                      {item.impact}
                    </Badge>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
