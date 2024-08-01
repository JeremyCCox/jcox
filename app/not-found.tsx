export default function NotFound(){
    return(
        <div className={'text-center my-[40vh]'}>
            <h1>Uh OH! (404)</h1>
            <h2>
                This page could not be found!
            </h2>
            <h3>
                Take me <a href={'/'} className={'underline text-blue-300'}>Back!</a>
            </h3>
        </div>
        )
}