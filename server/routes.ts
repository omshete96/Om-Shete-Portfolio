import type { Express } from "express";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });
  app.get('/', (_req, res) => {
    res.send('Hello from backend!');
  });
  console.log("Registered /api/health and / routes");
}
