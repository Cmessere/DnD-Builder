type Monster = {
    name: string,
    url: string
}

export type MonsterList = {
    count: number,
    results: Monster[]
}

export type ErrorComponentProps = {
    error: any
}

export type MonsterCardProps = {
    monster: Monster
}