import cors from "cors";
import express from "express";

const app = express();

/**
 * Disable CORS to prevent Cross-Origin Reading
 */
// app.use(cors());

app.use(express.json());
app.get("/", (request, response) => {
  /**
   * Allows ALL Cross-Origin Reading
   */
  // response.set("Access-Control-Allow-Origin", "*");

  /**
   * Allows Only Same-Origin
   */
  // response.set("Access-Control-Allow-Origin", "http://localhost:3001");

  /**
   * Allows Producer Cross-Origin
   */
  // response.set("Access-Control-Allow-Origin", "http://localhost:3002");

  response.sendFile(__dirname + "/consumer.html");
});

export default app;
