const express = require("express");
const router = express.Router();
const handler = require("../../controllers");
const { protect } = require("../../utils").jwt;
const asyncHandler = require("express-async-handler");
// const { register } = require("../../validators");

router.put("/profile", protect, asyncHandler(handler.user.changeUsername));
router.put("/projects", protect, asyncHandler(handler.user.changeUsername));
router.put("/reviews", protect, asyncHandler(handler.user.changeUsername));
router.put("/skills", protect, asyncHandler(handler.user.changeUsername));
router.put("/portfolio", protect, asyncHandler(handler.user.changeUsername));
router.put("/notifications", protect, asyncHandler(handler.user.changeUsername));
router.put("/earnings", protect, asyncHandler(handler.user.changeUsername));
router.put("/profile", protect, asyncHandler(handler.user.changeUsername));

module.exports = router;