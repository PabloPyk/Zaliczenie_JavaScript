// 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function (age) {
        this.age = age;
    }

    this.changeCity = function (city) {
        this.city = city;
    }
}

const persons = [
    new Person('Adam', 'Kowalski', 21, 'Poland', 'Cracow', 'pl'),
    new Person('Jan', 'Nowak', 33, 'Poland', 'Cracow', 'pl'),
    new Person('Zbigniew', 'Mailto', 35, 'Poland', 'Warsaw', 'pl'),
    new Person('Ben', 'Example', 18, 'USA', 'Cracow', 'eng'),
    new Person('Dariusz', 'Noga', 61, 'Norway', 'Oslo', 'eng'),
];

console.log(persons);

persons[0].changeCity("Three city");
persons[0].changeAge(Math.floor(Math.random() * 100));
persons[1].changeCity("London");
persons[2].changeAge(Math.floor(Math.random() * 100));
persons[3].changeAge(Math.floor(Math.random() * 100));
persons[4].changeCity("Berlin");

console.log(persons);

// 2

const Calculator = {
    memory: [],
    handle(type, ...args) {
        let result = 0;
        let memory = '';

        args.forEach(arg => {
            switch (type) {
                case "-":
                    result -= arg;
                    break;
                case "+":
                    result += arg;
                    break;
                case "*":
                    result *= arg;
                    break;
                case "/":
                    result /= arg;
                    break;
                default:
                    console.error('Undefined type handle');
                    return;
            }

            memory += arg + type;
        });

        memory = memory.slice(0, memory.length - 1);
        this.memory.push(memory + "=" + result);

        return result;

    },
    clearMemory: function () {
        this.memory = [];
    },
    showMemory: function () {
        console.log(this.memory);
    },
}

Calculator.handle("*", 2, 1, 2, 3);
Calculator.handle(
    "-",
    Calculator.handle("+", 2, 1, 2, 3),
    2,
    10,
    15
);

Calculator.showMemory()
Calculator.clearMemory()

Calculator.handle("+", 2, 1);
Calculator.showMemory()

Calculator.clearMemory();
Calculator.showMemory();

// 3

function NumberGame() {
    this.changeNumber = function () {
        NumberGame.prototype.changeNumberInterval = setInterval(function () {
            NumberGame.prototype.number = Math.round(Math.random() * 10);
        }, 1000);
    };
    this.checkStopExecute = function () {
        NumberGame.prototype.checkStopExecuteInterval = setInterval(() => {
            console.log("Check stop execute for number: " + NumberGame.prototype.number);

            if (NumberGame.prototype.number <= 5) {
                return;
            }

            clearInterval(NumberGame.prototype.changeNumberInterval);
            clearInterval(NumberGame.prototype.checkStopExecuteInterval);
        }, 1000);
    };
}

const numberGame1 = new NumberGame();
const numberGame2 = new NumberGame();
numberGame1.changeNumber();
numberGame2.checkStopExecute();