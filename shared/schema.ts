import { z } from "zod";

// Repository Analysis Types
export const repositorySchema = z.object({
  id: z.string(),
  name: z.string(),
  owner: z.string(),
  description: z.string(),
  visibility: z.enum(["public", "private"]),
  stars: z.number(),
  forks: z.number(),
  openIssues: z.number(),
  totalCommits: z.number(),
  lastUpdated: z.string(),
  primaryLanguage: z.string(),
  topics: z.array(z.string()),
});

export type Repository = z.infer<typeof repositorySchema>;

export const ownerProfileSchema = z.object({
  username: z.string(),
  avatarUrl: z.string(),
  followers: z.number(),
  publicRepos: z.number(),
  githubUrl: z.string(),
});

export type OwnerProfile = z.infer<typeof ownerProfileSchema>;

export const analysisScoreSchema = z.object({
  architecture: z.number().min(0).max(10),
  codeQuality: z.number().min(0).max(10),
  maintainability: z.number().min(0).max(10),
  documentation: z.number().min(0).max(10),
  professionalPractices: z.number().min(0).max(10),
  productionReadiness: z.number().min(0).max(10),
  overallScore: z.number().min(0).max(100),
});

export type AnalysisScore = z.infer<typeof analysisScoreSchema>;

export const insightSchema = z.object({
  id: z.string(),
  type: z.enum(["success", "warning", "danger", "info"]),
  icon: z.string(),
  message: z.string(),
});

export type Insight = z.infer<typeof insightSchema>;

export const analysisSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  icon: z.string(),
  verdict: z.enum(["excellent", "good", "needs-improvement", "critical"]),
  summary: z.string(),
  details: z.array(z.string()),
});

export type AnalysisSection = z.infer<typeof analysisSectionSchema>;

export const languageDataSchema = z.object({
  name: z.string(),
  percentage: z.number(),
  color: z.string(),
});

export type LanguageData = z.infer<typeof languageDataSchema>;

export const commitActivitySchema = z.object({
  month: z.string(),
  commits: z.number(),
});

export type CommitActivity = z.infer<typeof commitActivitySchema>;

export const issueResolutionSchema = z.object({
  month: z.string(),
  opened: z.number(),
  closed: z.number(),
});

export type IssueResolution = z.infer<typeof issueResolutionSchema>;

export const improvementItemSchema = z.object({
  id: z.string(),
  priority: z.enum(["short-term", "long-term"]),
  task: z.string(),
  impact: z.enum(["high", "medium", "low"]),
});

export type ImprovementItem = z.infer<typeof improvementItemSchema>;

export const hiringPerspectiveSchema = z.object({
  verdict: z.string(),
  suitableRoles: z.array(z.string()),
  developerLevel: z.string(),
  holdingBack: z.array(z.string()),
  strengths: z.array(z.string()),
});

export type HiringPerspective = z.infer<typeof hiringPerspectiveSchema>;

export const maturityClassificationSchema = z.enum([
  "prototype",
  "production-ready",
  "scalable-foundation",
  "experimental",
]);

export type MaturityClassification = z.infer<typeof maturityClassificationSchema>;

export const repositoryAnalysisSchema = z.object({
  id: z.string(),
  repository: repositorySchema,
  owner: ownerProfileSchema,
  executiveSummary: z.string(),
  maturityClassification: maturityClassificationSchema,
  scores: analysisScoreSchema,
  sections: z.array(analysisSectionSchema),
  insights: z.array(insightSchema),
  languages: z.array(languageDataSchema),
  commitActivity: z.array(commitActivitySchema),
  issueResolution: z.array(issueResolutionSchema),
  improvements: z.array(improvementItemSchema),
  hiringPerspective: hiringPerspectiveSchema,
  analyzedAt: z.string(),
});

export type RepositoryAnalysis = z.infer<typeof repositoryAnalysisSchema>;

// API Request/Response types
export const analyzeRepoRequestSchema = z.object({
  repoPath: z.string().regex(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/, "Invalid repository format. Use owner/repo"),
});

export type AnalyzeRepoRequest = z.infer<typeof analyzeRepoRequestSchema>;
