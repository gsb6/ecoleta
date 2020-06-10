import express from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json([
    "gsb6",
    "gabrielweich",
    "marceloAzeved0",
    "thomaspozzer",
  ]);
});

app.listen(3333);
