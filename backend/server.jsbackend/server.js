const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let expenses = [];
let nextId = 1;

// Home / health check
app.get("/", (req, res) => {
  res.json({
    message: "Expense Tracker Backend is running!",
    status: "success"
  });
});

// Get all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// Get one expense
app.get("/api/expenses/:id", (req, res) => {
  const id = Number(req.params.id);

  const expense = expenses.find((item) => item.id === id);

  if (!expense) {
    return res.status(404).json({
      message: "Expense not found"
    });
  }

  res.json(expense);
});

// Add a new expense
app.post("/api/expenses", (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || amount === undefined || !category || !date) {
    return res.status(400).json({
      message: "Title, amount, category and date are required"
    });
  }

  const newExpense = {
    id: nextId++,
    title,
    amount: Number(amount),
    category,
    date
  };

  expenses.push(newExpense);

  res.status(201).json({
    message: "Expense added successfully",
    expense: newExpense
  });
});

// Update an expense
app.put("/api/expenses/:id", (req, res) => {
  const id = Number(req.params.id);

  const expenseIndex = expenses.findIndex((item) => item.id === id);

  if (expenseIndex === -1) {
    return res.status(404).json({
      message: "Expense not found"
    });
  }

  const { title, amount, category, date } = req.body;

  expenses[expenseIndex] = {
    ...expenses[expenseIndex],
    title: title ?? expenses[expenseIndex].title,
    amount:
      amount !== undefined
        ? Number(amount)
        : expenses[expenseIndex].amount,
    category: category ?? expenses[expenseIndex].category,
    date: date ?? expenses[expenseIndex].date
  };

  res.json({
    message: "Expense updated successfully",
    expense: expenses[expenseIndex]
  });
});

// Delete an expense
app.delete("/api/expenses/:id", (req, res) => {
  const id = Number(req.params.id);

  const expenseIndex = expenses.findIndex((item) => item.id === id);

  if (expenseIndex === -1) {
    return res.status(404).json({
      message: "Expense not found"
    });
  }

  const deletedExpense = expenses.splice(expenseIndex, 1)[0];

  res.json({
    message: "Expense deleted successfully",
    expense: deletedExpense
  });
});

// Calculate total expenses
app.get("/api/expenses/summary/total", (req, res) => {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  res.json({
    total
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Expense Tracker Backend running on port ${PORT}`);
});
