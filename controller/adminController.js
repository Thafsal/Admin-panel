const Admin = require("../model/adminModel");

//get all users details

const getAllUsers = async (req, res) => {
  try {
    const users = await Admin.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//get a single user details

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Admin.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//create new user

const postOneUser = async (req, res) => {
  try {
    const user = await Admin.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//update a user

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Admin.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: `no item found with id${id}` });
    }
    const updatedUser = await Admin.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Admin.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: `No item found with id ${id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  postOneUser,
  updateUser,
  deleteUser,
};
