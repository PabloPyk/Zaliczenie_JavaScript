	 // Zadanie 1
	 
		document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
		document.addEventListener('mousemove', (event) => console.log(event));
		document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
		document.addEventListener('keypress', (event) => console.log(event));
		document.addEventListener('scroll', (event) => console.log(event));
		document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));

	// Zadanie 2

		document.querySelector('#ex2').addEventListener('click', (event) => {
				let text = event.target.dataset.text;
				let newTarget = event.target.nextElementSibling;

				newTarget.innerText = text;
			});
		
	// Zadanie 3

		document.querySelector('#ex3').addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'blue');
		document.querySelector('#ex3').addEventListener('mouseout', (event) => event.target.style.backgroundColor = 'red');
		
	//Zadanie 4
		function validateInput() {
			const regexp = /\d+/g;
			const input = document.getElementById('input-test');
			const span = document.getElementById('ex3-err');
			input.addEventListener('change', function(event) {
				if(regexp.test(input.value)) {
					span.textContent = 'You can not input numbers!';
				}else {
					span.textContent = '';
				}
			});
		}
		validateInput();	
		
	//Zadanie 5
		function countClicks() {
			let counter = 0;
			const span = document.getElementById('span-ex2');
			const button = document.getElementById('ex2');

			let handler = function() {
				counter++;
				span.textContent = counter;
				if(counter === 11) {
					span.textContent = '';
					this.removeEventListener('click', handler);
				}
			}
			button.addEventListener('click', handler);
		}
		countClicks();

	//Zadanie 6
		function controlScroll() {
			window.addEventListener('scroll', function() {
				let scrollValue = this.scrollY;
				if(scrollValue > 200) {
					window.document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
				} else {
					window.document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
				}
			}, false);
		}
		controlScroll();
		
		
		
	//Zadanie 7
	
	let calculatorInput = document.querySelector('#calculator > input');
	let nextClickIsEval = false;
	let nextClickIsClear = false;
	var array=['/', '*', '+', '-'];

		document.querySelectorAll('#calculator > div > button').forEach((element) => {
			element.addEventListener('click', (event) => {
				if (nextClickIsClear == true) {
					calculatorInput.value = "";
					nextClickIsClear = false;
				}

				calculatorInput.value = calculatorInput.value + event.target.innerText;

				if (nextClickIsEval == true) {
					calculatorInput.value = eval(calculatorInput.value);
					nextClickIsEval = false;
					nextClickIsClear = true;
				}

				if (array.includes(event.target.innerText)) {
					nextClickIsEval = true;
				}
			});
		});