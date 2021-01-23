//Zadanie 1
	const div = document.createElement('div');
	div.textContent = 'To jest nowy element';

	document.querySelector('#root').appendChild(div);
	
	
//Zadanie 2
	const ul = document.createElement('ul');
	const fruits = ['Pomarańcz', 'Jabłko', 'Gruszka', 'Truskawka', 'Banan', 'Mandarynka'];
	for(let i=0; i<6; i++) {
		const li = document.createElement('li');
		li.textContent = fruits[i];
		ul.appendChild(li);
	}
	document.querySelector('#root').appendChild(ul);
	
//Zadanie 3
	window.addEventListener('load', function() {
		const li = document.querySelectorAll('#root ul:nth-child(2) > li');
		const result = [];
		for(let i=0; i<li.length; i++) {
			if(i % 2 == 0) {
				li[i].remove();
			}
		}
	});

//Zadanie 4
	const root=document.querySelector('#root');
	const button=document.createElement("button");
	button.innerHTML="delete";
	root.appendChild(button);
	button.addEventListener('click', function(){
	  button.remove();
	});
	
	
//Zadanie 5
	const root=document.querySelector('#root');
	const random= Math.floor(Math.random()*10);

	for(let number=0; number<random; number++){
	  let div= document.createElement("div");
	  div.innerHTML="div numer "+number;
	  root.appendChild(div);
	}
	
//Zadanie 6
	const root=document.querySelector('#root');

	const div1=document.createElement('div');
	div1.innerHTML="to jest div";

	const div2=document.createElement('div');
	div2.innerHTML="to jest div";

	const div3=document.createElement('div');
	div3.innerHTML="to jest div";

	const span1=document.createElement('span');
	span1.innerHTML="to jest span";

	const span2=document.createElement('span');
	span2.innerHTML="to jest span";

	root.appendChild(div1);
	root.appendChild(span1);
	root.appendChild(div2);
	div2.appendChild(div3);
	root.appendChild(span2);
	
	
//Zadanie 7

	const listValues = [1, 2, 3, 4, 5, 6];

	const newDivList = document.createElement('div');

	const listA = document.createElement('ul');
	const listB = document.createElement('ul');

	listValues.forEach((element) => {
		const listAElement = document.createElement('li');
		listAElement.innerText = element;

		listA.append(listAElement);
	});

	const buttonA = document.createElement('button');
	buttonA.innerText = 'Dla listy A';

	buttonA.addEventListener('click', () => {
		listB.append(listA.lastElementChild);

		buttonB.disabled = false;

		if (!listA.children.length) {
			buttonA.disabled = true;
		}
	});

	const buttonB = document.createElement('button');
	buttonB.innerText = 'Dla listy B';

	buttonB.addEventListener('click', () => {
		listA.append(listB.lastElementChild);

		buttonA.disabled = false;

		if (!listB.children.length) {
			buttonB.disabled = true;
		}
	});

	buttonB.disabled = true;

	newDivList.append(listA);
	newDivList.append(buttonA);
	newDivList.append(listB);
	newDivList.append(buttonB);

	document.body.append(newDivList, document.getElementById('root'));
	
//Zadanie 8
	document.getElementById('ex8-button').addEventListener('click', (event) => {
		const newDiv = document.createElement('div');

		for (let i = 0; i < parseInt(document.getElementById('ex8-count').value); ++i) {
			const newElement = document.createElement(
				document.getElementById('ex8-what').value
			);

			newElement.style.color = document.getElementById('ex8-color').value;
			newElement.innerText = document.getElementById('ex8-value').value;

			newDiv.append(newElement);
		}

		document.body.append(newDiv, document.getElementById('root'));

		event.stopPropagation();
	});
	
