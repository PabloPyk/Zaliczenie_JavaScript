// zadanie 1

const car = {
    color: "blue",
    marka: "audi",
    VIN: "84816519841"
}


console.log(car.color);
console.log(car.marka);
console.log(car.VIN);


// zadanie 2

const car = {
    color: "blue",
    marka: "audi",
    VIN: "84816519841",
    changeName: function(newName){
        this.marka = newName;
        console.log("new name in object:", car.marka);
    }
}


car.changeName("Polonez");




// zadanie 3

const numbers = {
    sum: 0,
    sumNumbersInArray: function (array) {
        this.sum = array.reduce((acc, number) => (acc + number));
    }
}

numbers.sumNumbersInArray([1, 1, 2, 3, 10])

console.log(numbers.sum);


// zadanie 4

let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// zadanie 5

let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350,
    engine: {
        is: true,
        count:5
        
    }
}

for(let property in car.engine){
    console.log(`${property}: ${car.engine[prop]}`)
}
console.log(car.engine);

// zadanie 6

car.type = "Sedan";
car.soundOnEngineStart = function () {
    return "Hello";
}

console.log(car.type);
console.log(car.soundOnEngineStart());
