// Zadanie 1
class Person {
    constructor(name, surname, age, country, city) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    getInfo() {
        console.log("name: " + this.name + ", surname: " + this.surname + ", age: " + this.age + ", country: " + this.country + ", city: " + this.city);
    }

    increaseAge() {
        this.age++;
    }
}

const person1 = new Person('Paweł', 'Struzik', 25, 'Poland', 'Cracow');
const person2 = new Person('Jan', 'Kowalski', 22, 'Poland', 'Warsaw');

person1.increaseAge();
person1.increaseAge();

person2.increaseAge();
person2.increaseAge();
person2.increaseAge();

//Zadanie 2
Person.prototype.favoriteFoods = [];
Person.prototype.showFavoriteFoods = function() {
    for(let i=0; i<this.favoriteFoods.length; i++) {
        console.log(this.favoriteFoods[i]);
    }
}

Person.prototype.addFoods = function(newFood) {
    this.favoriteFoods.push(newFood);
}

person1.favoriteFoods = [];
person1.addFoods('Pizza');
person1.addFoods('Banana');

person2.favoriteFoods = [];
person2.addFoods('Kebab');
person2.addFoods('Orange');
person2.addFoods('Eggs');

person1.showFavoriteFoods();
person2.showFavoriteFoods();


// Zadanie 3
let calc = {
    a: 0,
    b: 0,
    setA: function(a) {
        this.a = a;
    },
    setB: function(b) {
        this.b = b;
    },
    sum: function() {
        return this.a + this.b;
    },
    substract: function() {
        return this.a - this.b;
    },
    multiply: function() {
        return this.a * this.b;
    },
    divide: function() {
        if (this.b == 0) {
            console.error("Liczba B nie moze byc zerem.");
            return;
        }

        return this.a / this.b;
    }
};


// Zadanie 4
let ladder = {
    currentStep: 0,
    moveUp: function() {
        this.currentStep++;
    },
    moveDown: function() {
        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.info("Jesteś juz na samym dole.");
            return;
        }

        this.currentStep--;
    },
    writeCurrentStep: function() {
        console.log(`Aktualny stopień to: ${this.currentStep}`);
    }
};