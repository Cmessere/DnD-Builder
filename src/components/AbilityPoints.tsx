import React from "react";
import { AbilityPointsProps } from "../services/types";
import "./styles/AbilityPoints.css"

export const AbilityPoints = ({ str, dex, con, int, wis, cha }: AbilityPointsProps) => {

    const abilities = [["STR", str], ["DEX", dex], ["CON", con], ["INT", int], ["WIS", wis], ["CHA", cha]];

    return (
        <div className="Ability-Points">
            {abilities.map(ability => <AbilityLabel label={ability[0]} value={ability[1]} />)}
        </div>
    );
};
const AbilityLabel = ({ label, value }: any) => {
    const modifier = Math.floor((value - 10) / 2);

    return (
        <div className="Abilities-div">
            <p className="Abilities-title"><b>{label}</b></p>
            <p className="Abilities-paragraph">{value} ({modifier})</p>
        </div>
    );
};
