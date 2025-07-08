import type { Express } from "express";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {
  // Example API route (add your real routes here)
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });
  // Add more API routes as needed
}
