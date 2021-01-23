//Zadanie 1
    let array = [];
function function1(elements) {
    elements.forEach( el => {
        array.push(el.tagName);
    })
    console.log(array);
    return array;
}

const elements = [...document.querySelectorAll('.more-divs')];
function1(elements);


// Zadanie 2.
    function function2(element) {
        console.log(element.innerHTML);
        console.log(element.outerHTML);
        console.log([...element.classList].join(', '));
        console.log([...element.classList]);
        console.log(element.dataset)
    }

    function2(document.querySelector('.short-list'));
	
// Zadanie 3


	var x = document.querySelector('#datasetCheck');
	var array=[x.dataset.numberone, x.dataset.numbertwo, x.dataset.numberThree];

	function show(array) {
	  var add=0;
	  var sub=0;

		array.forEach((e) => {
		  add += parseInt(e);
		  sub -= parseInt(e);
		})
		console.log(add, sub);
	}
	show(array);
	
// Zadanie 4
	document.querySelector('#spanText').textContent="Zmień tekst w elemencie";


// Zadanie 5
	document.querySelector('#spanText').classList.add('klasa');
	
// Zadanie 6
	function doSomething(classList)
    {
        let arr = [...classList];

        arr.forEach((element) => console.log(element));
        console.log(arr.join('+'));
    }

    let el = document.querySelector('#classes');
    doSomething(el.classList);
    el.classList = '';
    console.log('Usunięto wszystkie klasy.');


// Zadanie 7
	var x=document.querySelectorAll("#longList li");
	function add(x){
	  x.forEach(element =>{
		if(!element.hasAttribute('data-text')) {
				element.dataset.text = 'text';
			}
	  })
	  
	}
	add(x);


// Zadanie 8
	var text="tekst byle jaki";
	function first(text){
	  Object = {
		newClass: text,
	  }
	  second(Object);
	}
	function second(){
	  var i=Object.NewClass;
	  document.querySelector('#myDiv').classList.add(i);
	}


// Zadanie 9
	var x= document.querySelector('#numbers');

	var random=Math.floor(Math.random()*10);
	function add(random){
	  if(random%2==0){
		x.classList.add="even";
	  }
	  else{
		x.classList.add="odd";
	  }
	}
	console.log(x);



// Zadanie 10
	var longList = document.querySelector('#longList');
	var li = longList.querySelectorAll('li');

	function createArray(longList) {
		let array = [];
		li.forEach(function(element) {
			array.push(element.innerText);
		  });
	 return array;
	}console.log(createArray(longList));


// Zadanie 11
	var longList = document.querySelector('#longList').children;

	function givChildren(longList) {
			var arrayChildren = [...longList];

			  arrayChildren.forEach(function(element) {
				var rand = Math.round(Math.random() * 10);
				element.dataset.oldValue = element.innerText;
				element.innerText = rand;
			});        
		}
	 givChildren(longList);
