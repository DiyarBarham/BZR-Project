

const ResidenceController = require('../controllers/residence.controller');


module.exports = function(app){
    app.post('/api/new', ResidenceController.createResidence);
    app.get('/api/residence/:id', ResidenceController.getResidence);
    app.get('/api/allresidence',ResidenceController.getAllResidence)
    app.put('/api/residence/:id', ResidenceController.updateResidence);



}
