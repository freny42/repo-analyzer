import { motion } from "framer-motion";
import { Lock, Unlock, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Repository, OwnerProfile, MaturityClassification } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const maturityConfig = {
  prototype: {
    label: "Prototype",
    color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  "production-ready": {
    label: "Production Ready",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  "scalable-foundation": {
    label: "Scalable Foundation",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  experimental: {
    label: "Experimental",
    color: "bg-red-500/15 text-red-400 border-red-500/30",
  },
};

interface RepoHeaderProps {
  repository: Repository;
  owner: OwnerProfile;
  maturity: MaturityClassification;
}

export function RepoHeader({ repository, owner, maturity }: RepoHeaderProps) {
  const maturityStyle = maturityConfig[maturity];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <Badge 
              variant="outline" 
              className={repository.visibility === "public" 
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                : "bg-amber-500/10 text-amber-400 border-amber-500/30"
              }
              data-testid="badge-visibility"
            >
              {repository.visibility === "public" ? (
                <><Unlock className="w-3 h-3 mr-1" /> Public</>
              ) : (
                <><Lock className="w-3 h-3 mr-1" /> Private</>
              )}
            </Badge>
            <Badge variant="outline" className={maturityStyle.color} data-testid="badge-maturity">
              {maturityStyle.label}
            </Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 truncate" data-testid="text-repo-name">
            {repository.name}
          </h1>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <span className="text-lg" data-testid="text-owner-name">{repository.owner}</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-lg text-primary">{repository.name}</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-4" data-testid="text-description">
            {repository.description}
          </p>
          
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {new Date(repository.lastUpdated).toLocaleDateString()}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {repository.primaryLanguage}
            </Badge>
            {repository.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs bg-muted/50">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-card-border backdrop-blur-sm">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={owner.avatarUrl} alt={owner.username} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {owner.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-foreground" data-testid="text-owner-username">
                {owner.username}
              </span>
              <span className="text-sm text-muted-foreground">
                {owner.followers.toLocaleString()} followers
              </span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              data-testid="button-github-link"
            >
              <a href={owner.githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
