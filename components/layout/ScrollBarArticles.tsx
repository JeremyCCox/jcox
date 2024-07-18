'use client'
import Article from "@/components/layout/Article";
import ArticleLink from "@/components/inputs/articles/ArticleLink";
import {useQuery, UseQueryResult} from "react-query";
import {ArticleType, getArticles} from "@/app/lib/ArticleServices";
import React, {useEffect} from "react";
import Loading from "@/components/layout/Loading";
import QueryError from "@/components/query/QueryError";
import DOMPurify from 'dompurify'

export default function ScrollBarArticles(){
    const articleQuery:UseQueryResult<[ArticleType]> = useQuery('articles',async () => {
       let articles = JSON.parse(await getArticles());
       if(articles.error){
           throw new Error(articles.error.message)
       }
        return articles.data
    });

    useEffect(()=>{
        console.log(articleQuery)
    },[articleQuery])



    return(
        <>
            <Article isHome={true}>
                <div className={'grid min-h-[40vh] text-amber-100'}>
                    <h3 className={'text-center'}>
                        Jeremy Cox
                    </h3>
                    <ArticleLink id={'link:1'} underline={true} value={"About Me"}>

                    </ArticleLink>
                    <h3>
                        My Projects
                    </h3>
                    <ul>
                        <li>
                            <ArticleLink id={'link:3'} value={'Atzin - Internet management'}/>
                        </li>
                        <li>
                            <ArticleLink id={'link:4'} value={'WRAP Desktop'}/>
                        </li>
                        <li>
                            <ArticleLink id={'link:5'} value={'wrapaudit.com'}/>
                        </li>
                        <li>
                            <ArticleLink id={'link:2'} value={"YYC Hacks 2024"}/>
                        </li>
                        <li>
                            <ArticleLink id={'link:6'} value={'Raizapalooza.com'}/>
                        </li>
                        <li>
                            <ArticleLink id={'link:7'} value={'Eco elders email campaign'}/>
                        </li>
                    </ul>
                    {/*<div className={'w-3/4 left-0'}>*/}
                    {/*    <h3 className={'text-right'}>*/}
                    {/*        External Links*/}
                    {/*    </h3>*/}
                    {/*    <ul className={'text-right'}>*/}
                    {/*        <li>*/}
                    {/*            <a href={'https://atzin.org'}>*/}
                    {/*                atzin.org*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </Article>
            {articleQuery.isLoading?
                <Article>
                    <Loading/>
                </Article>
                :
                articleQuery.isError?
                    <Article>
                        <QueryError>Something went wrong</QueryError>
                    </Article>
                    :
                    articleQuery.data?
                        (articleQuery.data).map(article=>{
                            return (
                                <Article key={article._id} title={article.title} article={article}/>
                            )
                        })
                        :
                        <></>
            }

            <Article id={'1'} imgSrc={'/JeremySmiling.jpg'} imgAlt={"Jeremy Cox"}>
                <p className={' text-center font-normal'}>
                    I am a passionate DIY - everything developer, with experience designing, migrating and implementing software solutions for businesses, individuals and organizations.
                </p>

            </Article>
            <Article id={'2'} imgSrc={'/yychacks.jpg'} imgAlt={"YYCHacks YYCiosk group"} title={"YYC Hacks 2024"}>
                {/*<h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>*/}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar dictum diam eu lacinia. Curabitur a vulputate urna. Etiam pulvinar libero nisl. Praesent luctus dui lacus, eget varius turpis dictum sit amet. Nunc ut justo vulputate, mollis dolor sed, tincidunt libero. Cras vel risus quis dolor volutpat gravida eu ut leo. Ut bibendum in mauris sed rhoncus. Pellentesque dignissim, sem nec finibus gravida, neque quam elementum urna, eget porta nibh tortor at ante. Donec vitae odio elementum, venenatis elit ac, porta ante. Etiam dictum consequat ante, ut euismod arcu auctor non. Cras nec ullamcorper orci. Aenean mollis urna a efficitur ornare. Nam ac fermentum turpis. Maecenas ut condimentum nibh, in posuere quam.

                    Nunc a arcu semper, sagittis odio quis, venenatis nunc. Maecenas lacus nisi, laoreet sit amet nisi quis, posuere vulputate mi. Integer sed orci ut libero feugiat accumsan quis quis nunc. Ut et facilisis ex, nec feugiat lacus. In id dui nibh. Sed eget sem egestas, malesuada orci a, egestas diam. In elementum, ipsum vel molestie dapibus, lorem orci mattis massa, eget ullamcorper nibh purus sit amet tellus. Integer eu enim ac justo tincidunt fringilla.
                </p>
            </Article>
            <Article id={'5'} title={"wrapaudit.com"}>
            </Article>
        </>
    )
}