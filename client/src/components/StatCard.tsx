import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  index?: number;
}

export function StatCard({ icon: Icon, value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card 
        className="relative overflow-visible p-5 bg-card/60 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-shadow duration-300"
        data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
