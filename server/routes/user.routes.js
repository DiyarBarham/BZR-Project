const UserController = require('../controllers/user.controller');
const passport = require('passport');

module.exports = function(app){
    app.post('/api/user/new', UserController.createNewUser);
    app.get('/api/user/all',UserController.findAllUsers);
    app.get('/api/user/:id/find', UserController.findOneSingleUser);
    app.put('/api/user/:id/update', UserController.updateExistingUser);
    app.post('/api/user/register', UserController.registerUser);
    app.post('/api/user/login',passport.authenticate('local',{session : false}), UserController.loginUser);
    app.get('/api/user/logout',passport.authenticate('jwt',{session : false}), UserController.logoutUser);
    app.post('/api/user/todo',passport.authenticate('jwt',{session : false}), UserController.todoUser);
    app.get('/api/user/todos', passport.authenticate('jwt',{session : false}),UserController.findUser);
    app.get('/api/user/admin',passport.authenticate('jwt',{session : false}), UserController.adminUser);
    app.get('/api/user/authenticated',passport.authenticate('jwt',{session : false}), UserController.adminAuth);
    
    

}
