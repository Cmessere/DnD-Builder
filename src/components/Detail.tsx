import React from "react"
import { useParams } from "react-router-dom"
import { MonsterDetail } from "../services/ApiClient"
import { DetailParams, MonsterSheet } from "../services/types"
import { AbilityPoints } from "./AbilityPoints"
import { ActionsComponent, LegendaryActionsComponent } from "./ActionsComponent"
import { AdditionalStats } from "./AdditionalStats"
import { BaseStats } from "./BaseStats"
import { DamageComponent } from "./DamageComponent"
import { ErrorComponent } from "./ErrorComponent"
import { Loading } from "./Loading"
import { MonsterSheetHeader } from "./MonsterSheetHeader"
import { ProficienciesComponent } from "./ProficienciesComponent"
import { SpecialAbilitiesComponent } from "./SpecialAbilitiesComponent"
import "./styles/Detail.css"

export const Detail = () => {
    const { id }:DetailParams = useParams()
    const [monsterData, setMonsterData] = React.useState(undefined as unknown as MonsterSheet)
    const [error, setError] = React.useState(undefined)

    React.useEffect(() => {
        MonsterDetail(id)
            .then(response => setMonsterData(response.data))
            .catch(error => setError(error))
    }, [id])

    if(error){
        return <ErrorComponent error={error}/>
    }
    else if (monsterData){
        const modifier = Math.floor((monsterData.constitution - 10)/2)
        return(
            <div className="Monster-Sheet-page">

                <div className="Monster-Sheet-title">
                <div className="Monster-Sheet-stats">
                    <MonsterSheetHeader name={monsterData.name} size={monsterData.size} type={monsterData.type} subtype={monsterData.subtype} alignment={monsterData.alignment} />
                    <BaseStats AC={monsterData.armor_class} HP={monsterData.hit_points} hitDice={monsterData.hit_dice} speed={monsterData.speed} constitutionModifier={modifier}/>
                    <AbilityPoints str={monsterData.strength} dex={monsterData.dexterity} con={monsterData.constitution} int={monsterData.intelligence} wis={monsterData.wisdom} cha={monsterData.charisma}/>
                    <ProficienciesComponent proficiencies={monsterData.proficiencies} />
                    <DamageComponent immunities={monsterData.damage_immunities} resistances={monsterData.damage_resistances} vulnerabilities={monsterData.damage_vulnerabilities} conditionsImmunity={monsterData.condition_immunities} />
                    <AdditionalStats senses={monsterData.senses} languages={monsterData.languages} cr={monsterData.challenge_rating} xp={monsterData.xp} />
                    {monsterData.special_abilities && <SpecialAbilitiesComponent abilities={monsterData.special_abilities} />}
                </div>
                <div className="Monster-Sheet-skills">
                    {monsterData.actions && <ActionsComponent actions={monsterData.actions} />}
                    {monsterData.legendary_actions && <LegendaryActionsComponent legendaryActions={monsterData.legendary_actions} />}
                </div>
                </div>
            </div>
        )
    }
    else{
        return <Loading/>
    }
}

