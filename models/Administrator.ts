import mongoose from "mongoose";
const {Schema, model}= mongoose;
interface Administrator{
    _id:string,
    username:string,
    password:string,
    creationDate?:mongoose.Date,
}

const administratorSchema= new Schema<Administrator>({
    username:String,
    password:String,
    creationDate: {type:Date,default:Date.now},
})
const Administrator = mongoose.models.Administrator||model("Administrator",administratorSchema)
export default Administrator