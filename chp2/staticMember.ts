class ClassA {
    static typeName: string;
    constructor() {}

    static getFullName() {
        return "CLass A"  + ClassA.typeName;
    }
}

const a  = new ClassA();
console.log(ClassA.typeName);