import DownloadButton from "@/components/DownloadButton";
import {WidgetType} from "@/components/dev/widgets/WidgetsPanel";

export default function WidgetDisplaySwitch({widget}:Readonly<{ widget:WidgetType }>){
    return(
        <>
            {widget.component==="releaseDownload"?
                <>
                    <div className={'flex justify-between'}>
                        <p>Owner: <br/> {widget.values["owner"]}</p>
                        <p>Repository: <br/> {widget.values["repository"]}</p>
                    </div>
                    <DownloadButton repository={widget.values['repository']} owner={widget.values['owner']} />
                </>
                :
                <></>
            }
        </>
    )
}