export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "flynn",
        age: 18,
        gender: "female"
    },
    {
        id: 3,
        name: "Dal yoon",
        age: 18,
        gender: "female"
    },
    {
        id: 4,
        name: "null",
        age: 18,
        gender: "female"
    },
    {
        id: 5,
        name: "sungkuk",
        age: 18,
        gender: "female"
    },
    {
        id: 6,
        name: "yesdoing",
        age: 18,
        gender: "female"
    }
]

export const getById = id => people.filter( person => id === person.id)[0];