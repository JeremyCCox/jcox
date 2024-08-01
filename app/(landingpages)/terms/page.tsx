export default function Page(){
    return(
        <div className={'border-2 min-h-[80vh] m-16 text-center '}>
            <h2 className={'w-full'}>
                Land Acknowledgement
            </h2>
            <p className={'m-2 p-2'}>
                This website is hosted on Treaty Seven land, Represented by; * Siksika (Blackfoot), Kainai (Blood), Piikani (Peigan), Tsuut’ina (Sarcee), and Stoney-Nakoda including the Chiniki, Bearspaw, and Wesley First Nations.
            </p>
            <h2>Terms, Conditions</h2>
            <p className={'m-2 p-2'}>
                By accessing this site, you acknowledge the following:
            </p>

            <p className={'m-2 p-2'}>
                You have accessed this site on your own will, and are able to leave at any time
            </p>

            <p className={'m-2 p-2'}>
                You are entitled to disagree with any content or beliefs held on this site, but have no right to pursue legal action nor harass the author(s) of the content on this site, and are voiding your right to legal action by continuing to access this site.
            </p>
            <p className={'m-2 p-2'}>
                You will not access this site for malicious purposes, or interact with these services in any unlawful manner.
            </p>
            <h2>Thanks to:</h2>
            <ul className={'text-amber-100'}>
                <li>
                   * The University of Calgary, for providing a list of treaty nations in their land acknowledgement: <a className={'underline text-blue-300'} href={"https://ucalgary.ca/news/treaty-7-and-land-acknowledgements-settlers-part-1"}>ucalgary.ca/news/treaty-7-and-land-acknowledgements-settlers-part-1</a>
                </li>
                <li>
                    <a className={'text-blue-300 underline'} href={"https://hub.docker.com/r/nginxproxy/nginx-proxy"}>nginx-proxy</a> for their streamlined nginx Docker automation!
                </li>
            </ul>
            <h2 className={'m-8'}><a className={'text-blue-300 underline'} href={'/'}>Take me back to the main page!</a></h2>
        </div>
    )
}