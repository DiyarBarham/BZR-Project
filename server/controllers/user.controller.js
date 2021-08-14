const { request } = require("express");
const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config();
  

  module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => res.json({ user: updatedUser }))
      .catch(err => res.json({ message: "Can't update a user", error: err }));
  };

  module.exports.findUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(perfume => response.json(perfume))
        .catch(err => response.json(err))
}

module.exports.getAll = (request, response) => {
    User.find({})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


module.exports.register = (request, res) => {
    console.log(request.body)
    User.create(request.body)
        .then(user => {
            console.log("44444444444")
            const userToken = jwt.sign({
                id: user._id
            }, process.env.FIRST_SECRET_KEY)
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
        })
        .catch(err =>{ res.status(400).json(err)
            console.log(err);
            console.log(".000.0.0.0.0.0.")
        });
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    .catch(err => res.status(400).json(err));
    if (user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY);
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!", user: user, token: userToken })

}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({msg: "User Logged Out"});
    res.sendStatus(200);
}

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
  }