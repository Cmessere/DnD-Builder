import { ErrorComponentProps } from "../services/types"

export const ErrorComponent = ({error}: ErrorComponentProps) =>{
    return(
        <h1>{error.message}</h1>
    )
}