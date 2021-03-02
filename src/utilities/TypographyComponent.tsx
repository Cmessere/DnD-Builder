import Typography from "@material-ui/core/Typography";
import React from "react";

export const Subtitle = ({ label }: any) => {
    return <Typography color="primary" variant="subtitle1">{label}</Typography>;
};

export const Title = ({ label }: any) => {
    return <Typography color="primary" variant="h5">{label}</Typography>;
};
