// Let's us use router.get etc...
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
