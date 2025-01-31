import { quotes } from "../data/quotes.js";

export function getAllQuotes(req, res) {
  res.json({
    name: "Quotes",
    count: quotes.length,
    data: quotes
  });
}

export function getRandomQuote(req, res) {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  res.json(quote);
}

export function createNewQuote(req, res) {
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
}

export function updateQuoteData(req, res) {
  const { id } = req.params;
  const { text, author } = req.body;
  const quote = quotes.find((item) => item.id === +id);

  if (!quote) {
    return res.status(404).json({
      message: "Quote not found"
    });
  }

  if (text) {
    quote.text = text;
  }

  if (author) {
    quote.author = author;
  }

  res.json({
    message: "Quote was successfully updated",
    updatedQuote: quote
  });
}

export function deleteQuote(req, res) {
  const { id } = req.params;
  const idx = quotes.findIndex((item) => item.id === +id);

  if (idx === -1) {
    return res.status(404).json({
      message: "Quote not found"
    });
  }

  const deletedQuote = quotes.splice(idx, 1);
  res.json({
    message: "Quote was successfully deleted",
    deletedQuote: deletedQuote[0],
    remainingQuotes: quotes
  });
}
