
const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/user/new', UserController.createNewUser);
    app.get('/api/user/all',UserController.findAllUsers);
    app.get('/api/user/:id/find', UserController.findOneSingleUser);
    app.put('/api/user/:id/update', UserController.updateExistingUser);

}
