var elForm = document.querySelector('.form')
var elInput = document.querySelector('.input');
var elBtn = document.querySelector('.btn');
var elResult = document.querySelector('.result');


function findLongWord(wordsAray) {
    var longWord = wordsAray[0];
    for(var word of wordsAray) {
        if(longWord <= word) {
            longWord = word;
        }
    }
    return longWord;
}

function sum(numbers) {
    var sum = 0;
    for(var num of numbers) {
        sum += num;
    }
    return sum;
}

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    var textAray = elInput.value.split(' ');
    elResult.value = findLongWord(textAray);
})

var numbers = [1, 4, 10];
console.log(sum(numbers));