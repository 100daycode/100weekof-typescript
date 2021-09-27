// ARRAY OF NUMBER
// using type interface
let list = [1, 2, 3, 4, 5]
console.log(list)

// using square bracket
let list2: number[] = [1, 2, 3, 4, 5]
console.log(list2)

// using generic
let list3: Array<number> = [1, 2, 3, 4, 5, 6]
console.log(list3)

// ARRAY UNION (Gabungan)
let list4 = ['hallo', 1, 2, 3, 4]
console.log(list4)

let list5: (string | number)[] = ['hello', 2, 3, 4]
console.log(list5)

let list6: Array<string | number> = ['hello', 2, 3, 4]
console.log(list6)

// TUPLE
let list7: [string, number] = ['hallo', 2]
console.log(list7)

// ARRAY FUNCTION

// Destruct
let [a, b, c, d]: [string, number, string, number] = ['helo', 2, 'hola', 3]
console.log(a)