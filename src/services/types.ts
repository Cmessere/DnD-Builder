type Monster = {
    name: string,
    index: string
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

export type MonsterGridProps = {
    monsters: Monster[]
}

export type PageList = {
    currentPage: number
}