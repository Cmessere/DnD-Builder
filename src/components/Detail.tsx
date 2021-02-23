import { useParams } from "react-router-dom"

export const Detail = () => {
    const {id}:any = useParams()

    console.log("Detail")
    console.log("id", id)

    return(
        <h1>{id}</h1>
    )
}