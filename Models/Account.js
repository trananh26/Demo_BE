const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/WebDemo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
},{
    collection:'Account'
});

const AccountModels = mongoose.model('Account', AccountSchema)
module.exports = AccountModels