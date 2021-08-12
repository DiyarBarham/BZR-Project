

const ResidenceController = require('../controllers/residence.controller');


module.exports = function(app){
    app.post('/api/new', ResidenceController.createResidence);
    app.get('/api/residence/search/:location', ResidenceController.findResidencebyLocation);
    app.get('/api/residence/destance/:distance', ResidenceController.getResidencebydistance);
    app.get('/api/residence/price/:price', ResidenceController.getResidencebyprice);
    app.get('/api/residence/gender/:gender', ResidenceController.getResidencebygender);
    app.get('/api/residence/destanceandprice/:distance/:price', ResidenceController.getResidencebypriceanddistance);
    app.get('/api/residence/destanceandgender/:distance/:gender', ResidenceController.getResidencebydistanceandgender);
    app.get('/api/residence/priceandgender/:price/:gender', ResidenceController.getResidencebypriceandgender);
    app.get('/api/residence/all/:gender/:price/:distance', ResidenceController.getResidencebydistanceandgenderandprice);
    app.get('/api/residence/:id', ResidenceController.getResidence);
    app.get('/api/allresidence',ResidenceController.getAllResidence)
    app.put('/api/residence/:id', ResidenceController.updateResidence);



}
