import { MonsterSheetHeaderProps } from "../services/types";

export const MonsterSheetHeader = ({ name, size, type, subtype, alignment }: MonsterSheetHeaderProps) => {
    return (
        <div className="Monster-Sheet-header">
            <h1>{name}</h1>
            <div className="Monster-sheet-description">
                <p className="Monster-sheet-description-paragraph">{size} {type} ({subtype}), {alignment}</p>
            </div>
        </div>
    );
};
