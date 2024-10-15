'use server'
import HeadBar from "@/components/layout/HeadBar";
import Article from "@/components/articles/Article";
import ScrollBar from "@/components/layout/ScrollBar";
import ArticleLink from "@/components/articles/ArticleLink";
import ScrollBarArticles from "@/components/articles/ScrollBarArticles";

export default async function Home() {

    return(
        < >
            <div className={'grid select-none'} id={'home'}>
                <ScrollBar>
                    <ScrollBarArticles/>
                </ScrollBar>
                {/*<div>*/}
                {/*    <div className={'text-center grid'}>*/}


                {/*        <button className={'text-blue-900 text-2xl'} onClick={handleClick} id={'0'}>*/}
                {/*            Jeremy1*/}
                {/*        </button>*/}
                {/*        <button className={'text-blue-900 text-2xl'} onClick={handleClick} id={'1'}>*/}
                {/*            Jeremy2*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

            {/*<div className={'my-8 w-[600px] grid justify-center p-10 bg-gradient-radial from-amber-100 to-transparent to-60% group'}>*/}
            {/*    <h2 className={'text-4xl text-center opacity-5 font-bold text-amber-100 group-hover:opacity-100 transition-opacity duration-500 ease-out m-2'}>YYC Hacks 2024</h2>*/}
            {/*    <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-500 ease-out my-8'} src={'/yychacks.jpg'} alt={"YYCHacks 2024 YYC-iosk group photo"}  height={'20'} width={'500'}  draggable={false} />*/}
            {/*    <p className={'w-[500px] text-center'}></p>*/}
            {/*</div>*/}
            {/*<div className={'my-8 w-[600px] grid justify-center p-10 bg-gradient-radial from-amber-100 to-transparent to-60% group'}>*/}
            {/*    <h2 className={'text-4xl text-center opacity-5 font-bold text-amber-100 group-hover:opacity-100 transition-opacity duration-500 ease-out m-2'}>YYC Hacks 2024</h2>*/}
            {/*    <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-500 ease-out my-8'} src={'/yychacks.jpg'} alt={"YYCHacks 2024 YYC-iosk group photo"}  height={0} width={0} sizes={'100px'} draggable={false} />*/}
            {/*    <p className={'w-[500px] text-center'}></p>*/}
            {/*</div>*/}

        </>
    );
}
