import express from "express";
import { quotes } from "./data/quotes.js";

const app = express();
const PORT = 4040;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to QuoteGenerator!");
});

app.get("/quotes", (req, res) => {
  res.json({
    name: "Quotes",
    count: quotes.length,
    data: quotes
  });
});

app.get("/quotes/random", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  res.json(quote);
});

app.post("/quotes", (req, res) => {
  const newItem = {
    id: quotes.length + 1,
    text: req.body.text,
    author: req.body.author
  };
  quotes.push(newItem);

  res.json({
    newQuote: newItem,
    allQuotes: quotes
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
