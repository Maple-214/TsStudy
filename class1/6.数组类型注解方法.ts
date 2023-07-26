const arr1: string[] = ["1", "2"]
const arr2: number[] = [1, 2]
const arr3: (number | string)[] = [1, "2"]

type Persons = {
    age: number
    username: string
}
class Persons1 {
    age: number
    username: string
}

const arr4: Persons[] = [
    {
        age: 1,
        username: 'name',

    }
]
const arr5: Persons1[] = [
    {
        age: 1,
        username: 'name',

    }
]