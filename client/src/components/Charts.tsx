import { motion } from "framer-motion";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Legend 
} from "recharts";
import { Card } from "@/components/ui/card";
import { Code2, GitCommit, AlertCircle } from "lucide-react";
import type { LanguageData, CommitActivity, IssueResolution } from "@shared/schema";

const CHART_COLORS = [
  "hsl(265, 70%, 60%)",
  "hsl(142, 70%, 45%)",
  "hsl(200, 90%, 50%)",
  "hsl(45, 95%, 55%)",
  "hsl(280, 70%, 55%)",
  "hsl(0, 72%, 51%)",
];

interface LanguagePieChartProps {
  data: LanguageData[];
}

export function LanguagePieChart({ data }: LanguagePieChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-card-border" data-testid="chart-language">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Language Distribution</h3>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="percentage"
                nameKey="name"
                animationBegin={0}
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color || CHART_COLORS[index % CHART_COLORS.length]} 
                    stroke="transparent"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 14%, 11%)",
                  border: "1px solid hsl(220, 12%, 18%)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
                itemStyle={{ color: "hsl(210, 20%, 95%)" }}
                formatter={(value: number) => [`${value.toFixed(1)}%`, "Usage"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {data.map((lang, index) => (
            <div key={lang.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: lang.color || CHART_COLORS[index % CHART_COLORS.length] }}
              />
              <span className="text-sm text-muted-foreground">{lang.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

interface CommitActivityChartProps {
  data: CommitActivity[];
}

export function CommitActivityChart({ data }: CommitActivityChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-card-border" data-testid="chart-commits">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <GitCommit className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Commit Activity</h3>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 10%, 18%)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(220, 10%, 55%)" 
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(220, 10%, 18%)" }}
              />
              <YAxis 
                stroke="hsl(220, 10%, 55%)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 14%, 11%)",
                  border: "1px solid hsl(220, 12%, 18%)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
                itemStyle={{ color: "hsl(210, 20%, 95%)" }}
              />
              <Line 
                type="monotone" 
                dataKey="commits" 
                stroke="hsl(265, 70%, 60%)" 
                strokeWidth={2}
                dot={{ fill: "hsl(265, 70%, 60%)", strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: "hsl(265, 70%, 70%)" }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
}

interface IssueResolutionChartProps {
  data: IssueResolution[];
}

export function IssueResolutionChart({ data }: IssueResolutionChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-card-border" data-testid="chart-issues">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Issues vs Resolutions</h3>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 10%, 18%)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(220, 10%, 55%)" 
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(220, 10%, 18%)" }}
              />
              <YAxis 
                stroke="hsl(220, 10%, 55%)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 14%, 11%)",
                  border: "1px solid hsl(220, 12%, 18%)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
                itemStyle={{ color: "hsl(210, 20%, 95%)" }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
              />
              <Bar 
                dataKey="opened" 
                name="Opened" 
                fill="hsl(0, 72%, 51%)" 
                radius={[4, 4, 0, 0]}
                animationDuration={800}
              />
              <Bar 
                dataKey="closed" 
                name="Closed" 
                fill="hsl(142, 70%, 45%)" 
                radius={[4, 4, 0, 0]}
                animationDuration={800}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
}
