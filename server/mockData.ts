import type { RepositoryAnalysis } from "@shared/schema";

export function generateMockAnalysis(owner: string, repo: string): RepositoryAnalysis {
  const now = new Date();
  const lastUpdated = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  
  const mockRepos: Record<string, Partial<RepositoryAnalysis>> = {
    "facebook/react": {
      repository: {
        id: "1",
        name: "react",
        owner: "facebook",
        description: "The library for web and native user interfaces. React lets you build user interfaces out of individual pieces called components.",
        visibility: "public",
        stars: 225000,
        forks: 46000,
        openIssues: 890,
        totalCommits: 17500,
        lastUpdated: "2024-12-14T10:30:00Z",
        primaryLanguage: "JavaScript",
        topics: ["react", "javascript", "frontend", "ui", "declarative"],
      },
      owner: {
        username: "facebook",
        avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
        followers: 250000,
        publicRepos: 120,
        githubUrl: "https://github.com/facebook",
      },
      maturityClassification: "scalable-foundation",
      scores: {
        architecture: 9.5,
        codeQuality: 9.2,
        maintainability: 9.0,
        documentation: 9.4,
        professionalPractices: 9.6,
        productionReadiness: 9.8,
        overallScore: 94,
      },
      executiveSummary: "React represents the gold standard in frontend library development. With exceptional architecture patterns, comprehensive documentation, and battle-tested production reliability powering millions of applications worldwide, this repository exemplifies what mature open-source engineering looks like at scale.",
    },
    "vercel/next.js": {
      repository: {
        id: "2",
        name: "next.js",
        owner: "vercel",
        description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
        visibility: "public",
        stars: 125000,
        forks: 26800,
        openIssues: 2450,
        totalCommits: 21000,
        lastUpdated: "2024-12-14T15:45:00Z",
        primaryLanguage: "TypeScript",
        topics: ["nextjs", "react", "typescript", "ssr", "framework"],
      },
      owner: {
        username: "vercel",
        avatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
        followers: 45000,
        publicRepos: 180,
        githubUrl: "https://github.com/vercel",
      },
      maturityClassification: "scalable-foundation",
      scores: {
        architecture: 9.3,
        codeQuality: 9.0,
        maintainability: 8.8,
        documentation: 9.5,
        professionalPractices: 9.4,
        productionReadiness: 9.6,
        overallScore: 92,
      },
      executiveSummary: "Next.js demonstrates exceptional framework engineering with its innovative approach to React server components, hybrid rendering strategies, and developer experience. The codebase shows strong architectural decisions that scale across enterprise deployments.",
    },
  };

  const baseMock = mockRepos[`${owner}/${repo}`];
  
  const analysis: RepositoryAnalysis = {
    id: `analysis-${Date.now()}`,
    repository: baseMock?.repository || {
      id: `repo-${Date.now()}`,
      name: repo,
      owner: owner,
      description: `A well-maintained repository demonstrating modern software engineering practices and clean architecture principles.`,
      visibility: "public",
      stars: Math.floor(Math.random() * 5000) + 500,
      forks: Math.floor(Math.random() * 1000) + 100,
      openIssues: Math.floor(Math.random() * 100) + 10,
      totalCommits: Math.floor(Math.random() * 3000) + 500,
      lastUpdated: lastUpdated.toISOString(),
      primaryLanguage: "TypeScript",
      topics: ["opensource", "typescript", "modern"],
    },
    owner: baseMock?.owner || {
      username: owner,
      avatarUrl: `https://avatars.githubusercontent.com/u/${Math.floor(Math.random() * 10000000)}?v=4`,
      followers: Math.floor(Math.random() * 10000) + 100,
      publicRepos: Math.floor(Math.random() * 100) + 10,
      githubUrl: `https://github.com/${owner}`,
    },
    executiveSummary: baseMock?.executiveSummary || `This repository demonstrates solid engineering fundamentals with room for growth. The codebase shows thoughtful organization and follows many industry best practices. With some targeted improvements to documentation and testing coverage, this could evolve into a highly maintainable production-grade project.`,
    maturityClassification: baseMock?.maturityClassification || "production-ready",
    scores: baseMock?.scores || {
      architecture: 7.5 + Math.random() * 1.5,
      codeQuality: 7.0 + Math.random() * 2,
      maintainability: 7.2 + Math.random() * 1.8,
      documentation: 6.5 + Math.random() * 2.5,
      professionalPractices: 7.0 + Math.random() * 2,
      productionReadiness: 7.5 + Math.random() * 1.5,
      overallScore: Math.floor(70 + Math.random() * 20),
    },
    sections: [
      {
        id: "architecture",
        title: "Architecture & System Design",
        icon: "layers",
        verdict: baseMock ? "excellent" : "good",
        summary: "The repository demonstrates strong architectural patterns with clear separation of concerns and modular design principles.",
        details: [
          "Well-organized folder structure following domain-driven principles",
          "Clear module boundaries with minimal coupling between components",
          "Scalable patterns that can accommodate 10x growth",
          "Consistent use of dependency injection for testability",
        ],
      },
      {
        id: "code-quality",
        title: "Code Quality & Maintainability",
        icon: "code",
        verdict: baseMock ? "excellent" : "good",
        summary: "Code quality metrics indicate a mature codebase with consistent patterns and readable implementations.",
        details: [
          "Consistent coding style enforced through linting configurations",
          "Low cyclomatic complexity in most modules",
          "Appropriate use of abstractions without over-engineering",
          "Type safety leveraged effectively throughout the codebase",
        ],
      },
      {
        id: "git-discipline",
        title: "Git & Engineering Discipline",
        icon: "git-branch",
        verdict: baseMock ? "excellent" : "good",
        summary: "Commit history shows disciplined engineering practices with meaningful messages and atomic changes.",
        details: [
          "Conventional commit messages with clear context",
          "Feature branches merged through pull request workflow",
          "Regular, consistent contribution patterns",
          "Clean git history without excessive merge commits",
        ],
      },
      {
        id: "documentation",
        title: "Documentation & Developer Experience",
        icon: "file-text",
        verdict: baseMock ? "excellent" : "needs-improvement",
        summary: baseMock 
          ? "Comprehensive documentation that enables rapid onboarding and clear understanding of the system."
          : "Documentation exists but could benefit from more detailed examples and architectural overviews.",
        details: baseMock ? [
          "Thorough README with quick start guide",
          "API documentation with examples",
          "Contributing guidelines for new developers",
          "Architecture decision records for major choices",
        ] : [
          "Basic README with setup instructions",
          "Some inline code documentation",
          "Missing API reference documentation",
          "No architecture decision records",
        ],
      },
      {
        id: "testing",
        title: "Testing & Reliability",
        icon: "test-tube",
        verdict: baseMock ? "excellent" : "needs-improvement",
        summary: baseMock
          ? "Comprehensive test coverage with unit, integration, and end-to-end testing strategies."
          : "Test coverage exists but could be expanded for critical paths.",
        details: baseMock ? [
          "High unit test coverage (>85%)",
          "Integration tests for key workflows",
          "End-to-end tests for critical user journeys",
          "CI pipeline enforces test passing before merge",
        ] : [
          "Unit tests for core business logic",
          "Integration tests for API endpoints",
          "Missing end-to-end test coverage",
          "CI pipeline runs tests on pull requests",
        ],
      },
      {
        id: "security",
        title: "Performance, Security & Best Practices",
        icon: "shield",
        verdict: baseMock ? "excellent" : "good",
        summary: "Security practices and performance considerations are well-implemented with room for advanced optimizations.",
        details: [
          "No exposed secrets or credentials in codebase",
          "Dependencies are regularly updated",
          "Input validation implemented for external data",
          "Performance-conscious patterns in hot paths",
        ],
      },
      {
        id: "mindset",
        title: "Engineering Mindset & Intent",
        icon: "brain",
        verdict: baseMock ? "excellent" : "good",
        summary: "The repository shows clear product thinking with features that solve real problems rather than technical showcases.",
        details: [
          "Clear problem statement in documentation",
          "Features aligned with user needs",
          "Pragmatic technical choices over trend-following",
          "Evidence of iterative improvement over time",
        ],
      },
      {
        id: "production",
        title: "Production Readiness",
        icon: "rocket",
        verdict: baseMock ? "excellent" : "good",
        summary: baseMock
          ? "Battle-tested in production environments with proven reliability and operational maturity."
          : "Ready for production deployment with standard operational considerations.",
        details: baseMock ? [
          "Proven at scale with millions of users",
          "Comprehensive monitoring and observability",
          "Clear deployment and rollback procedures",
          "Incident response documentation available",
        ] : [
          "Basic error handling and logging",
          "Environment configuration management",
          "Deployment scripts or CI/CD pipeline",
          "Would benefit from monitoring setup",
        ],
      },
    ],
    insights: [
      {
        id: "insight-1",
        type: "success",
        icon: "flame",
        message: "Actively maintained with regular commits and responsive issue handling",
      },
      {
        id: "insight-2",
        type: baseMock ? "success" : "warning",
        icon: baseMock ? "check-circle" : "alert-triangle",
        message: baseMock 
          ? "Excellent issue resolution rate with community engagement"
          : "Some open issues aging beyond 30 days without response",
      },
      {
        id: "insight-3",
        type: baseMock ? "success" : "info",
        icon: baseMock ? "rocket" : "book-open",
        message: baseMock
          ? "Strong foundation ready for enterprise-scale adoption"
          : "README provides good overview but lacks advanced usage examples",
      },
      {
        id: "insight-4",
        type: "success",
        icon: "shield",
        message: "No security vulnerabilities detected in dependency scan",
      },
      {
        id: "insight-5",
        type: baseMock ? "success" : "info",
        icon: "zap",
        message: baseMock
          ? "Performance optimizations implemented throughout critical paths"
          : "TypeScript adoption provides strong type safety benefits",
      },
      {
        id: "insight-6",
        type: baseMock ? "success" : "warning",
        icon: baseMock ? "check-circle" : "alert-triangle",
        message: baseMock
          ? "Comprehensive test suite with CI enforcement"
          : "Test coverage could be expanded for edge cases",
      },
    ],
    languages: [
      { name: "TypeScript", percentage: 65, color: "hsl(200, 90%, 50%)" },
      { name: "JavaScript", percentage: 20, color: "hsl(45, 95%, 55%)" },
      { name: "CSS", percentage: 10, color: "hsl(280, 70%, 55%)" },
      { name: "HTML", percentage: 5, color: "hsl(0, 72%, 51%)" },
    ],
    commitActivity: [
      { month: "Jul", commits: Math.floor(Math.random() * 100) + 50 },
      { month: "Aug", commits: Math.floor(Math.random() * 100) + 60 },
      { month: "Sep", commits: Math.floor(Math.random() * 100) + 70 },
      { month: "Oct", commits: Math.floor(Math.random() * 100) + 80 },
      { month: "Nov", commits: Math.floor(Math.random() * 100) + 75 },
      { month: "Dec", commits: Math.floor(Math.random() * 100) + 90 },
    ],
    issueResolution: [
      { month: "Jul", opened: Math.floor(Math.random() * 30) + 10, closed: Math.floor(Math.random() * 35) + 15 },
      { month: "Aug", opened: Math.floor(Math.random() * 30) + 15, closed: Math.floor(Math.random() * 35) + 20 },
      { month: "Sep", opened: Math.floor(Math.random() * 30) + 12, closed: Math.floor(Math.random() * 35) + 18 },
      { month: "Oct", opened: Math.floor(Math.random() * 30) + 18, closed: Math.floor(Math.random() * 35) + 22 },
      { month: "Nov", opened: Math.floor(Math.random() * 30) + 14, closed: Math.floor(Math.random() * 35) + 19 },
      { month: "Dec", opened: Math.floor(Math.random() * 30) + 16, closed: Math.floor(Math.random() * 35) + 21 },
    ],
    improvements: [
      { id: "imp-1", priority: "short-term", task: "Add comprehensive API documentation with examples", impact: "high" },
      { id: "imp-2", priority: "short-term", task: "Increase unit test coverage for utility functions", impact: "medium" },
      { id: "imp-3", priority: "short-term", task: "Add contributing guidelines for new developers", impact: "medium" },
      { id: "imp-4", priority: "short-term", task: "Implement conventional commit message enforcement", impact: "low" },
      { id: "imp-5", priority: "long-term", task: "Set up end-to-end testing with Playwright or Cypress", impact: "high" },
      { id: "imp-6", priority: "long-term", task: "Implement comprehensive monitoring and alerting", impact: "high" },
      { id: "imp-7", priority: "long-term", task: "Create architecture decision records for major choices", impact: "medium" },
      { id: "imp-8", priority: "long-term", task: "Establish performance benchmarking pipeline", impact: "medium" },
    ],
    hiringPerspective: {
      verdict: baseMock
        ? "This repository would strongly impress a hiring panel. It demonstrates mastery of software engineering principles at scale and shows the kind of work expected from senior to staff-level engineers."
        : "This repository demonstrates solid engineering fundamentals that would positively impress most hiring panels. It shows professional development practices and attention to quality.",
      suitableRoles: baseMock
        ? ["Staff Engineer", "Principal Engineer", "Engineering Manager", "Tech Lead"]
        : ["Senior Developer", "Full Stack Engineer", "Frontend Lead", "Backend Developer"],
      developerLevel: baseMock ? "Staff / Principal Level" : "Mid-Senior Level",
      strengths: [
        "Clean code organization and consistent patterns",
        "Evidence of iterative improvement and refactoring",
        "Thoughtful architectural decisions",
        "Professional git workflow practices",
      ],
      holdingBack: baseMock ? [
        "High issue volume could indicate scaling challenges",
        "Some legacy patterns present in older modules",
      ] : [
        "Documentation could be more comprehensive",
        "Test coverage below industry best practices",
        "Missing architecture decision documentation",
        "No visible monitoring or observability setup",
      ],
    },
    analyzedAt: now.toISOString(),
  };

  return analysis;
}
