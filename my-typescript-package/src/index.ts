console.log('TypeScript is working!');


export class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
let user = new Student("Jane", "M.", "User");

console.log(greeter(user));