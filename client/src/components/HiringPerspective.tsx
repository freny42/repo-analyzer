import { motion } from "framer-motion";
import { Users, Target, TrendingUp, AlertTriangle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { HiringPerspective as HiringPerspectiveType } from "@shared/schema";

interface HiringPerspectiveProps {
  perspective: HiringPerspectiveType;
}

export function HiringPerspective({ perspective }: HiringPerspectiveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className="relative overflow-hidden p-6 bg-card/60 backdrop-blur-sm border-card-border"
        data-testid="hiring-perspective"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Hiring Perspective</h3>
          </div>
          
          <div className="p-4 rounded-lg bg-muted/30 border border-muted mb-6">
            <p className="text-foreground italic leading-relaxed">"{perspective.verdict}"</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-blue-400" />
                <h4 className="font-medium text-foreground text-sm">Suitable Roles</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {perspective.suitableRoles.map((role) => (
                  <Badge 
                    key={role} 
                    variant="outline" 
                    className="bg-blue-500/10 text-blue-400 border-blue-500/20"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <h4 className="font-medium text-foreground text-sm">Developer Level</h4>
              </div>
              <Badge 
                variant="outline" 
                className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              >
                {perspective.developerLevel}
              </Badge>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <h4 className="font-medium text-foreground text-sm">Strengths</h4>
              </div>
              <ul className="space-y-2">
                {perspective.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-emerald-400 mt-0.5">+</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h4 className="font-medium text-foreground text-sm">Areas for Improvement</h4>
              </div>
              <ul className="space-y-2">
                {perspective.holdingBack.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-amber-400 mt-0.5">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
