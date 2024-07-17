'use server'

import mongoose from "mongoose";
import Article from "@/models/Article";
const getURI=()=>{
    const mongodb_uri = process.env["MONGODB_URI"];
    if(!mongodb_uri){
        throw new Error("Missing Mongodb URI")
    }
    return mongodb_uri
}
export interface ArticleType{
    _id?:string,
    title?:string,
    category?:string,
    body?:string,
    template?:string,
}
const cleanArticle = (article:ArticleType) =>{
    return article
}
export async function getArticles(){
    try{
        await mongoose.connect(getURI())
        let articles= await Article.find({})
        return(articles.map(article=>{
            return cleanArticle(article)
        }))
    }catch (err){
        console.error(err)
    }
}
export async function addArticle(article:ArticleType){
    try{
        await mongoose.connect(getURI())
        let made = await Article.create(article)
        return true
    }catch (err){
        console.error(err)
        return false
    }
}