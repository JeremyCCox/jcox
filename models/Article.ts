import mongoose from "mongoose";
const {Schema, model}= mongoose;
interface Article{
    _id:string,
    title?:string,
    description?:string,
    category?:string,
    body?:string,
    template?:string,
}

const articleSchema= new Schema<Article>({
    title:String,
    description:String,
    category:String,
    body:String,
    template:Number,
})
const Article = mongoose.models.Article||model("Article",articleSchema)
export default Article