/*
8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.
*/

const sydney = {
    name: 'Sydney',
    population: 5121000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const auckland = {
    name: 'Auckland',
    country: 'New Zealand',
    mayor: 'Wayne Brown',
    maori_name: 'Tāmaki-makau-rau',
    area: 607.10
}

function renderObj(city) {
    for (let key in city) {
        console.log(`${key} is ${city[key]}`);
    }
}

renderObj(sydney);
renderObj(auckland);