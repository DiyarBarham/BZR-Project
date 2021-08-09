const mongoose = require('mongoose');

const ResidenceSchema = mongoose.Schema({
    name: { type: String, 'default': '' },
    price: { type: Number, 'default': '' },
    rooms: { type: Number, 'default': '' },
    balcones: { type: Number, 'default': '' },
    description: { type: String, 'default': '' },
    destanceFromUniversity: { type: Number, 'default': '' },
    state:{type:Boolean,'default': false},
    address: { type: String, 'default': '' },
    location: { type: String, 'default': '' },
    images : [String]
  }, {
    timestamps: true
  });

module.exports.Residence = mongoose.model('residence', ResidenceSchema);




