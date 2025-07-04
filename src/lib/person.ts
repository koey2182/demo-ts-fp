export type Person = {
    name: string;
    age: number;
};

export function createPerson(name: string, age: number): Person {
    return {
        name,
        age,
    };
}

export function increaseAge(person: Person, amount = 1): Person {
    return {
        ...person,
        age: person.age + amount,
    };
}

export function getIntroductorySentence(person: Person) {
    return `hello, my name is ${person.name}. i'm ${person.age} years old.`;
}
