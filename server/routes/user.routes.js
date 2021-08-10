
const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/new', UserController.createNewUser);
    app.get('/api/user/:id', UserController.findOneSingleUser);
    app.get('/api/user',UserController.findAllUsers)
    app.put('/api/user/:id', UserController.updateExistingUser);

}
