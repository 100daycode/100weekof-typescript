
interface DetailsPlanet {
    color: string,
    diameter: number,
    planetNumber: number
}

export interface Planet {
    id: number,
    name: string
    details: DetailsPlanet
}

