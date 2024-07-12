import HeadBar from "@/components/layout/HeadBar";
import Article from "@/components/layout/Article";
import ScrollBar from "@/components/layout/ScrollBar";
import ArticleLink from "@/components/inputs/ArticleLink";

export default function Home() {

    return(
        < >
            <div className={'grid select-none'} id={'home'}>
                <HeadBar/>
                <ScrollBar>
                    <Article isHome={true}>
                        <div className={'grid min-h-[40vh] text-amber-100'}>
                            <h3 className={'text-center'}>
                                Jeremy Cox
                            </h3>
                            <ArticleLink id={'link:1'} value={"About Me"}/>
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
