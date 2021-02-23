import React from "react"
import { useParams } from "react-router-dom"
import { MonsterDetail } from "../services/ApiClient"
import { DetailParams } from "../services/types"

export const Detail = () => {
    const { id }:DetailParams = useParams()
    const [monsterData, setMonsterData] = React.useState(undefined)

    React.useEffect(() => {
        MonsterDetail(id)
            .then(response => {console.log("Monster Data", response.data)})
            .catch(error => {console.log("Error ", error)})
    })

    return(
        <h1>{id}</h1>
    )
}