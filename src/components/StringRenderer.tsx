import { StringRenderProps } from "../services/types";

export const StringRenderer = ({ label, values }: StringRenderProps) => {
    return (
        <div className="string-div">
            <p><b>{label} &nbsp;</b></p>{values.map(v => <p key={v}>{v} &nbsp;</p>)}
        </div>
    );
};