//Zadanie 9
	const tableDiv = document.createElement('div');
	document.querySelector('#root').appendChild(tableDiv);

	function createFormFields(element, content) {
		const nameDiv = document.createElement(element);
		nameDiv.textContent = content;
		tableDiv.appendChild(nameDiv);
		return nameDiv;
	}

	function createInputs(elementTo) {
		const nameInput = document.createElement('input');
		nameInput.setAttribute('type', 'text');
		elementTo.appendChild(nameInput);
		return nameInput;
	}

	const nameDiv = createFormFields('div', 'Imię');
	const nameInput = createInputs(nameDiv);

	const surnameDiv = createFormFields('div', 'Nazwisko');
	const surnameInput = createInputs(surnameDiv);

	const ageDiv = createFormFields('div', 'Wiek');
	const ageInput = createInputs(ageDiv);

	const childrenNumberDiv = createFormFields('div', 'Ilość dzieci');
	const childrenNumberInput = createInputs(childrenNumberDiv);

	const moreButton = createFormFields('button', 'Więcej');

	function clearInputs() {
		nameInput.value = '';
		surnameInput.value = '';
		ageInput.value = '';
		childrenNumberInput.value = '';
	}

	function addTd(input, tr) {
		const nameTd = document.createElement('td');
		nameTd.textContent = input.value;
		tr.appendChild(nameTd);
		return nameTd;
	}

	function createDeleteButton(tr) {
		const deleteTd = document.createElement('td');
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Usuń';
		deleteTd.appendChild(deleteButton);
		tr.appendChild(deleteTd);
		return deleteButton;
	}

	validateInputs(nameInput, surnameInput, ageInput, childrenNumberInput);

	moreButton.addEventListener('click', function() {
		const table = document.getElementsByTagName('table')[0]; 
		if(table !== undefined) {
			const tr = document.createElement('tr');
			table.appendChild(tr);

			addTd(nameInput, tr);
			addTd(surnameInput, tr);
			addTd(ageInput, tr);
			addTd(childrenNumberInput, tr);

			const deleteButton = createDeleteButton(tr);

			deleteButton.addEventListener('click', function() {
				table.removeChild(tr);
			}, false);

			clearInputs();
		} 
	}, false);

	const createTableButton = createFormFields('button', 'Utwórz');

	function addTh(div, tr) {
		const nameTh = document.createElement('th');
		nameTh.textContent = div.textContent;
		tr.appendChild(nameTh);
		return nameTh;
	}

	createTableButton.addEventListener('click', function() {
		const table = document.createElement('table');
		table.style.border = '1px solid black';
		tableDiv.appendChild(table);

		const headerTr = document.createElement('tr');
		table.appendChild(headerTr);

		addTh(nameDiv, headerTr);
		addTh(surnameDiv, headerTr);
		addTh(ageDiv, headerTr);
		addTh(childrenNumberDiv, headerTr);

		const deleteTh = document.createElement('th');
		deleteTh.textContent = 'Usuń';
		headerTr.appendChild(deleteTh);

		const firstRowTr = document.createElement('tr');
		table.appendChild(firstRowTr);

		addTd(nameInput, firstRowTr);
		addTd(surnameInput, firstRowTr);
		addTd(ageInput, firstRowTr);
		addTd(childrenNumberInput, firstRowTr);

		const deleteButton = createDeleteButton(firstRowTr);

		deleteButton.addEventListener('click', function() {
			table.removeChild(firstRowTr);
		}, false);

		clearInputs();
	}, false);

//Zadanie 10
	function validateInputs(nameInput, surnameInput, ageInput, childrenNumberInput) {
		nameInput.addEventListener('change', function() {
			if(/[a-zA-Z]+/g.test(nameInput.value)) {
				nameInput.value = nameInput.value.substring(0, 1).toUpperCase() + nameInput.value.substring(1);
			} else {
				console.log('Its not a name!');
			}
		});

		surnameInput.addEventListener('change', function() {
			if(/[a-zA-Z]+/g.test(surnameInput.value)) {
				surnameInput.value = surnameInput.value.substring(0, 1).toUpperCase() + surnameInput.value.substring(1);
			} else {
				console.log('Its not a surname!');
			}
		});

		ageInput.addEventListener('change', function() {
			if(!/\d{1,3}/g.test(ageInput.value)) {
				console.log('Its not a age!');
			}
		});

		childrenNumberInput.addEventListener('change', function() {
			if(!/\d{1,3}/g.test(childrenNumberInput.value)) {
				console.log('Its not a children number!');
			}
		});
	}
		
//Zadanie 11

	function checkNumbers(str) {
		let sum = 0;
		let multiply = 1;
		for(let i=0; i<str.length; i++) {
			if(/\d/.test(str.charAt(i))) {
				sum += Number(str.charAt(i));
				multiply *= Number(str.charAt(i));
			}
		}
		console.log(sum);
		for(let i=0; i<multiply; i++) {
			const div = document.createElement('div');
			div.textContent = str;
			document.querySelector('#root').appendChild(div);
		}
	}

	checkNumbers('Sie6man4k2o');
	
//Zadanie 12
	let root=document.querySelector('#root');

	function checkAla(string){
	  var object={};
	  object.text=string;
	  object.find=function(){
		
		if(this.text.indexOf('Ala')>-1){
		   this.text.replace("Ala","Ola");
		   }
		else{
		  let divAla=document.createElement('div');
		  divAla.innerHTML="Słowo Ala nie występuje w tekście.";
		  root.appendChild(divAla);
		}
	  }
	  object.find();
	}checkAla("Piękna jest pogoda");


//Zadanie 13
	let root=document.querySelector('#root');
	var x=["jest","ladna","pogoda"];

	function function1(x){
	  var array=[];
	  for(var i=0;i<x.length;i++){
		array[i]=x[i].length;
	  }
	 return array;
	}

	var result1=function1(x);

	function function2(result1){
	  var sum=0;
	  for(var i=0;i<result1.length;i++){
		sum+=result1[i];
	  }
	  return sum;
	}
	var result2=function2(result1);

	function function3(result1,result2){
	  return result2/result1.length;
	}
	console.log(function3(result1,result2));

//Zadanie 14
	let object14 = {
		name: '', 
		surname: '', 
		age: ''
		};
		
	let button1;
	function set(object){
	  object.name="Pawel";
	  object.surname="Struzik";
	  object.age='22';
	  
	  object.nameLength=object.name.length;
	  object.surnameLength=object.surname.length;
	  object.ageLength=object.age.length;
	  
	  if(object.nameLength>5 || object.surnameLength>5 || object.ageLength>5){
		button1=document.createElement('button');
		button1.innerHTML="CLEAR";
		root.appendChild(button1);
	  }
	}
	set(object14);
	console.log(object14);
	  if(document.querySelector('button')){
		button1.addEventListener('click',function(){
		  object14 = {name: '', surname: '', age: ''};
		  console.log(object14);
	  });
	}
