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
export async function getArticle(articleId:string){
    try{
        await mongoose.connect(getURI())
        let article= await Article.find({_id:articleId})
        return JSON.stringify(cleanArticle(article[0]))
    }catch (err){
        console.error(err)
    }
}
export async function addArticle(article:ArticleType):Promise<ReturnValues>{
    try{
        await mongoose.connect(getURI())
        console.log(article)
        return {data:await Article.create(article)}
    }catch (err){
        // console.error(err)
        // @ts-ignore
        return {error:err.message}
    }
}
export async function updateArticle(article:ArticleType){
    try{
        await mongoose.connect(getURI())
        // let made = await Article.in(article)
        return {success:true}
    }catch (err){
        console.error(err)
        return {success:false}
    }
}