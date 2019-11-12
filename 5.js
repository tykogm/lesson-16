/**
 * Задача 6.
 *
 * Реализуйте класс Student , который наследует от класса User.
 * 
 * Класс User должен обладать следующими свойствами:
 * - firstName — имя;
 * - lastName — фамилия;
 * - getName() — метод, который возвращает имя и фамилию пользователя.
 * 
 * Класс Student должен обладать следующими свойствами:
 * - year — год поступления в вуз;
 * - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).
 * 
 * Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
 * Текущий год получите самостоятельно.
 * 
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - В реализации работы метода getCourse обязательно использовать конструктор Date.
 */

 // Решение
class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getName() {
        return this._firstName + " " + this._lastName;
    }
}

class Student extends User {
    constructor(firstName, lastName, year) {
        super(firstName, lastName);
        this._year = year;
    }

    getCourse() {
        const date = Date.now();
        const currentYear = date.getFullYear();
        return currentYear - this._year;
    }
}

const student = new Student('Water', 'White', 2015);

console.log(student.getName()); // Walter White
console.log(student.getCourse()); // 4

exports.User = User;
exports.Student = Student;