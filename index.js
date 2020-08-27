// Code your solutions in this file

function writeCards(array, event) {
   const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(number) {
    for ( let i = number; i >= 0; i -- ) {
        console.log(i)
    }
}