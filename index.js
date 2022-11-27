// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var type of dairy) {
        console.log(type)
    }
}

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

//first way we did task 2 that still worked

// function birdCan() {
//     for (var [key, value] of Object.entries(bird)) {
//         console.log(`${key}: ${value}`);
//     }  
// } 


function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop])
    }
}
// Task 3

function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop])
    }
}
