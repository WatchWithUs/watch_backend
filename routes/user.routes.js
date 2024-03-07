const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

// Rota para criar um novo usuário
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(400).json({ message: "Erro ao criar usuário" });
  }
});

// Rota para obter todos os usuários
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

module.exports = router;
