// interface declaration with classes
interface Users {
    id: number,
    name: string
}

class Account {
    id: number
    name: string

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const user: Users = new Account("Fiqry", 1)

// structural type system
// class
class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const newpoint = new Point(20, 19)
console.log(newpoint)