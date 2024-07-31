import { PulseLoader } from "react-spinners";
import "./Spinner.css";
import { LoadingProps } from "../../types/types";


export const SpinnerLoading = (props:LoadingProps) => {
    return(
    <>
        <div id="loading-spinner">
            <PulseLoader
                color={props.color}
            />
        </div>
    </>
    )
}