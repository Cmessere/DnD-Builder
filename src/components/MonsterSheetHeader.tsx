import { MonsterSheetHeaderProps } from "../services/types";

export const MonsterSheetHeader = ({ name, size, type, subtype, alignment }: MonsterSheetHeaderProps) => {
    
    const generateParagraph = () => {
        if(subtype) 
            return (<p className="Monster-sheet-description-paragraph">{size} {type} ({subtype}), {alignment}</p>)
        else 
            return (<p className="Monster-sheet-description-paragraph">{size} {type}, {alignment}</p>)
    }
    
    return (
        <div className="Monster-Sheet-header">
            <h1>{name}</h1>
            <div className="Monster-sheet-description">
                {generateParagraph()}
            </div>
        </div>
    );
};

