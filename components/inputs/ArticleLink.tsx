'use client'
export default function ArticleLink({id,value}:Readonly<{ id?: string,value?:string }>){
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        let scroller = document.getElementById('scrollBar')
        let elem = document.getElementById(`${e.currentTarget.id.split(':')[1]}`)
        if(scroller && elem){
            console.log(window.innerWidth)
            if(window.innerWidth>=768){
                scroller.scrollLeft = elem.offsetLeft

            }else{
                window.scrollTo(elem.offsetLeft,elem.offsetTop+80)
                // window.location.hash=`H:${e.currentTarget.id.split(':')[1]}`
            }
            console.log(scroller.scrollTop, elem.offsetTop)
            // scroller.scrollTop = elem.offsetTop
        }
    }
    return(
        <button id={id} type={"button"} className={'hover:underline '} onClick={handleClick}>
            <h4>
                {value&&value}
            </h4>
        </button>
    )
}