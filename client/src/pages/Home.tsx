import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Heart, BookOpen, Rocket, Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    icon: Layers,
    title: "Architecture Quality",
    description: "Evaluate folder structure, modularity, and scalability readiness of any repository.",
    gradient: "from-purple-500/80 to-indigo-600/80",
  },
  {
    icon: Heart,
    title: "Code Health",
    description: "Assess readability, reusability, and technical debt risk with actionable insights.",
    gradient: "from-emerald-500/80 to-teal-600/80",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Measure README depth, onboarding friction, and developer experience quality.",
    gradient: "from-blue-500/80 to-cyan-600/80",
  },
  {
    icon: Rocket,
    title: "Production Readiness",
    description: "Determine if a repository is prototype, production-ready, or scalable foundation.",
    gradient: "from-amber-500/80 to-orange-600/80",
  },
];

export default function Home() {
  const [repoPath, setRepoPath] = useState("");
  const [, navigate] = useLocation();
  const [error, setError] = useState("");

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    
    const pattern = /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/;
    if (!pattern.test(repoPath.trim())) {
      setError("Please enter a valid repository path (e.g., facebook/react)");
      return;
    }
    
    setError("");
    navigate(`/analyze/${encodeURIComponent(repoPath.trim())}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <header className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Github className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">RepoIntel</span>
          </motion.div>
        </div>
      </header>
      
      <main className="relative">
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Understand GitHub repositories{" "}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                  beyond stars
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Architecture. Code quality. Engineering maturity.
                <br />
                Get professional-grade insights that matter.
              </p>
            </motion.div>
            
            <motion.form
              onSubmit={handleAnalyze}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="owner/repository"
                  value={repoPath}
                  onChange={(e) => {
                    setRepoPath(e.target.value);
                    setError("");
                  }}
                  className="pl-10 h-12 bg-card/60 border-card-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50"
                  data-testid="input-repo-path"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 px-6 bg-primary text-primary-foreground font-medium gap-2"
                data-testid="button-analyze"
              >
                Analyze Repository
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.form>
            
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mb-8"
                data-testid="text-error"
              >
                {error}
              </motion.p>
            )}
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              Try: <button 
                type="button"
                onClick={() => setRepoPath("facebook/react")} 
                className="text-primary hover:underline"
                data-testid="button-example-react"
              >
                facebook/react
              </button>
              {" • "}
              <button 
                type="button"
                onClick={() => setRepoPath("vercel/next.js")} 
                className="text-primary hover:underline"
                data-testid="button-example-nextjs"
              >
                vercel/next.js
              </button>
              {" • "}
              <button 
                type="button"
                onClick={() => setRepoPath("tailwindlabs/tailwindcss")} 
                className="text-primary hover:underline"
                data-testid="button-example-tailwind"
              >
                tailwindlabs/tailwindcss
              </button>
            </motion.p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 pb-20 lg:pb-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                index={index}
              />
            ))}
          </div>
        </section>
        
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-card-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Built for Engineering Leaders
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Whether you're evaluating open source dependencies, reviewing candidate portfolios, 
                or assessing your own codebase — RepoIntel provides the deep technical insights 
                that matter for making informed decisions.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      
      <footer className="relative border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            RepoIntel — Repository Intelligence Platform
          </p>
        </div>
      </footer>
    </div>
  );
}
