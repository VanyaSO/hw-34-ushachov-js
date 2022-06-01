'use strict'

const arr = [];
for(let i = 1; i <= 20; i += 1){
    arr.push(i);
}
///
let table = document.createElement('table');
document.body.append(table);

let tr = document.createElement('tr');

// const createTr = (arr) => {
    const createTable = (arr,tr) => {

        table.append(tr);

        for(let i = 0; arr.length > i; i += 1){

            let td = document.createElement('td');

            if(tr.children.length === 10){
                let trNew = document.createElement('tr');
                return createTable(arr[i], trNew);

            }else{
                td.innerHTML = arr[i];
            }

            tr.append(td);

        }

    }

createTable(arr, tr);

    // return createTable(arr, tr);
// }

// let createdTr = createTr(arr);
// document.body.append(createdTr);



// const arrayTwo = [1,2,3,6,34535,635634, [1,3,4,1,[1,4,2],23]];
//
// //Main UL
// let ul = document.createElement('ul');
//
// //Function
// const generateUl = (arrayTwo) => {
//     const generateListTwo = (arrayTwo, elem) => {
//
//         //Цыкл
//         for(let i = 0; arrayTwo.length > i; i += 1){
//             //Create li
//             let li = document.createElement('li');
//
//             //Проверка на масив в нутри масива
//             if(Array.isArray(arrayTwo[i])){
//                 let ulInLi = document.createElement('ul');
//                 li.append(generateListTwo(arrayTwo[i], ulInLi));
//
//             }else{
//                 //наполнение текстом li
//                 li.innerHTML = arrayTwo[i];
//             }
//             //наполнение ul елементами li
//             elem.append(li);
//         }
//
//         return elem;
//
//     }
//
//     return generateListTwo(arrayTwo, ul);
// }
//
// let generatedUl = generateUl(arrayTwo);
// document.body.append(generatedUl);