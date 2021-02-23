import axios from "axios"

const client = axios.create({
    baseURL: "https://www.dnd5eapi.co/api/"
  });

export const Monsters=() => {
    return client.get("monsters/")
}

export const MonsterDetail=(id:string) => {
    return client.get("monsters/" + id)
}

