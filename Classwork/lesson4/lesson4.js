// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// // function numberMin (a, b, k){
// //     if ( b > a && k > a ) {
// //       console.log(a);
// //     } else if (a > b && k > b) {
// //         console.log(b);
// //     }else if (b > k && a > k) {
// //         console.log(k);
// //     } else if (a == b || k == b || a == k){
// //                console.log("рівні є числа");
// //     }
// // }
// // numberMin(2, 8, 500)
//
//
//
//
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// // function numberMax (a, b, k){
// //     if (a > b && a > k  ) {
// //         console.log(a);
// //     } else if (b >a && b > k) {
// //         console.log(b);
// //     }else if (k > b && k > a) {
// //         console.log(k);
// //     } else if (a == b || k == b || a == k){
// //         console.log("рівні є числа");
// //     }
// // }
// // numberMax(2, 8, 500)
//
// // // - створити функцію яка повертає найбільше число з масиву
//
//  let arr = [30,32,2,9,89,20]
// /     let max = i[0];
//     for (const element of i) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }

//
// // - створити функцію яка повертає найменьше число з масиву
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// //
// //
// //
// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
//
//
//
// //     let reverseArray = [];
// //         let reverseArrayIndex = 0;
// //         for (let i = array.length - 1; i >= 0; i--) {
// //             reverseArray[reverseArrayIndex] = array[i];
// //             reverseArrayIndex++;
// //         }
// //         return reverseArray;
// //



// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// };
// document.write(funRandom(5))


//
//  let summArray = [1,2,3,4];
// // function sumElement (array){
// //     let sum = 0;
// //     for (const arrayElement of array) {
// //         // sum += arrayElement; // // 1 спосіб скорочений
// //         sum = arrayElement + sum;
// //     }
// //     return sum;
// // }
// // sumElement(summArray)
// // document.write(sumElement(summArray))
//
// let

// let array =[1, 3, 6, 9, 12]
// for (let i = array.length - 1; i >= 0; i--) {
//   let arrayElement = array[i];
//     document.write( arrayElement)
// }

//
// let arr = [30,32,2,9,89,20]
//     for (let element of arr) {
//
//         console.log(arr)
//              }
//     document.write(arr)
// console.log(arr)
// debugger

// let summArray = [1,2,3,4];
//
// for (let i = 0; i < summArray.length; i++){
//     let sum = 0
//     sum = summArray[i] + sum;
//
//     console.log(sum)
// }
// out.innerHTML = sum

//         arrayEmpty.push(Math.floor(Math.random()*100));
// let sum = 0;
//    for (const arrayElement of summArray) {
//
//        sum = arrayElement + sum;
//       }



//
// for(let i=0,j=arr.length-1; i<j; i++,j--) {console.log(temp)
//     temp = arr[j]; arr[j] = arr[i]; arr[i] = temp;
// }
// document.write(arr)

//
// / 8. вивести масив в зворотньому порядку.        ===============================
// // let arrayNumbersBack = [2,17,13,6,22,31,45,66,100,-18];
// // for (let i = arrayNumbersBack.length-1; i >= 0; i--){
// //     console.log(arrayNumbersBack[i]);

//
// const minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", element);
//     return min;
// }
// document.write( minMax(-10, 10, -1000233, 734848734))
debugger
let arr = [1,2,3,4,5]
let arrRew = (arr) =>{
    let narr =[];
    for (let i = narr.length - 1; i >= 0; i--) {
      narr[narr.length] = arr[i];
    }
    console.log(narr);
    arr = narr;
    console.log(arr)
}



let makeValidName = (str) => {
    let arrTmp = str.split('');
    for (let i = 0; i < arrTmp.length; i++) {
        if (arrTmp[i] === '-' || arrTmp[i] === '_' || arrTmp[i] === '.') {
            arrTmp[i] = ' ';
        }
    }
    return arrTmp.join('');
};

