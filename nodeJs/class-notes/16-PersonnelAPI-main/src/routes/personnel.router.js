"use strict";
/* --------------------------------------------------------------------------
    EXPRESS - Personnel API
-------------------------------------------------------------------------- */
const router = require("express").Router();
/* -------------------------------------------------------------------------- */
const Personnel = require("../controllers/personnel.controller");

// URL: /Personnels

router
    .route("/")
    .get(Personnel.list)
    .post(Personnel.create);

router
  .route("/:id")
  .get(Personnel.read)
  .put(Personnel.update)
  .patch(Personnel.update)
  .delete(Personnel.delete);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
module.exports = router;
