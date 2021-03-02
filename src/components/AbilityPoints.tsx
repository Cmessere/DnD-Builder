import { Typography } from "@material-ui/core";
import React from "react";
import { AbilityPointsProps } from "../services/types";
import { Divider } from "./Divider";
import "./styles/AbilityPoints.css"

export const AbilityPoints = ({ str, dex, con, int, wis, cha }: AbilityPointsProps) => {

    const abilities = [["STR", str], ["DEX", dex], ["CON", con], ["INT", int], ["WIS", wis], ["CHA", cha]];

    return (
        <>
        <div className="Ability-Points" >
            {abilities.map(ability => <div className="Ability-Points-div" key={ability[0]}><AbilityLabel label={ability[0]} value={ability[1]} /></div>)}
        </div>
        <Divider/>
        </>
    );
};
const AbilityLabel = ({ label, value }: any) => {
    const modifier = Math.floor((value - 10) / 2);

    return (
        <div className="Abilities-div">
            <Typography variant="subtitle1" className="Abilities-title"><b>{label}</b></Typography>
            {modifier > 0 &&  <Typography color="secondary" variant="caption" className="Abilities-paragraph">{value} (+{modifier})</Typography>}
            {modifier <= 0 &&  <Typography color="secondary" variant="caption" className="Abilities-paragraph">{value} ({modifier})</Typography>}
        </div>
    );
};
