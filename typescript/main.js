function sum(n1, n2) {
    return n1 + n2;
}
var suma = sum(1, 30);
var students = [];
var heger = {
    nombre: 'Heger',
    matricula: 1
};
var raymond = {
    nombre: 'Raymond',
    matricula: 2
};
students.push(heger);
students.push(raymond);
students.forEach(function (student) {
    console.log("La matricula de " + student.nombre + " es " + student.matricula);
});
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.comer = function () {
        throw new Error("Method not implemented.");
    };
    Persona.prototype.sayHello = function () {
    };
    return Persona;
}());
var me = new Persona();
me.sayHello();
