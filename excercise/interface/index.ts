import { Planet } from "./interface";

const planet: Array<Planet> = [
    {
        id: 1,
        name: 'earth',
        details: {
            color: 'green',
            diameter: 2000,
            planetNumber: 3
        }
    }
]

console.log(planet[0])