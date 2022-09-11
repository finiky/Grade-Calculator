const express = require("express");
const router = express.Router();
const repository = require("./repository");
router.get("/", async (req, res) => {
  const gradeScale = await repository.getGradeScale();
  res.json(gradeScale);
});

module.exports = router;
