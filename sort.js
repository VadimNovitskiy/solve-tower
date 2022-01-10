const array = [2, 66, 3, 1, 5, 3, -6, 34, 1, 543, -32, 4, 53, 22, 8];

// function sort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         console.log(arr[i]);
//         if(arr[i] < arr[i + 1]) {
//             return;
//         } else {
//             arr.push(arr[i]);
//         }
//         return
//     }
//     console.log(arr);
// }

function sort(arr) {
    
    // for(let i = 0; i < arr.length - 1; i++) {
    //     if(arr[i] <= arr[(arr.length - 1) - i]) {
    //         console.log('if ', arr[i], arr[(arr.length - 1) - i]);
    //         arr.push()
    //     } else {
    //         console.log('else ', arr[i], arr[(arr.length - 1) - i]);
    //     }
    // }
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]) {
            console.log('if ', arr[i], arr[(arr.length - 1) - i]);
            arr.push()
        } else {
            console.log('else ', arr[i], arr[(arr.length - 1) - i]);
        }
    }
}

// sort(array)

// for(let j = arr.length; j >= 0; j--) {
//     console.log(j);
// }


function sortReverse2(array) {
    let step = 0;
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length - 1 - i; j++, step++) {
            if(array[j] < array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    console.log(step);
}

function sortReverse1(array) {
    let step = 0;
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = i + 1; j < array.length; j++, step++) {

            if(array[i] < array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    console.log(step);
}

const arr2 = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const arr3 = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

const arr4 = [43, 24, 1, 5, 22, 2, 0];

// sort(arr4);
// sort(array);
// console.log(arr4);
// console.log(array);

function sort(array) {
    let step = 0;
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length - 1 - i; j++, step++) {
            if(array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    console.log(step);
}

function testTimeout() {
    let i = 0;
    let timer = setTimeout(function tick() {
        new Promise(resolve => {
            if(i < 2) {
                console.log('first');
                let j = 0;
                let timer2 = setTimeout(function tick2() {
                    if(j < 3) {
                        console.log('second');
                    } else {
                        resolve()
                        return;
                    } 
    
                    timer2 = setTimeout(tick2, 500);
                    j++;
                })
            } else {
                return;
            }
        }).then(() => {
            console.log('then');
            timer = setTimeout(tick, 500);
            i++;    
        })
    }, 500)
}


// function testTimeout() {
//     let i = 0;
//     let timer = setTimeout(async function tick() {
//         if(i < 2) {
//             console.log('first');
//             let j = 0;
//             let timer2 = setTimeout(function tick2() {
//                 if(j < 3) {
//                     console.log('second');
//                 } else {
//                     return;
//                 } 

//                 timer2 = setTimeout(tick2, 700);
//                 j++;
//             })
//         } else {
//             return;
//         }
//         timer = setTimeout(tick, 2000);
//         i++;
//     }, 500)
// }
testTimeout();

