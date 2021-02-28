import { DamageComponentProps } from "../services/types";
import { DamageRenderComponentProps } from "../services/types";
import "./styles/DamageComponent.css"

export const DamageComponent = ({ immunities, resistances, vulnerabilities }: DamageComponentProps) => {
    return (
        <div>
            {immunities.length > 0 && <DamageRenderComponent label={"Damage Immunities: "} values={immunities} />}
            {resistances.length > 0 && <DamageRenderComponent label={"Damage Resistances: "} values={resistances} />}
            {vulnerabilities.length > 0 && <DamageRenderComponent label={"Damage Vulnerabilities: "} values={vulnerabilities} />}
        </div>
    );
};
const DamageRenderComponent = ({ label, values }: DamageRenderComponentProps) => {
    return (
        <div className="damageComponent-div">
            <p><b>{label} &nbsp;</b></p>{values.map(v => <p key={v}>{v}&nbsp;</p>)}
        </div>
    );
};
