

const ResidenceController = require('../controllers/residence.controller');
const UserController = require('../controllers/user.controller');

module.exports = function(app){
    app.post('/api/new', ResidenceController.createResidence);
    app.get('/api/residence/:id', ResidenceController.getResidence);
    app.get('/api/residence',ResidenceController.getAllResidence)
    app.put('/api/residence/:id', ResidenceController.updateResidence);



}
