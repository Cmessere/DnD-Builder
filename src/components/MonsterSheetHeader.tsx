import { Typography } from "@material-ui/core";
import React from "react";
import { MonsterSheetHeaderProps } from "../services/types";
import { Divider } from "./Divider";

export const MonsterSheetHeader = ({ name, size, type, subtype, alignment }: MonsterSheetHeaderProps) => {
    
    const generateParagraph = () => {
        if(subtype) 
            return (<Typography variant="subtitle2" className="Monster-sheet-description-paragraph">{size} {type} ({subtype}), {alignment}</Typography>)
        else 
            return (<Typography variant="subtitle2" className="Monster-sheet-description-paragraph">{size} {type}, {alignment}</Typography>)
    }
    
    return (
        <div className="Monster-Sheet-header">
            <Typography variant="h3" color="primary">{name}</Typography>
            <div className="Monster-sheet-description">
                {generateParagraph()}
            </div>
            <Divider/>
        </div>
    );
};

