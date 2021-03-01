import React from "react";
import { Action, ActionsComponentProps, LegendaryActionsComponentProps } from "../services/types";
import "./styles/Detail.css"

export const ActionsComponent = ({ actions }: ActionsComponentProps) => {
    return (
        <div>
            <h2>Actions</h2>
            {actions.map(a => <div key={a.name}><RenderActionComponent action={a} /></div>)}
        </div>
    );
};

export const LegendaryActionsComponent = ({ legendaryActions }: LegendaryActionsComponentProps) => {
    return (
        <div>
            <h2>Legendary Actions</h2>
            {legendaryActions.map(a => <div key={a.name}><RenderActionComponent action={a} /></div>)}
        </div>
    );
};

type DamageRoll = {
    hit: number,
    damage: string
}

const RenderActionComponent = ({action}:any) => {
    const [rolledValue, setRolledValue] = React.useState(undefined as unknown as DamageRoll)

    return (
        <div className="string-div">
            <p><b>{action.name}.</b> {action.desc}</p>
            {action.attack_bonus && <button onClick={() => rollAction(action, setRolledValue)}>Roll Damage</button>}
            {rolledValue && <p>{rolledValue.hit} to hit, {rolledValue.damage} </p>}
        </div>
    );
};

const rollAction = (action: Action, setRolledValue: React.Dispatch<React.SetStateAction<DamageRoll>>) => {
    const hitRoll = Math.floor(Math.random() * 20) + action.attack_bonus! + 1;
    const damageValues = action.damage![0]
    const [times, dice, modifier] = damageValues.damage_dice.split('d').join(',').split('+').join(',').split(',').map(Number); //splits roll times, dice type and modifier e.g. (2d8+8)
    
    const damageRoll = rollDamage(times, dice, modifier).toString() + " " + damageValues.damage_type.name
    setRolledValue({hit: hitRoll, damage: damageRoll })
}

const rollDamage = (times:number, dice:number, bonus:number):number => {
    let count = bonus
    for(let i = 0; i < times; i++){
        count += Math.floor(Math.random() * dice) + 1
    }
    return count
}