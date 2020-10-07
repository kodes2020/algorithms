//sort numbers in ascending
//pass the numbers in the form of string..e.g. '585646165165'
function bubblesort(numbers) {
    //list of numbers to sort
    let list = [];

    for (let i = 0; i < numbers.length; i++) {
        list.push(numbers[i]);
    }

    list = list.map(el => parseInt(el));

    //compare two numbers
    for (let j = 0; j < list.length; j++) {
        
        //this loop needs to fire again but until 1 less index than last one
        for (let i = 0; i < list.length - 1 - j; i++) {
            let x = list[i];
            let y = list[i + 1];
            if (x >= y) {
                list[i] = y;
                list[i + 1] = x;
            }
        }

    }
    //return the sorted list
    return list;
}

let sorted = bubblesort('4864984568987');
console.log(sorted);


