 // Zadanie 1.
    console.log(document.querySelector('#buz').parentElement);
    console.log(document.querySelector('#baz').previousElementSibling);
    console.log(document.querySelector('#foo').children);
    console.log(document.querySelector('#foo').parentElement);
    console.log(document.querySelector('#foo').children[0]);
    console.log((function() {
        let foo = document.querySelector('#foo');
        let fooChilds = foo.children;
        let numOfChilds = fooChilds.length - 1;
        let middleElementNum = Math.round(numOfChilds / 2);

        return fooChilds[middleElementNum];
    })());

    // Zadanie 2.
    let addClickEvent = function(elementId) {
        let element = document.querySelector(`#${elementId}`);

        element.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }

    addClickEvent('ex2');

    // Zadanie 3.
    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

    // Zadanie 4.
		function changeColor() { 
	let buttons = document.querySelectorAll('#ex3 button');
	buttons.forEach(element => { 
	element.addEventListener('click', () => {
		let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	element.parentElement.style.backgroundColor = randomColor;
	})})
	}

    changeColor();

    // Zadanie 5.
		function changeColor() {
		var element = document.getElementById('ex5');
		element.querySelectorAll('div').forEach((div) => {
			div.onmouseover = () => {
				//var elem = element.querySelectorAll('ul li:first-child');
				//var elem = element.querySelectorAll('ul li:last-child');
				//var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
				//var elem = element.querySelectorAll('ul li');
				var elem = element.querySelectorAll('ul');
			   
				elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
			};
		
		});
	}
	changeColor();

    
    // Zadanie 6.
    let first = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
    let second = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    let third = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
