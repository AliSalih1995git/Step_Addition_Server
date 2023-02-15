const router = require("express").Router();
const { addPerform } = require("../controllers/addController");

router.post("/addition", addPerform);

module.exports = router;
