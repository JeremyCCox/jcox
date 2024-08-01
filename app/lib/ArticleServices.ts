'use server'

import mongoose from "mongoose";
import Article from "@/models/Article";
import {ObjectId} from 'mongodb'

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
    description?:string,
    imgSrc?:string,
    imgAlt?:string,
    imgDesc?:string,
    category?:string,
    bodyHTML?:string,
    template?:string,
    creationDate?:string,
    lastEditDate?:string,
}
interface ReturnValues{
    error?:string,
    data?:any,
    success?:boolean
}
const cleanArticle = (article:any) =>{
    if(!article._id){
        let oId = new ObjectId()
        return {
            ...article._doc,
            _id:oId.toString(),
        }
    }
    return {
        ...article._doc,
        _id:article._id.toString(),
    }
}
export async function getArticles(){
    try{
        await mongoose.connect(getURI())
        let articles= await Article.find({})
        return(JSON.stringify({data:articles.map(article=>{
            return cleanArticle(article)
        })}))
    }catch (err){
        console.error(err)
        return(JSON.stringify({error:"Something went wrong"}))
    }
}
export async function getArticleTitles(){
    try{
        await mongoose.connect(getURI())
        let articles= await Article.find({}).select('title description')
        return(JSON.stringify({data:articles.map(article=>{
                return cleanArticle(article)
            })}))
    }catch (err){
        console.error(err)
        return(JSON.stringify({error:"Something went wrong"}))
    }
}
export async function getArticle(articleId:string){
    console.log("Get Article", Date().toString())
    try{
        await mongoose.connect(getURI())
        let article= await Article.find({_id:articleId})
        if(article.length < 1){
            return(JSON.stringify({error:"Article not found!"}))
        }
        return JSON.stringify(cleanArticle(article[0]))
    }catch (err){
        console.error(err)
        return(JSON.stringify({error:"Something else went wrong"}))
    }
}
export async function addArticle(article:ArticleType){
    try{
        await mongoose.connect(getURI())
        console.log("Article",article)
        return JSON.stringify({data:{_id:(await Article.create(article))._id}})
    }catch (err){
        // console.error(err)
        // @ts-ignore
        return JSON.stringify({error:err.message})
    }
}
export async function updateArticle(article:ArticleType){
    console.log("Update Article", Date().toString())
    console.log(article)
    try{
        await mongoose.connect(getURI())
        // let made = await Article.in(article)
        let updater = await Article.findOneAndUpdate(
            {"_id":article._id},
                article
            )
        console.log(updater)
        return {success:true}
    }catch (err){
        console.error(err)
        return {success:false}
    }
}