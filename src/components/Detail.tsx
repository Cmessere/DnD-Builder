import React from "react"
import { useParams } from "react-router-dom"
import { MonsterDetail } from "../services/ApiClient"
import { BaseStatsProps, DetailParams, MonsterSheet } from "../services/types"
import { ErrorComponent } from "./ErrorComponent"
import { Loading } from "./Loading"
import { MonsterSheetHeader } from "./MonsterSheetHeader"

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
                <MonsterSheetHeader name={monsterData.name} size={monsterData.size} type={monsterData.type} subtype={monsterData.subtype} alignment={monsterData.alignment} />
                <BaseStats AC={monsterData.armor_class} HP={monsterData.hit_points} hitDice={monsterData.hit_dice} speed={monsterData.speed} constitutionModifier={modifier}/>
            </div>
        )
    }
    else{
        return <Loading/>
    }
}

const BaseStats = ({AC, HP, hitDice, speed, constitutionModifier}: BaseStatsProps) => {

    const speedArray = Object.entries(speed)
    const [randomHP, setRandomHP] = React.useState(undefined as unknown as number)

    const rollHitDice = () => {
        const [rollTimes, diceType] = hitDice.split("d").map(Number)
        const randomHP = calculateRandomHP(rollTimes, diceType, constitutionModifier) 
        setRandomHP(randomHP)
    }

    return(
        <div className="Monster-Sheet-BaseStats">
            <p><b>Armor Class</b> {AC}</p>
            <p><b>Hit Points</b> {HP} {hitDice} <button onClick={rollHitDice}>Randomize</button> {randomHP}</p>
            <p><b>Speed</b> {speedArray.map(value => value[0] + " " + value[1] + ", ")}</p>
        </div>
    )
}

const calculateRandomHP = (rolls:number, dice:number, modifier:number): number => {
    let count = 1
    for(let i = 0; i < rolls; i++){
        let currentRolls = Math.floor(Math.random() * dice ) + 1
        count += currentRolls + modifier
    }
    return count
}