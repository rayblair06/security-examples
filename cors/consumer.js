import cors from "cors";
import express from "express";

const app = express();

// app.use(cors());

app.use(express.json());
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/consumer.html");
});

export default app;
