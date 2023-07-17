const router = require("express").Router();
// const { postAgent, postProperties } = require("../controller/auth.js");
const { addProperty, addAgent } = require("../controller/auth.js");

router.post("/add-agent", addAgent);
router.post("/add-property", addProperty);

module.exports = router;
