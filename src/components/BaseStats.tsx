import React from "react";
import { BaseStatsProps } from "../services/types";

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
            <p><b>Armor Class</b> {AC}</p>
            <p><b>Hit Points</b> {HP} {hitDice} <button onClick={rollHitDice}>Randomize</button> {randomHP}</p>
            <p><b>Speed</b> {speedArray.map(value => value[0] + " " + value[1] + ", ")}</p>
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
