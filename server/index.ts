import express from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();

(async () => {
  await registerRoutes(app);

  const port = process.env.PORT || 5000;
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";

  const server = createServer(app);
  server.listen(
    {
      port: Number(port),
      host,
    },
    () => {
      console.log(`serving on port ${port}`);
    }
  );
})();
