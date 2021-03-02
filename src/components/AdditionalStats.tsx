import React from "react";
import { Typography } from "@material-ui/core";
import { AdditionalStatsProps } from "../services/types";
import { Subtitle } from "../utilities/TypographyComponent";
import { StringRenderer } from "./StringRenderer";
import "./styles/Detail.css"
import { Divider } from "./Divider";

export const AdditionalStats = ({ senses, languages, cr, xp }: AdditionalStatsProps) => {
    const prettySenses = prettifySenses(senses);
    const proficiencyBonus = calculateProficiencyBonus(cr)
    return (
        <div>
            <div className="string-div">
                {prettySenses.length > 0 && <StringRenderer label={"Senses: "} values={prettySenses} />}
            </div>
            <div className="string-div">
                {languages.length > 0 && <><Subtitle label={<>Languages &nbsp;</>}/> <Typography variant="subtitle2">{languages}</Typography></>}
            </div>
            <div className="two-column-div">
                <div className="additional-stat-div">
                    <Subtitle label={<>Challenge &nbsp;</>}/><Typography variant="subtitle2">{cr} ({xp} XP) </Typography>
                </div>
                <div className="additional-stat-div">
                    <Subtitle label={<>Proficiency Bonus &nbsp;</>}/><Typography variant="subtitle2">+{proficiencyBonus}</Typography>
                </div>
            </div>
            <Divider/>
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

const calculateProficiencyBonus = (difficultyRating:number) => {
    switch(true){
        case (difficultyRating >= 0 && difficultyRating < 5):
            return 2
        case (difficultyRating >= 5 && difficultyRating < 9):
            return 3
        case (difficultyRating >= 9 && difficultyRating < 13):
            return 4
        case (difficultyRating >= 13 && difficultyRating < 17):
            return 5
        case (difficultyRating >= 17 && difficultyRating < 21):
            return 6
        case (difficultyRating >= 21 && difficultyRating < 25):
            return 7
        case (difficultyRating >= 25 && difficultyRating < 29):
            return 8
        case (difficultyRating >= 29 && difficultyRating < 30):
            return 9
    }
} 