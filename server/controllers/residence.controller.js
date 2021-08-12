const { request, response } = require('express');
const { Residence } = require('../models/residence.model');

   


module.exports.createResidence = (request, response) => {
    const { name,price,rooms,
            balcones,description,state,
            destanceFromUniversity,
            address,location,images } = request.body;
            Residence.create({
            name,price,rooms,
            balcones,description,state,
            destanceFromUniversity,
            address,location,images
    })
        .then(Residence => response.json(Residence))
        .catch(err => response.status(400).json(err));
}


module.exports.getResidence =(request,response) => {
  Residence.findOne({_id:request.params.id}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}

module.exports.findResidencebyLocation =(request,response) => {
  Residence.find({location: { $regex: '.*'+request.params.location+'.*' }})
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}
module.exports.getResidencebydistance =(request,response) => {
  Residence.find({destanceFromUniversity:request.params.distance}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}

module.exports.getResidencebygender =(request,response) => { 
  //console.log(request.params.gender) 
  Residence.find({gender:"male"})
  .then(r => response.json(r))
  .catch(err => response.json(err))
}

module.exports.getResidencebyprice =(request,response) => {
  Residence.find({price:request.params.price}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}

module.exports.getResidencebypriceandgender =(request,response) => {
  Residence.find({price:request.params.price, gender:request.params.gender}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}
module.exports.getResidencebypriceanddistance =(request,response) => {
  Residence.find({price:request.params.price, destanceFromUniversity:request.params.distance}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}
module.exports.getResidencebydistanceandgender =(request,response) => {
  Residence.find({destanceFromUniversity:request.params.distance, gender:request.params.gender}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}
module.exports.getResidencebydistanceandgenderandprice =(request,response) => {
  Residence.find({destanceFromUniversity:request.params.distance, gender:request.params.gender, price:request.params.price}) 
  .then(Residence =>response.json(Residence))
  .catch(err => response.json(err))
}
module.exports.getAllResidence = (request, response) => {
  Residence.find({})
        .then(Residence => response.json(Residence))
        .catch(err => response.json(err))
}

module.exports.updateResidence = (request, response) => {
  Residence.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateResidence => response.json(updateResidence))
        .catch(err => response.json(err))
}
module.exports.deleteResidence = (request, response) => {
  Residence.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
