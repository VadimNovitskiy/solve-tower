const columnOne = document.querySelector('.colums__one');
const columnTwo = document.querySelector('.colums__two');
const columnThree = document.querySelector('.colums__three');
const button = document.querySelector('.start-btn');
const input = document.querySelector('.input')


button.addEventListener('click', start);

let step;
let intervalID = null;
let maxNum;
let minNum;
let state = 'init';
let iter = 0;


const arr1 = [];
const arr2 = [];
const arr3 = [];

const command = [];

let quanity;

// function generate(num) {
//     maxNum = +num;
//     minNum = 1;

//     for(let i = +num; i >= minNum; i--) {
//         arr1.push(i);
//     }

//     quanity = arr1.length;
//     renderElements(arr1, arr2, arr3);
// }

function generateRandom(num) {
    maxNum = +num;
    minNum = 1;

    for(let i = minNum; i <= maxNum; i++) {
        getRandomNumber(minNum, maxNum);
    }
    quanity = arr1.length;
    console.log(arr1);
    renderElements(arr1, arr2, arr3);
}

function getRandomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if(arr1.includes(number)) {
        return getRandomNumber(min, max);
    } else {
        arr1.push(number);
    }
}

async function sort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {

            if(array[j] < array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                await new Promise(resolve => setTimeout(resolve, 700));
                renderElements(arr1, arr2, arr3);
            }
        }

        if(i === array.length - 1) {
            state = 'run';
        }
    }
}

function initArr(array) {

    if(array.length === 0) {
        return 0;
    }

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i + 1] || array[i] === array[i + 1] ) {
            return 0;
        }
    }
    return 1;
}

function initInterval() {
    intervalID = setInterval(() => {
        if(!forward())
            window.clearInterval(intervalID);
    }, 1000)
}

function forward() {
    console.log('forward');
    if(step === command.length - 1) {
        return 0;
    }
    step++;
    command[step].to.push(command[step].from.pop());
    renderElements(arr1, arr2, arr3);
    return 1;
}

function back() {
    console.log('back');
    if(step === -1) {
        return 0;
    }
    command[step].from.push(command[step].to.pop());
    renderElements(arr1, arr2, arr3);
    step--;
    return 1;
}


function changeStraight(event) {

    if(event.code == 'ArrowRight') {
        window.clearInterval(intervalID);
        forward();
    }
    
    if(event.code == 'ArrowLeft') {
        window.clearInterval(intervalID);
        back();
    }
}

function clearGameStatus(arr1, arr2, arr3, arr4) {
    clearArray(arr1);
    clearArray(arr2);
    clearArray(arr3);
    clearArray(arr4);
    iter = 0;
    renderElements(arr1, arr2, arr3);
}

function start() {
    switch(state) {
        case 'init':
            let value = Number(input.value);

            if(isNaN(value) || value <= 0 || value > 10) {
                alert('Write valid number!');
                input.value = '';
            } else {
                generateRandom(value);
                state = 'sort';
                input.value = '';
            }
            break;
        case 'sort':
            state = 'sorting';
            sort(arr1);
            break;
        case 'run':
            console.log(arr1);
            step = -1;
            clearArray(command);
            solveTower(quanity, arr1, arr3, arr2);
            initInterval();

            document.addEventListener('keydown', changeStraight);
            state = 'stop';
            break;
        case 'stop':
            if(intervalID != null) {
                window.clearInterval(intervalID);
            }
            document.removeEventListener('keydown', changeStraight);
            clearGameStatus(arr1, arr2, arr3, command);
            state = 'init';
            break;
    }
}


function solveTower(n, from, to, buffer) {

    if(n === 1){
        command.push({ from, to });
        return;
    }

    solveTower(n - 1, from, buffer, to);

    command.push({ from, to });

    solveTower(n - 1, buffer, to, from);
}

function renderElement(arr, column) {
    column.innerHTML = '';
    let str = '';
    arr.forEach((elem) => {
        let width = getWidth(elem, maxNum, minNum)
        str = `<div class="element" style="width: ${width}%"></div>` + str;
        column.innerHTML = str;
    })
}

function renderElements(arr1, arr2, arr3) {
    renderElement(arr1, columnOne);

    renderElement(arr2, columnTwo);

    renderElement(arr3, columnThree);
}

function clearArray(array) {
    array.length = 0;
}

function getWidth(num, max, min) {
    if(num === 1) {
        return 20;
    }
    let procentOfNum = (num - min) * 100 / (max - min);
    return 80 * procentOfNum / 100 + 20;
}

// ============================

const test_array = [
    [3,2,1], 
    [4,2,1],
    [10,8,2],
    [8,10,2],
    [8,8,8],
    [1,2,1],
    [4,4,3],
    [4,3,2],
    [4,3,2,2],
    [3],
    [],
]

const array_success = [
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
]


function test_initArr()
{
    for(let i = 0; i < test_array.length; i++)
    {
        if(initArr(test_array[i]) != array_success[i])
            alert("error iterator " + (i+1));
        else 
        console.log("ok!");
    }
}


// test_initArr()