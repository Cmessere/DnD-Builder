import React from "react";
import { AdditionalStatsProps } from "../services/types";
import { StringRenderer } from "./StringRenderer";
import "./styles/Detail.css"

export const AdditionalStats = ({ senses, languages, cr, xp }: AdditionalStatsProps) => {
    const prettySenses = prettifySenses(senses);
    return (
        <div>
            <div className="string-div">
                {prettySenses.length > 0 && <StringRenderer label={"Senses: "} values={prettySenses} />}
            </div>
            <div className="string-div">
                <p><b>Languages: &nbsp;</b></p><p>{languages}</p>
            </div>
            <div className="two-column-div">
                <div>
                    <p><b>Challenge </b>{cr} ({xp} XP) </p>
                </div>
                <div>
                    <p><b>Proficiency Bonus </b> </p>
                </div>
            </div>
        </div>
    );
};

const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const prettifySenses = (senses: any[]) => {
    const entries = Object.entries(senses);
    return entries.map(e => capitalizaAndRemoveHyphen(e[0] + " " + e[1]));
};

function capitalizaAndRemoveHyphen(label: string) {
    return label.split("_").map(s => capitalize(s)).join(" ");
}
