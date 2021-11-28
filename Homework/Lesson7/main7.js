// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email
//     this.phone = phone;
// }
// let user1 = new User(1,'Міша', "Пупкін", "hhh@com",38096998888);
// console.log(user1);


// створити пустий масив, наповнити його 10 об'єктами new User(....)

//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email
//     this.phone = phone;
// }
//
// let user1 = new User(10,'Міша', "Пупкін", "hамh@com",38096998888);
// let user2 = new User(5,'Света', "Бубкін", "hмміh@com",38096923888);
// let user3 = new User(3,'Коля', "Хрукпін", "hіhh@com",3809458888);
// let user4 = new User(4,'Вася', "Супкін", "hhcavsh@com",3805698888);
// let user5 = new User(8,'Катя', "Мупкін", "hhhsvwv@com",38096978888);
// let user6 = new User(6,'Олег', "Зупкін", "hhhca @com",380969987888);
// let user7 = new User(7,'Дмитро', "Лупкін", "hcwwhh@com",38095668888);
// let user8 = new User(2,'Сергій', "Жупкін", "hhcw h@com",380922888);
// let user9 = new User(9,'Петро', "Рупкін", "hhwevh@com",3809678888);
// let user10 = new User(1,'Сашко', "Чупкін", "hwewahh@com",3809688888);
//
//  let user = [user1, user2, user3, user4, user5, user6, user7, user8, user9 , user10 ]
// // console.log(user)



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filter = user.filter(val => val.id % 2 === 0)
// console.log(filte

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = user.sort ((us1, us2 ) =>  us1.id - us2.id);
//  console.log (sort);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
 class Client {
     constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
     }
 }


// створити пустий масив, наповнити його 10 об'єктами Client
let arr = [
new Client (10,'Міша', "Пупкін", "hамh@com",38096998888,['hhdfh']),
new Client (5,'Света', "Бубкін", "hмміh@com",38096923888,['fwgw','dVVA']),
new Client (3,'Коля', "Хрукпін", "hіhh@com", 3809458888,['agwgh']),
new Client (4,'Вася', "Супкін", "hhcavsh@com",3805698888,['fgwg','sbnnnd']),
new Client (8,'Катя', "Мупкін", "hhhsvwv@com",38096978888, ['agwgh']),
new Client (6,'Олег', "Зупкін", "hhhca @com",380969987888, ['agwgh']),
new Client (7,'Дмитро', "Лупкін", "hcwwhh@com",38095668888, ['fgwg','sbnnnd']),
new Client (2,'Сергій', "Жупкін", "hhcw h@com",380922888,['fgwg','sbnnnd']),
new Client (9,'Петро', "Рупкін", "hhwevh@com",3809678888, ['agwgh'] ),
new Client (1,'Сашко', "Чупкін", "hwewahh@com",3809688888, ['ff'])
]
// console.log(arr)



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort = arr.sort ((us1, us2 ) =>  us1.order.length - us2.order.length);
 console.log (sort);


