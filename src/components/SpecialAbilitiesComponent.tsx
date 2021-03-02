import React from "react";
import { Typography } from "@material-ui/core";
import { SpecialAbilities, SpecialAbilitiesProps } from "../services/types";
import { Title } from "../utilities/TypographyComponent";

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
            {usage && <><Title label={<>{name} ({usage.times}/{usage.type}):</>}/><Typography variant="subtitle1">{desc}</Typography></>}
            {!usage && <><Title label={<>{name}:</>} /><Typography style={{display:"flex",flexWrap: "wrap"}} variant="subtitle1">{desc}</Typography></>}
        </div>
    );
};
