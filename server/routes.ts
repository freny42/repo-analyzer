import type { Express } from "express";
import { createServer, type Server } from "http";
import { generateMockAnalysis } from "./mockData";
import { analyzeRepoRequestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/analyze/:repoPath", async (req, res) => {
    try {
      const repoPath = decodeURIComponent(req.params.repoPath);
      
      const validation = analyzeRepoRequestSchema.safeParse({ repoPath });
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Invalid repository format. Use owner/repo format.",
          details: validation.error.errors
        });
      }

      const [owner, repo] = repoPath.split("/");
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const analysis = generateMockAnalysis(owner, repo);
      
      return res.json(analysis);
    } catch (error) {
      console.error("Analysis error:", error);
      return res.status(500).json({ error: "Failed to analyze repository" });
    }
  });

  return httpServer;
}
