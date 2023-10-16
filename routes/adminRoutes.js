const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  postOneUser,
  updateUser,
  deleteUser,
} = require("../controller/adminController");

router.route('/').get(getAllUsers).post(postOneUser)
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser)

module.exports = router