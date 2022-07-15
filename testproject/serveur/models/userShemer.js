import Mongoose from 'mongoose';

const UserSchemer=new Mongoose.Schema({
    name:String,
    password:String,
    email:String,
})
const Accounts=Mongoose.model('accounts',UserSchemer);

export default Accounts;