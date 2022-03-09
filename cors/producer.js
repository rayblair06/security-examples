import express from "express";

const app = express();

app.use(express.json());
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/producer.html");
});

export default app;
