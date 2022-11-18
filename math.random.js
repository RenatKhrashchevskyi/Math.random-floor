
//How math.random works
//never return 1
console.log(Math.random());

//example if you want more number then 1
// * (your number)
console.log(Math.random() * 9);


//rounding number, use Math.floor()

console.log(Math.floor(3.323232));
console.log(Math.floor(34.66545));


//random index from array using Math.random and Math.floor

let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"['fefe', 'ewfew']];
let randomIndex = Math.floor(Math.random() * 4);

// or we can use shorter way
// randomWords[Math.floor(Math.random() * 4)];

console.log(randomWords[randomIndex]);




//Program random choice

let phrases = [
'Sounds not bad',
'Yes, we should definatelly do it',
'I think this is a bad idea',
'Maybe not today?',
'Computer says not'
];

//Should I drink one more cup of cocktail?
console.log(phrases[(Math.floor(Math.random() * 5))]);

//Do I have to do my homework?
console.log(phrases[(Math.floor(Math.random() * 5))]);



//generator random insults

let randomBodyParts = ['Eye', 'Nose', 'Skull', 'Mouth', 'Ear'];
let randomInsults = ['stinky', 'stupid', 'sad'];
let randomWordss = ['table', 'phone','water', 'sand'];

//select random body part from array
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];

// or we can use shorter way
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

//select random Insult part from array
let randomInslut = randomInsults[Math.floor(Math.random() * 3)];

//select random word part from array
let randomWord = randomWordss[Math.floor(Math.random() * 4)];

let randomInsult1 = 'You ' + randomBodyPart + ' as if ' + randomInslut + ' ' + randomWord + '!';

// or we can use other way
//let randomInsult1 = ["У тебя", randomBodyPart, "словно", randomInslut, randomWord + "!!!"].join(" ");

console.log(randomInsult1);



/*
HOMEWORK
============
*/

// Random good words


let bodyParts = ['hair', 'head','finger', 'leg'];
let goodWords = ['awesome', 'beautiful', 'nice', 'handsome'];
let bodyPartsAnimal = ['pow', 'nose', 'tail', 'wool'];
let someAnimals = ['Elephant', 'koala', 'dog', 'Mouse', 'Horse'];

let randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let goodWord = goodWords[Math.floor(Math.random() * goodWords.length)];
let bodyPartAnimal = bodyPartsAnimal[Math.floor(Math.random() * bodyPartsAnimal.length)];
let someAnimal = someAnimals[Math.floor(Math.random() * goodWords.length)];

let randomGoodWords = ['You have', [randomPart], 'much more', [goodWord], 'than', [bodyPartAnimal], 'of', [someAnimal] + '!'].join(' ');

//let randomGoodWords = 'You have' + ' ' + randomPart + ' ' + 'much more' + ' ' + goodWord + ' ' + 'than' + ' ' +  bodyPartAnimal + ' '  + 'of' + ' ' + someAnimal + '!';

console.log(randomGoodWords);

//One more tome about '.join()'
console.log(bodyParts.join(' '));