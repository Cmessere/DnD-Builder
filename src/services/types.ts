type Monster = {
    name: string,
    index: string
}

type SpecialAbilities = {
    name: string,
    desc: string,
    usage?: Usage
}

type Usage = {
    type: string,
    times?: number,
    dice?: string,
    min_value?: number
}

type ProficienciesBonus = {
    value: number,
    proficiency: ProficiencyDTO
}

type ProficiencyDTO = {
    index: string,
    name: string,
    url: string
}

type Action = {
    name: string,
    desc: string,
    options?: any,
    damage?: Damage[],
    dc?: DCType,
    usage?: Usage
}

type DCType = {
    dc_type: DCDTO,
    dc_value: number,
    success_type: string
}

type DCDTO = {
    index: string,
    name: string,
    url: string
}

type Damage = {
    damage_type: DamageDTO,
    damage_dice: string
}

type DamageDTO = {
    index: string,
    name: string,
    url: string
}

export type MonsterList = {
    count: number,
    results: Monster[]
}

export type MonsterSheetHeaderProps = {
    name: string,
	size: string,
	type: string,
	subtype?: string,
	alignment: string,
}

export type BaseStatsProps = {
    AC: number,
	HP: number,
	hitDice: string,
	speed: string[],
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

export type DetailParams = {
    id: string
}

export type MonsterSheet = {
	name: string,
	size: string,
	type: string,
	subtype?: string,
	alignment: string,
	armor_class: number,
	hit_points: number,
	hit_dice: string,
	speed: any,
	strength: number,
	dexterity: number,
	constitution: number,
	intelligence: number,
	wisdom: number,
	charisma: number,
	proficiencies: ProficienciesBonus[],
	damage_vulnerabilities: string[],
	damage_resistances: string[],
	damage_immunities: string[],
	condition_immunities: string[],
	senses: string[],
	languages: string,
	challenge_rating: number,
	xp: number,
	special_abilities: SpecialAbilities[]
	actions: Action[],
	legendary_actions: Action[]
}