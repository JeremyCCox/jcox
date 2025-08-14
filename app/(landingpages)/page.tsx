'use server'
import ScrollBar from "@/components/layout/ScrollBar";
import ScrollBarArticles from "@/components/articles/ScrollBarArticles";

export default async function Home() {

    return(
        < >
            <div className={'grid select-none'} id={'home'}>
                <ScrollBar>
                    <ScrollBarArticles/>
                </ScrollBar>
            </div>
        </>
    );
}
