import React from "react"
import { useParams } from "react-router-dom"
import { MonsterDetail } from "../services/ApiClient"
import { DetailParams, MonsterSheet } from "../services/types"
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
    })

    if(error){
        return <ErrorComponent error={error}/>
    }
    else if (monsterData){
        return(
            <div className="Monster-Sheet-page">
                <MonsterSheetHeader name={monsterData.name} size={monsterData.name} type={monsterData.type} subtype={monsterData.subtype} alignment={monsterData.alignment} />
            </div>
        )
    }
    else{
        return <Loading/>
    }
}