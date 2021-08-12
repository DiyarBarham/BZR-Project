const { request } = require("express");
const User = require("../models/user.model");
const Todo = require("../models/todo.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport');
const passportConfig = require('../../passport');

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

  const signToken = userID =>{
    return JWT.sign({
        iss : "NoobCoder",
        sub : userID
    },"NoobCoder",{expiresIn : "1h"});
}

module.exports.registerUser = (req,res)=>{
    const { name,password,email } = req.body;
    User.findOne({name},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "name is already taken", msgError: true}});
        else{
            const newUser = new User({name,password,email});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
};

module.exports.loginUser = (req,res)=>{
    if(req.isAuthenticated()){
       const {_id,name,role} = req.user;
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
       res.status(200).json({isAuthenticated : true,user : {name,role}});
    }
};

module.exports.logoutUser= (req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{name : "", role : ""},success : true});
};

module.exports.todoUser= (req,res)=>{
    const todo = new Todo(req.body);
    todo.save(err=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.todos.push(todo);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody : "Successfully created todo", msgError : false}});
            });
        }
    })
};

module.exports.findUser = (req,res)=>{
    User.findById({_id : req.user._id}).populate('todos').exec((err,document)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            res.status(200).json({todos : document.todos, authenticated : true});
        }
    });
};

module.exports.adminUser= (req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
};

module.exports.adminAuth= (req,res)=>{
    const {name,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {name,role}});
};
 


  