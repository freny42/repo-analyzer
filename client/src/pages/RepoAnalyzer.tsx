import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Star, GitFork, AlertCircle, GitCommit, Clock, Loader2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RepoHeader } from "@/components/RepoHeader";
import { StatCard } from "@/components/StatCard";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { HealthCard } from "@/components/HealthCard";
import { InsightCard } from "@/components/InsightCard";
import { ScoreCard, OverallScoreCard } from "@/components/ScoreCard";
import { LanguagePieChart, CommitActivityChart, IssueResolutionChart } from "@/components/Charts";
import { ImprovementRoadmap } from "@/components/ImprovementRoadmap";
import { HiringPerspective } from "@/components/HiringPerspective";
import type { RepositoryAnalysis } from "@shared/schema";

function LoadingState() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <header className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Github className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">RepoIntel</span>
          </div>
        </div>
      </header>
      
      <main className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-12 h-12 text-primary" />
          </motion.div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">Analyzing Repository</h2>
            <p className="text-muted-foreground">This may take a few moments...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <header className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Github className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">RepoIntel</span>
          </div>
        </div>
      </header>
      
      <main className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">Analysis Failed</h2>
            <p className="text-muted-foreground mb-6">{message}</p>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function RepoAnalyzer() {
  const params = useParams<{ repoPath: string }>();
  const repoPath = decodeURIComponent(params.repoPath || "");

  const { data: analysis, isLoading, error } = useQuery<RepositoryAnalysis>({
    queryKey: ['/api/analyze', repoPath],
    enabled: !!repoPath,
  });

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !analysis) {
    return <ErrorState message={(error as Error)?.message || "Repository not found"} />;
  }

  const stats = [
    { icon: Star, value: analysis.repository.stars, label: "Stars" },
    { icon: GitFork, value: analysis.repository.forks, label: "Forks" },
    { icon: AlertCircle, value: analysis.repository.openIssues, label: "Open Issues" },
    { icon: GitCommit, value: analysis.repository.totalCommits, label: "Commits" },
    { icon: Clock, value: new Date(analysis.repository.lastUpdated).toLocaleDateString(), label: "Last Updated" },
  ];

  const scores = [
    { label: "Architecture & Design", score: analysis.scores.architecture },
    { label: "Code Quality", score: analysis.scores.codeQuality },
    { label: "Maintainability", score: analysis.scores.maintainability },
    { label: "Documentation", score: analysis.scores.documentation },
    { label: "Professional Practices", score: analysis.scores.professionalPractices },
    { label: "Production Readiness", score: analysis.scores.productionReadiness },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Github className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">RepoIntel</span>
          </div>
        </div>
      </header>
      
      <main className="relative container mx-auto px-4 py-8 space-y-12">
        <RepoHeader 
          repository={analysis.repository} 
          owner={analysis.owner} 
          maturity={analysis.maturityClassification}
        />
        
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </section>
        
        <ExecutiveSummary summary={analysis.executiveSummary} />
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-foreground mb-6"
          >
            Engineering Analysis
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {analysis.sections.map((section, index) => (
              <HealthCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-foreground mb-6"
          >
            Visual Intelligence
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LanguagePieChart data={analysis.languages} />
            <CommitActivityChart data={analysis.commitActivity} />
            <IssueResolutionChart data={analysis.issueResolution} />
          </div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-foreground mb-6"
          >
            Key Insights
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysis.insights.map((insight, index) => (
              <InsightCard key={insight.id} insight={insight} index={index} />
            ))}
          </div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-foreground mb-6"
          >
            Scoring Dashboard
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {scores.map((score, index) => (
                  <ScoreCard 
                    key={score.label} 
                    label={score.label} 
                    score={score.score} 
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <OverallScoreCard score={analysis.scores.overallScore} />
            </div>
          </div>
        </section>
        
        <ImprovementRoadmap improvements={analysis.improvements} />
        
        <HiringPerspective perspective={analysis.hiringPerspective} />
        
        <footer className="pt-8 pb-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            Analysis generated on {new Date(analysis.analyzedAt).toLocaleString()}
          </p>
        </footer>
      </main>
    </div>
  );
}
