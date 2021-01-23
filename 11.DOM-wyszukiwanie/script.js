// Zadanie 1.
    let task1 = document.querySelectorAll('.list');

    // Zadanie 2.
    let findTags = function(tagName) {
        return document.querySelectorAll(tagName);
    }
    let task2 = findTags('ul');

    // Zadanie 3.
    let task3 = document.querySelector('#list');

    // Zadanie 4.
    let printElements = (elements) => console.log(elements);

    let one = document.querySelectorAll('li');
    let two = document.querySelectorAll('ul');
    let three = document.querySelectorAll('span');
    let four = document.querySelectorAll('div.list > span');
    let five = document.querySelectorAll('div#spans > span');

    printElements(one);
    printElements(two);
    printElements(three);
    printElements(four);
    printElements(five);
});