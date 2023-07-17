const router = require("express").Router();

const {
  homeRoutes,
  getAddProperty,
  getAddSignUp,
  getPropertySearch,
  getPropertyDetails,
} = require("../controller/page.js");

router.get("/", homeRoutes);
router.get("/add-property", getAddProperty);
router.get("/agent-sign-up", getAddSignUp);
router.post("/search-data", getPropertySearch);
router.get("/property/:id", getPropertyDetails);

module.exports = router;
