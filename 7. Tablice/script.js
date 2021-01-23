// zadanie 1
    const tab = ["Bartek", "ma", "długopis"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );  

// zadanie 2
   const tab = ["Bartek", "ma", "długopis", 3, 5];
    console.log( tab[0] ); 
    console.log( tab[1] ); 

console.log(tab[tab.length - 1]);
        
for(let i=0;i<tab.length;i++)
    {
        console.log(tab[i]);
    }
for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});

// zadanie 3
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
//1
const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum)
//2
const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif)
//3

const avg = sum / t2.length;
console.log(avg);

//4
t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});

//5
t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});
//6
const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1])

//7
t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1])

//8
t2.reverse().forEach(el => console.log(el))

// zadanie 4
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

//Zadanie 5
function computeAverageMultiplyByEachElement(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    const avg = sum / array.length;
    array.forEach(element => {
        console.log(element * avg);
    });
}
computeAverageMultiplyByEachElement([1, 2, 3]); // 2 4 6

//Zadanie 6
function computeAverageOfEvenNumbers(array) {
    let count = 0;
    let sum = 0;
    array.forEach(element => {
        if(element % 2 == 0) {
            sum += element;
            count++;
        }
    });
    return sum / count;
}
computeAverageOfEvenNumbers([1, 3, 7, 11, 2, 8, 12]);

//Zadanie 7
function sortArray(array) {
    array.sort(function(a, b) {return a - b});
    array.forEach(element => {
        console.log(element);
    });
}
sortArray([7, 23, 1, 3, 89, 11]);

//Zadanie 8
function sumIndexesTwoArrays(arr1, arr2) {
    let iSum = 0;
    for(let i=0; i<arr1.length; i++) {
        iSum += i;
    }
    for(let i=0; i<arr2.length; i++) {
        iSum += i;
    }
    return [iSum];
}
sumIndexesTwoArrays([1, 2, 3], [24, 12]);

//Zadanie 9
const inputArray = [100, 200, 300, 400];
function returnNewArray(arr1, element) {
    const result = [];
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] === element) {
            continue;
        } else {
            result.push(arr1[i]);
        }
    }
    return result;
}
returnNewArray(inputArray, inputArray[0]);


//Zadanie 10
function returnArray(arr1) {
    const result = [];
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] > 0) {
            result.push(-Math.abs(arr1[i]));
        } else if(arr1[i] < 0) {
            result.push(Math.abs(arr1[i]));
        } else {
            result.push(arr1[i]);
        }
    }
    return result;
}
returnArray([-2, 4, -6, 8, -10]);