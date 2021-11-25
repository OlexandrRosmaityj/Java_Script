
// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//


// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let util = str =>  str.replaceAll("..", " ")
//     .replace("---",' ')
//     .replace('__', ' ');
// console.log(util(n3))
//







//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//
// let generation =(limit, size) =>{
//      let arr = [];
//     for (let i = 0; i<size; i++ ){
//      arr[i] =  Math.round(Math.random()*limit);
//     }
//     return arr;
// }
//
// let res =  generation(100, 10);
// console.log(res)



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

//     res.sort((a, b)=> {
//         return b-a;
//
// })
// console.log(res)
//




// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

//
//
// let generation =(limit, size) =>{
//      let arr = [];
//     for (let i = 0; i<size; i++ ){
//      arr[i] =  Math.round(Math.random()*limit);
//     }
//    return arr.filter(carent => carent % 2 === 0 )
// }
//
// let res =  generation(100, 10);
// console.log(res)
//








// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [45, 2, 26, 56, 89, 20 ]
let map = arr.map(vaue => {
    return vaue + " "
    }
);
console.log(map);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([145, 2, 26, 56, 89, 20], 'desc') );

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let Sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(Sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((vaue) => {
    return vaue.monthDuration > 5;
});
console.log(filter)
