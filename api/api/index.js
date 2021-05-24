const router = require("express").Router();
const mocks = require("./mock");
const assign = require("object-assign");

router.get("/employees", function (req, res, next) {
  res.json(mocks);
});

module.exports = router;
