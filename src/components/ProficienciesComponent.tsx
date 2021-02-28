import { ProficienciesBonus, ProficienciesComponentProps } from "../services/types";
import "./styles/ProficienciesComponent.css"

export const ProficienciesComponent = ({ proficiencies }: ProficienciesComponentProps) => {

    let { savingThrows, skills }: { savingThrows: string[]; skills: string[]; } = separateSavingThrowsFromSkills(proficiencies);

    return (
        <div>
            <div className="ProficienciesComponent-div">
                <p><b>Saving Throws: &nbsp;</b></p>{savingThrows.map(t => <p key={t}> {t} &nbsp;</p>)}
            </div>
            <div className="ProficienciesComponent-div">
                <p><b>Skills: &nbsp;</b></p>{skills.map(s => <p key={s}> {s} &nbsp;</p>)}
            </div>
        </div>
    );
};

function separateSavingThrowsFromSkills(proficiencies: ProficienciesBonus[]) {
    let savingThrows: string[] = [];
    let skills: string[] = [];

    proficiencies.forEach(p => {
        if (p.proficiency.name.includes("Saving Throw: ")) {
            const obj = p.proficiency.name.replace("Saving Throw: ", '') + "+" + p.value;
            savingThrows.push(obj);
        }
        else {
            const obj = p.proficiency.name.replace("Skill: ", '') + "+" + p.value;
            skills.push(obj);
        }
    });
    return { savingThrows, skills };
}

