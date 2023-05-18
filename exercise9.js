/*
9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
    A: teamSports and cat1 has changed, dog1 hasn't changed, 
       because array and objects are following reference value rules(memory location), 
       but string is following primitive rules. 
e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// let moreSports = teamSports;
let dog2 = dog1;
// let cat2 = cat1;
let moreSports = [];
let cat2 = {};

for (let i in teamSports) {
    moreSports.push(teamSports[i]);
}

for (let key in cat1) {
    cat2[key] = cat1[key];
}

moreSports.unshift('Baseball', 'Basketball');
moreSports.push('Soccer', 'Tenis');
dog2 = 'Yeondoo';
cat2.name = 'Change';

console.log(teamSports);
console.log(moreSports);
console.log(dog1);
console.log(cat1);
console.log(cat2);