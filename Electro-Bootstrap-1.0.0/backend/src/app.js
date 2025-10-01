// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Ініціалізація dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Для обробки JSON у запитах

// Базовий роут для перевірки сервера
app.get("/", (req, res) => {
  res.json({ message: "Backend працює 🚀" });
});

// Порт з .env або 5000
const PORT = process.env.PORT || 5000;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
