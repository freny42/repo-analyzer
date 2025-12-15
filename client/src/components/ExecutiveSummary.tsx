import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExecutiveSummaryProps {
  summary: string;
}

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className="relative overflow-hidden p-6 bg-card/60 backdrop-blur-sm border-card-border"
        data-testid="executive-summary"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Executive Summary</h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            {summary}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
