#### Zadanie 1

Stwórz w zmienne wstawiając do każdej z nich następujące dane i wyświetl je w konsoli:

* liczbę
* string
* liczbę + string np. (2 + "dwa")
* wartość logiczną
* wartość specjalną

const num = 1,
    str = '2',
    combo = num + str,
    bool = true,
    nothing = null;

console.log(num);
console.log(str);
console.log(combo);
console.log(bool);
console.log(nothing);


#### Zadanie 2
W konsoli stwórz następujące zmienne:
* dwie zmienne mają przechowywać dowolne liczby,
* ostatnia o nazwie ```sum``` ma przechowywać liczbę 0.

Następnie wypis w konsoli sumę dwóch pierwszych zmiennych przypisując wynik do zmiennej ```sum```.

let num = 1,
    num1 = 2,
    sum = 0;

sum = num + num1;

console.log(sum);

#### Zadanie 3
W konsoli stwórz zmienną i nic do niej nie przypisuj. Wypisz ją w konsoli i powiedz skąd taki wynik.

// Zadanie 3
let num;
console.log(num); // brak przypisanej wartości do zmiennej