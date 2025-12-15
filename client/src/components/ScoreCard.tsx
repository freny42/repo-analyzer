import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ScoreCardProps {
  label: string;
  score: number;
  maxScore?: number;
  index?: number;
}

function getScoreColor(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "bg-emerald-500";
  if (percentage >= 60) return "bg-blue-500";
  if (percentage >= 40) return "bg-amber-500";
  return "bg-red-500";
}

function getScoreGradient(score: number, maxScore: number) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "from-emerald-500 to-emerald-400";
  if (percentage >= 60) return "from-blue-500 to-blue-400";
  if (percentage >= 40) return "from-amber-500 to-amber-400";
  return "from-red-500 to-red-400";
}

export function ScoreCard({ label, score, maxScore = 10, index = 0 }: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Card 
        className="p-4 bg-card/60 backdrop-blur-sm border-card-border hover-elevate"
        data-testid={`score-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <span className={`text-lg font-bold bg-gradient-to-r ${getScoreGradient(score, maxScore)} bg-clip-text text-transparent`}>
            {score.toFixed(1)}/{maxScore}
          </span>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className={`h-full rounded-full ${getScoreColor(score, maxScore)}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </Card>
    </motion.div>
  );
}

interface OverallScoreCardProps {
  score: number;
}

export function OverallScoreCard({ score }: OverallScoreCardProps) {
  const getOverallScoreColor = () => {
    if (score >= 80) return "from-emerald-500 via-emerald-400 to-teal-400";
    if (score >= 60) return "from-blue-500 via-blue-400 to-cyan-400";
    if (score >= 40) return "from-amber-500 via-amber-400 to-yellow-400";
    return "from-red-500 via-red-400 to-orange-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card 
        className="relative overflow-hidden p-8 bg-card/80 backdrop-blur-sm border-card-border"
        data-testid="overall-score-card"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative flex flex-col items-center justify-center gap-4">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Engineering Maturity Score
          </span>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className={`text-6xl font-bold bg-gradient-to-r ${getOverallScoreColor()} bg-clip-text text-transparent`}>
              {score}
            </span>
            <span className="text-2xl text-muted-foreground">/100</span>
          </motion.div>
          <div className="w-full max-w-xs mt-2">
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${getOverallScoreColor()}`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
