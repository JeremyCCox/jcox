import DownloadButton from "@/components/DownloadButton";
import {WidgetType} from "@/components/dev/widgets/WidgetsPanel";

export default function WidgetDisplaySwitch({widget}:Readonly<{ widget:WidgetType }>){
    return(
        <div>
            {widget.component==="releaseDownload"?
                <>
                    {widget.values["owner"]}
                    {widget.values["repository"]}
                    <DownloadButton repository={widget.values['repository']} owner={widget.values['owner']} />
                </>
                :
                <></>
            }
        </div>
    )
}