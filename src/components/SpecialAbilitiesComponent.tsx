import React from "react";
import { SpecialAbilities, SpecialAbilitiesProps } from "../services/types";

export const SpecialAbilitiesComponent = ({ abilities }: SpecialAbilitiesProps) => {
    return (
        <div>
            {abilities.length > 0 && abilities.map((d: any) => <div key={d.name}><RenderSpecialAbility name={d.name} desc={d.desc} usage={d.usage} /></div>)}
        </div>
    );
};
const RenderSpecialAbility = ({ name, desc, usage }: SpecialAbilities) => {
    return (
        <div>
            {usage && <p><b>{name} ({usage.times}/{usage.type})</b>: {desc}</p>}
            {!usage && <p><b>{name}</b>: {desc}</p>}
        </div>
    );
};
