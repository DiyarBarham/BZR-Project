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
