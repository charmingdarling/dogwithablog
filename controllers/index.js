const router = require("express").Router();

// Calls index in api directory
const apiRoutes = require("./api");

const homeRoutes = require("./homeRoutes");

// Root
router.use("/", homeRoutes);

router.use("/api", apiRoutes);

module.exports = router;
