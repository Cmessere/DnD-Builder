import { StringRenderer } from "./StringRenderer";
import { ProficienciesBonus, ProficienciesComponentProps } from "../services/types";
import "./styles/ProficienciesComponent.css"

export const ProficienciesComponent = ({ proficiencies }: ProficienciesComponentProps) => {

    let { savingThrows, skills }: { savingThrows: string[]; skills: string[]; } = separateSavingThrowsFromSkills(proficiencies);

    return (
        <div className="proficiencies-saves-div">
            <div className="proficiencies-div">
                {savingThrows.length > 0 && <StringRenderer label={"Saving Throws: "} values={savingThrows} />}
            </div>
            <div className="proficiencies-div">
                {skills.length > 0 && <StringRenderer label={"Skills: "} values={skills} />}
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

