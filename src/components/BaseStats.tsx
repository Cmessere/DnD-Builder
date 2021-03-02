import Typography from "@material-ui/core/Typography";
import React from "react";
import { BaseStatsProps } from "../services/types";
import { Subtitle } from "../utilities/Subtitle";
import { IconButton } from "@material-ui/core";
import CasinoIcon from '@material-ui/icons/Casino';

export const BaseStats = ({ AC, HP, hitDice, speed, constitutionModifier }: BaseStatsProps) => {

    const speedArray = Object.entries(speed);
    const [randomHP, setRandomHP] = React.useState(undefined as unknown as number);

    const rollHitDice = () => {
        const [rollTimes, diceType] = hitDice.split("d").map(Number);
        const randomHP = calculateRandomHP(rollTimes, diceType, constitutionModifier);
        setRandomHP(randomHP);
    };

    return (
        <div className="Monster-Sheet-BaseStats">
            <div className="Monster-Sheet-div">
                <Subtitle label={< >Armor Class</ >} />
                <Typography style={{ marginLeft: "1vw" }} variant="subtitle2">{AC}</Typography>
            </div>
            <div className="Monster-Sheet-div">
                <Subtitle label={< >Hit Points</ >} />
                <Typography style={{ marginLeft: "1vw" }} variant="subtitle2">{HP} {hitDice}</Typography>
                <IconButton color="secondary" aria-label="roll-hit-dices" onClick={rollHitDice}>
                    <CasinoIcon />
                </IconButton>
                <Typography color="secondary" style={{ marginLeft: "1vw" }} variant="subtitle2"> {randomHP}</Typography>
            </div>
            <div className="Monster-Sheet-div">
                <Subtitle label={< >Speed</ >} />
                <Typography style={{ marginLeft: "1vw" }} variant="subtitle2">{speedArray.map(value => value[0] + " " + value[1])}</Typography>
            </div>
        </div>
    );
};

const calculateRandomHP = (rolls: number, dice: number, modifier: number): number => {
    let count = 1;
    for (let i = 0; i < rolls; i++) {
        let currentRolls = Math.floor(Math.random() * dice) + 1;
        count += currentRolls + modifier;
    }
    return count;
};