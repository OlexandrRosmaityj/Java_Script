//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function  Car (model, producer, year, maxspeed, volume ) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function')
//                 console.log(`${key} - ${this[key]}`)
//         }
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//                 this.maxspeed = this.maxspeed + newSpeed;
//             };
//
//     this.changeYear = function (newValue) {
//                 this.year = newValue;
//             };
//
//     this.addDriver = function (driver){
//         this.driver = driver
//     };
// }
// let addCar = new Car('WV', 'Detchland', 2010, 200,2 );
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(50);
// addCar.drive();
// addCar.changeYear(2015);
// addCar.info();
// addCar.addDriver('Петро')
// console.log(addCar)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars2 {
    constructor(model, producer, year, maxspeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    };
        drive()  {
            console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
        };

    info () {
            for (const key in this) {
                if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`)
            }
        };

     increaseMaxSpeed (newSpeed) {
            this.maxspeed = this.maxspeed + newSpeed;
        };

        changeYear  (newValue) {
            this.year = newValue;
        };

       addDriver (driver) {
            this.driver = driver
        };

};

let addCar = new Cars2('WV', 'Detchland', 2010, 200,2 );
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(50);
addCar.drive();
addCar.changeYear(2015)
addCar.info();
addCar.addDriver('Петро')
console.log(addCar)



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Popelushka {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
// let popelushkaArr = [
//     new Popelushka('Sveta', 30, 38),
//     new Popelushka('Olja', 32, 36),
//     new Popelushka('Katja', 16, 35),
//     new Popelushka('Ira', 20, 36),
//     new Popelushka('Vika', 21, 30),
//     new Popelushka('Evgenia', 20, 45),
//     new Popelushka('Lida', 19, 39),
//     new Popelushka('Nastja', 14, 40),
//     new Popelushka('Jula', 10, 29),
//     new Popelushka('Anja', 32, 38),
// ];
// console.log(popelushkaArr);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Princ {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let men = new Princ('Vasyl', 20, 45);
// console.log(men)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let love  = (popelushkaArr, men) => {
//     for (const item of popelushkaArr) {
//         if (item.foot_size === men.shoe) {
//             return ` ${item.name}`
//         }
//     }
// };
// console.log(love(popelushkaArr, men))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let love2 = popelushkaArr.find((item) => item.foot_size === men.shoe);
//  console.log(love2)