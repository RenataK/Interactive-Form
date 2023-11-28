//USER INFO 
const name = document.getElementById('name');
const email = document.getElementById('mail');
const title = document.getElementById('title');
const otherRole = document.getElementById('other-title');

name.focus();
otherRole.style.display = "none";

title.addEventListener('change', () => {
	if (title.value === 'other') {
		otherRole.style.display = 'block';
	} else {
		otherRole.style.display = "none";
	} 
})


//T-SHIRTS
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorsContainer = document.getElementById('colors-js-puns')

colorsContainer.style.display = 'none';

design.addEventListener('change', () => {
	if (design.value == 'js puns') {
		colorsContainer.style.display = 'block';
		color[0].style.display = 'block';
		color[0].setAttribute('selected', 'selected')
		color[1].style.display = 'block';
		color[2].style.display = 'block';
		color[3].style.display = 'none';
		color[3].removeAttribute('selected');
		color[4].style.display = 'none';
		color[5].style.display = 'none';
	} else if (design.value == 'heart js') {
		colorsContainer.style.display = 'block';
		color[0].style.display = 'none';
		color[0].removeAttribute('selected');
		color[1].style.display = 'none';
		color[2].style.display = 'none';
		color[3].style.display = 'block';
		color[3].setAttribute('selected', 'selected')
		color[4].style.display = 'block';
		color[5].style.display = 'block';
	} else {
		colorsContainer.style.display = 'none';
	}
})

//ACTIVITIES
const activities = document.querySelector('.activities');
let totalActivityCost = 0;
let totalCost = document.createElement('div');

//displaying initial total cost "Total: $0"
totalCost.innerText = `Total: $${totalActivityCost}`;
activities.append(totalCost);

const checkboxes = document.querySelectorAll('.activities input');

activities.addEventListener('change', (e) => {
	let clicked = e.target;
	let clickedCost = parseInt(clicked.getAttribute('data-cost'));

	if (clicked.checked ) {
		totalActivityCost += clickedCost; 
	} else {
		totalActivityCost -= clickedCost; 
	}
	
	let clickedDate = clicked.getAttribute('data-day-and-time');
	for (let i=0; i<checkboxes.length; i++) {
		let checkboxDate = checkboxes[i].getAttribute('data-day-and-time');
		if (clickedDate == checkboxDate && clicked !== checkboxes[i]) {
			if (clicked.checked) {
				checkboxes[i].disabled = true;
			}
			else {
				checkboxes[i].disabled = false;
			}
		}
	}
	//displaying total cost after chosen activities
	totalCost.innerText = `Total: $${totalActivityCost}`;
})


//PAYMENT
const hideSelectPayment = document.querySelector('#payment option[value="select method"]').remove();
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

creditCard.hidden = false;
paypal.hidden = true;
bitcoin.hidden = true;

payment.addEventListener('change', () => {
	if (payment.value === 'credit card') {
		creditCard.hidden = false;
		paypal.hidden = true;
		bitcoin.hidden = true;
	} else if (payment.value === 'bitcoin') {
		creditCard.hidden = true;
		paypal.hidden = true;
		bitcoin.hidden = false;
	} else if (payment.value === 'paypal') {
		paypal.hidden = false;
		creditCard.hidden = true;
		bitcoin.hidden = true;
	} 
})

//USER INFO VALIDATION
const nameValidator = () => {
	const nameInput = name.value;
	const nameRegex = /^[a-zA-Z]+$/i;
	if (nameInput.length > 0 && nameInput.match(nameRegex)) {
		name.style.border = '2px solid rgb(111, 157, 220)';
		return true;
	} else {
		name.style.border = '2px solid red';
		return false;
	}
}

//email
const emailValidator = () => {
	const emailInput = email.value;
	const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
	if (emailInput.length > 0 && emailInput.match(emailRegex)) {
		email.style.border = '2px solid rgb(111, 157, 220)';
		return true;
	} else {
		email.style.border = '2px solid red';
		return false;
	}
}

//OTHER ROLE VALIDATION
const otherRoleValidator = () => {
	const otherRoleInput = otherRole.value;
	const otherRoleRegex = /^(\b[a-zA-Z]+\b\s*){1,4}$/;
	if (title.value === 'other') {
		if (otherRoleInput.length > 0 && otherRoleInput.match(otherRoleRegex)) {
			otherRole.style.border = '2px solid rgb(111, 157, 220)';
			return true;
		} else {
			otherRole.style.border = '2px solid red';
			return false;
		}
}

	otherRole.style.border = '';
	return true;
}

//ACTIVITIES VALIDATION
const activitiesValidation = () => {
	for (let i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			activities.style.border = 'none';
			return true;
		}
	}
	activities.style.border = '2px solid red';
	return false;
}

//PAYMENT VALIDATION
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

const ccValidator = () => {
	const ccInput = ccNum.value;
	const ccRegex = /^\d{13,16}$/;
	if (ccInput.length > 0 && ccInput.match(ccRegex)) {
		ccNum.style.border = 'none';
		return true;
	}
	ccNum.style.border = '2px solid red';
	return false;
}

const zipValidator = () => {
	const zipInput = zip.value;
	const zipRegex = /^\d{5,6}$/;
	if (zipInput.length > 0 && zipInput.match(zipRegex)) {
		zip.style.border = 'none';
		return true;
	}
	zip.style.border = '2px solid red';
	return false;
}

const cvvValidator = () => {
	const cvvInput = cvv.value;
	const cvvRegex = /^\d{3}$/;
	if (cvvInput.length > 0 && cvvInput.match(cvvRegex)) {
		cvv.style.border = 'none';
		return true;
	}
	cvv.style.border = '2px solid red';
	return false;
}

name.addEventListener('keyup', nameValidator);
email.addEventListener('keyup', emailValidator);
otherRole.addEventListener('input', otherRoleValidator);
activities.addEventListener('change', activitiesValidation)
creditCard.addEventListener('keyup', ccValidator);
creditCard.addEventListener('keyup', zipValidator);
creditCard.addEventListener('keyup', cvvValidator);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	if (!nameValidator()) {
		e.preventDefault();
	} 
	if (!emailValidator()) {
		e.preventDefault();
	} 
	if (!otherRoleValidator()) {
		e.preventDefault();
	} 
	if (!activitiesValidation()) {
		e.preventDefault();
	}
	if (payment.value == 'credit card' || payment.value == 'select method') {
		if (!ccValidator()) {
			e.preventDefault();
		}
		if (!zipValidator()) {
			e.preventDefault();
		}
		if (!cvvValidator()) {
			e.preventDefault();
		}
	}
})
