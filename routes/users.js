const router = require("express").Router();

const userService = require("../models/users.js");

// GET ALL USERS
router.get("/", async (req, res) => {
  const users = await userService.findAll();
  res.status(200).json(users);

});

// GET USER BY ID
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await userService.findOrRaise({ id: Number(userId) });
  return res.status(200).json(user);
});

// INSERT USER INTO DB
router.post("/", async (req, res) => {
  const newUser = req.body;
  if (!newUser.name) {
    return res.status(404).json({ err: "Please provide the name" });
  }
  const user = await userService.addUser(newUser);
  res.status(201).json(user);

});

router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const newChanges = req.body;
  if (!newChanges.name) {
    return res.status(404).json({ err: "You are missing information" });
  }
  const addChanges = await userService.updateUser(userId, newChanges);
  res.status(200).json(addChanges);

});

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  const deleting = await userService.removeUser(userId);
  res.status(204).json(deleting);
});

module.exports = router;
