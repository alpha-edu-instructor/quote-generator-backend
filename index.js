import express from "express";
import {
  createNewQuote,
  deleteQuote,
  getAllQuotes,
  getRandomQuote,
  updateQuoteData
} from "./controllers/quote.controller.js";

const app = express();
const PORT = 4040;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to QuoteGenerator!");
});

app.get("/quotes", getAllQuotes);
app.get("/quotes/random", getRandomQuote);
app.post("/quotes", createNewQuote);
app.patch("/quotes/:id", updateQuoteData);
app.delete("/quotes/:id", deleteQuote);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
