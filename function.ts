// functional declaration 
function add(x: number, y: number): number {
    return x + y
}
let res = add(8, 5)
console.log(res)

// function with callback
type Greeter = (message: string) => void
function req(url: string, callback: Greeter) {
    callback(url)
}

let data = (str: string) => console.log(str)
req('http://helo.com', data)

// exercise
type Contact = {
    firstName: string,
    lastName: string,
    gender?: string,
    language: string
}

function submitContact(firstName: string, lastName: string, gender?: string, language = 'english'): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender })
    }
}

let datas = submitContact('fiqry', 'choerudin')
console.log(datas)


