// inline interface
interface Product {
    id: number,
    name: string
    qty: number,
    price: number
}

let catalog: Product = {
    id: 1,
    name: 'Yakult',
    qty: 2,
    price: 20000
}

// nested object
interface Item {
    id: number,
    name: string,
    details: ItemDetails
}

interface ItemDetails {
    color: string,
    weight: number
}

let productItems: Item = {
    id: 1,
    name: 'Corola',
    details: {
        color: 'red',
        weight: 100
    }
}

interface User {
    id: number,
    name: string,
    carlist: {
        [key: string]: Car
    }
}

interface Car {
    name: string,
    color: string
}

let fiqry: User = {
    id: 1,
    name: 'Fiqry choerudin',
    carlist: {
        car1: {
            name: 'Ferari Galardo',
            color: 'red'
        }
    }
}

// OBJECT FUNCTION
interface CarInterface {
    id: number,
    name: string
    detail: CarDetails
}

interface CarDetails {
    color: string,
    weight: number,
    release: number
}

// can also use this
// cars:Array<CarInterface>
let cars: CarInterface[] = [
    {
        id: 1,
        name: 'Subaru',
        detail: {
            color: 'red',
            weight: 200,
            release: 2000
        }
    },
    {
        id: 2,
        name: 'Honda Civic',
        detail: {
            color: 'black',
            weight: 150,
            release: 2020
        }
    },
    {
        id: 3,
        name: 'Avanza',
        detail: {
            color: 'silver',
            weight: 150,
            release: 2010
        }
    },
    {
        id: 4,
        name: 'Skyline',
        detail: {
            color: 'silver',
            weight: 50,
            release: 1999
        }
    }
]

// filter 
// show list car with release date 1999
const filterCars = cars.filter(e => e.detail.release == 1999)
console.log(filterCars)

// find
// find car with black color
const findCars = cars.find(e => e.detail.color === 'black')
console.log(findCars)

// destruct
let Person = {
    firstName: 'Fiqry',
    lastName: 'Choerudin'
}

let { firstName, lastName }: { firstName: string, lastName: string } = Person