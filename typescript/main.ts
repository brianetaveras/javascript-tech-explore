function sum(n1: number, n2: number): number {
    return n1 + n2;
}


type Student = {
    nombre: string,
    matricula: number
}

let suma: number = sum(1, 30);

let students: Student[]  = []


const heger = {
    nombre: 'Heger',
    matricula: 1
};
const raymond = {
    nombre: 'Raymond',
    matricula: 2
};

students.push(heger)
students.push(raymond)

students.forEach((student: Student) => {
    console.log(`La matricula de ${student.nombre} es ${student.matricula}`)
})


interface Humano {
    salud: number;
    cartera: Record<any, any>[]
    comer(): void
}


class Persona implements Humano{
    salud: number;
    cartera: Record<any, any>[];
    comer(): void {
        throw new Error("Method not implemented.");
    }

    public sayHello(){

    }
}


const me = new Persona();

me.sayHello()