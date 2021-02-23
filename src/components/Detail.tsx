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
            .then(response => {
                console.log("response ", response.data)
                setMonsterData(response.data)})
            .catch(error => setError(error))
    }, [])

    if(error){
        return <ErrorComponent error={error}/>
    }
    else if (monsterData){
        return(
            <div className="Monster-Sheet-page">
                <MonsterSheetHeader name={monsterData.name} size={monsterData.size} type={monsterData.type} subtype={monsterData.subtype} alignment={monsterData.alignment} />
                <BaseStats AC={monsterData.armor_class} HP={monsterData.hit_points} hitDice={monsterData.hit_dice} speed={monsterData.speed}/>
            </div>
        )
    }
    else{
        return <Loading/>
    }
}

const BaseStats = ({AC, HP, hitDice, speed}: BaseStatsProps) => {

    const speedArray = Object.entries(speed)
    console.log("speed array", speedArray)
    return(
        <div className="Monster-Sheet-BaseStats">
            <p><b>Armor Class</b> {AC}</p>
            <p><b>Hit Points</b> {HP} {hitDice}</p>
            <p><b>Speed</b> {speedArray.map(value => value[0] + " " + value[1] + ", ")}</p>
        </div>
    )
}