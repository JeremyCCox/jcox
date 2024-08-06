import mongoose from "mongoose";
const {Schema, model}= mongoose;
interface Article{
    _id:string,
    title?:string,
    imgSrc?:string,
    imgAlt?:string,
    imgDesc?:string,
    description?:string,
    category?:string,
    bodyHTML?:string,
    template?:string,
    creationDate?:mongoose.Date,
}

const articleSchema= new Schema<Article>({
    title:String,
    description:String,
    imgSrc:String,
    imgAlt:String,
    imgDesc:String,
    category:String,
    bodyHTML:String,
    template:Number,
    creationDate: {type:Date,default:Date.now},
})
const Article = mongoose.models.Article||model("Article",articleSchema)
export default Article