const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
    User.find()
      .then(allTheUsers => res.json({ users: allTheUsers }))
      .catch(err => res.json({ message: "Can't find all users", error: err }));
  };
  
  module.exports.findOneSingleUser = (req, res) => {
      User.findOne({ _id: req.params.id })
          .then(oneSingleUser => res.json({ user: oneSingleUser }))
          .catch(err => res.json({ message: "Can't find single user", error: err }));
  };
  
  module.exports.createNewUser = (req, res) => {
    User.create(req.body)
      .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
      .catch(err => res.json({ message: "Can't create a user", error: err }));
  };
  
  module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => res.json({ user: updatedUser }))
      .catch(err => res.json({ message: "Can't update a user", error: err }));
  };