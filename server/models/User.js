const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
    },
    password : {
        type : String,
        required : true
    },
    
    role : {
        type : String,
        enum : ['user','admin'],
        required: true
    },
    residence:[{type:mongoose.Schema.Types.ObjectId, ref:'residence'}],
    todos : [{type : mongoose.Schema.Types.ObjectId, ref: 'Todo'}]
},{
    timestamps: true

});

UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );


UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
  .then(hash => {
      this.password = hash;
      next();
  });
});

UserSchema.pre('validate', function(next) {
    console.log(this.password);
    console.log(this.confirmPassword);
  if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
})
module.exports = mongoose.model('User',UserSchema);