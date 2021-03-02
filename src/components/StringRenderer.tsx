import React from "react";
import Typography from "@material-ui/core/Typography";
import { StringRenderProps } from "../services/types";

export const StringRenderer = ({ label, values }: StringRenderProps) => {
    return (
        <div className="string-div">
            <Typography color="primary" variant="subtitle1">{label} &nbsp;</Typography>{values.map(v => <Typography variant="subtitle2" key={v}>{v} &nbsp;</Typography>)}
        </div>
    );
};
