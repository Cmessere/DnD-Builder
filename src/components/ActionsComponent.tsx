import React from "react";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Action, ActionsComponentProps, DamageRoll, LegendaryActionsComponentProps } from "../services/types";
import { Title } from "../utilities/TypographyComponent";
import CasinoIcon from '@material-ui/icons/Casino';

import "./styles/Detail.css"

export const ActionsComponent = ({ actions }: ActionsComponentProps) => {
    return (
        <div className="Action-div">
            <Typography variant="h4" color="primary">Actions</Typography>
            {actions.map(a => <div key={a.name}><RenderActionComponent action={a} /></div>)}
        </div>
    );
};

export const LegendaryActionsComponent = ({ legendaryActions }: LegendaryActionsComponentProps) => {
    return (
        <div className="Action-div">
            <Typography variant="h4" color="primary">Legendary Actions</Typography>
            {legendaryActions.map(a => <div key={a.name}><RenderActionComponent action={a} /></div>)}
        </div>
    );
};

const RenderActionComponent = ({ action }: any) => {
    const [rolledValue, setRolledValue] = React.useState(undefined as unknown as DamageRoll)

    return (
        <div className="Action-string-div">
            <div className="Action-description-div">
                <div className="Action-inner-div">
                    <Title label={<>{action.name}.</>} />
                </div>
                <div className="Action-inner-div">
                    {action.attack_bonus !== undefined &&
                        <IconButton color="secondary" aria-label="roll-hit-dices" onClick={() => rollAction(action, setRolledValue)}>
                            <CasinoIcon />
                        </IconButton>
                    }
                    {rolledValue && <Typography color="secondary" style={{ marginLeft: "1vw" }} variant="subtitle2">{rolledValue.hit} to hit, {rolledValue.damage} </Typography>}
                    {rolledValue && rolledValue.critical && <Typography color="secondary" style={{ marginLeft: "1vw" }} variant="subtitle2">CRITICAL HIT!</Typography>}
                </div>
            </div>
            <div>
                <Typography variant="caption" >{action.desc}</Typography>
            </div>
        </div>
    );
};

const rollAction = (action: Action, setRolledValue: React.Dispatch<React.SetStateAction<DamageRoll>>) => {
    const d20Roll = Math.floor(Math.random() * 20) + 1

    let critical = false
    if(d20Roll === 20)
        critical = true

    const hitRoll = d20Roll  + action.attack_bonus!
    const damageValues = action.damage![0]
    const [times, dice] = damageValues.damage_dice.split('d')
    const [parsedDice, modifier] = getModifierValue(dice)
    const damageRoll = rollDamage(parseInt(times), parsedDice, modifier, critical).toString() + " " + damageValues.damage_type.name
    


    setRolledValue({ hit: hitRoll, damage: damageRoll, critical: critical})
}

const getModifierValue = (value: string) => {
    let modifier
    let dice

    if (value.includes("+")) {
        [dice, modifier] = value.split("+")
    }
    else if (value.includes("-")) {
        [dice, modifier] = value.split("-")
        modifier = -modifier
    }
    else {
        dice = value
    }
    return [dice, modifier]
}

const rollDamage = (times: number, dice: any, bonus: any, critical:boolean): number => {
    let count = 0

    for (let i = 0; i < times; i++) {
        count += Math.floor(Math.random() * dice) + 1
    }

    if(critical){
        count *= 2
    }

    if(bonus){
        count += parseInt(bonus)
    }

    return count
}