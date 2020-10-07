//stack of words
let stack = [];

let word = "husldnf";
let reversed = "";

for(let i=0; i<word.length; i++){
    stack.push(word[i]);
}

for(let i=0; i<word.length; i++){
    
    reversed = reversed + stack.pop();
}

if(word === reversed)
    console.log('palindrome');
else
    console.log('not palindrome');
