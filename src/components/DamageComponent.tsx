import React from "react";
import { DamageComponentProps } from "../services/types";
import { StringRenderer } from "./StringRenderer";
import "./styles/DamageComponent.css"

export const DamageComponent = ({ immunities, resistances, vulnerabilities }: DamageComponentProps) => {
    return (
        <div>
            {immunities.length > 0 && <StringRenderer label={"Damage Immunities: "} values={immunities} />}
            {resistances.length > 0 && <StringRenderer label={"Damage Resistances: "} values={resistances} />}
            {vulnerabilities.length > 0 && <StringRenderer label={"Damage Vulnerabilities: "} values={vulnerabilities} />}
        </div>
    );
};
