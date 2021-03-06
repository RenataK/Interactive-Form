//GLOBAL VARIABLES
const name = document.getElementById('name');
const title = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

// NAME FOCUSING
name.focus();

//CREATING/HIDING OTHER JOB ROLE
otherTitle.style.display = 'none';

//JOB ROLE SECTION- Looping through the list, targeting the 'other' field and
// displaying it.
for (let i=0; i<title.length; i++) {
  title.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
      otherTitle.style.display = 'block';
    } else {
      otherTitle.style.display = 'none';
    }
  });
}

//GLOBAL VARIABLES FOR THE T-SHIRT SECTION
const colorsJsPuns = document.getElementById('colors-js-puns');
const hideSelectTheme = document.querySelector('#design option');
const color = document.getElementById('color');
const p = document.createElement('p');

//Hides the select theme
hideSelectTheme.hidden = true;

//Hides the color drop-down
color.hidden = true;

//Updating/displaying the "Please select a T-shirt theme"
p.innerHTML = 'Please select a T-shirt theme';
colorsJsPuns.append(p);

//HIDING/DISPLAYING APPROPRIATE COLORS
//Looping through the colors based on the chosen design
const design = document.getElementById('design');
const colors = document.querySelectorAll('#color option');

design.addEventListener('change', (e) => {
  if (design.value == 'js puns') {
    p.hidden = true;
    color.hidden = false;
    colors[0].style.display = 'block';
    colors[0].setAttribute('selected', 'selected')
    colors[1].style.display = 'block';
    colors[2].style.display = 'block';
    colors[3].style.display = 'none';
    colors[3].removeAttribute('selected')
    colors[4].style.display = 'none';
    colors[5].style.display = 'none';
  } else if (design.value == 'heart js') {
    p.hidden = true;
    color.hidden = false;
    colors[0].style.display = 'none';
    colors[0].removeAttribute('selected')
    colors[1].style.display = 'none';
    colors[2].style.display = 'none';
    colors[3].style.display = 'block';
    colors[3].setAttribute('selected', 'selected')
    colors[4].style.display = 'block';
    colors[5].style.display = 'block';
    document.getElementById('colors-js-puns').style.display = 'block';
  } else {
    document.getElementById('colors-js-puns').style.display = 'none';
  }
});
//ACTIVITIES SECTION
//Declaring variables for this section
const activities = document.querySelector('.activities');
let totalActivityCost = 0;
let totalCost = document.createElement('div');

//Appending the "Total $" to the bottom of the acvities section
totalCost.innerText = 'Total: $' + totalActivityCost;
activities.append(totalCost);

//Listening to the checkboxes and disabling conflicting events
//Also calculating the amount by the specific activities chosen and displaying them
const checkboxes = document.querySelectorAll('.activities input');
activities.addEventListener('change', (e) => {
  const clicked = e.target;
  const clickedCost = parseInt(clicked.getAttribute('data-cost'));

if (clicked.checked) {
   totalActivityCost += clickedCost;
  } else {
    totalActivityCost -= clickedCost;
  }
  const clickedDayAndTime = clicked.getAttribute('data-day-and-time');
  for (let i=0; i<checkboxes.length; i++) {
    const checkboxDayAndTime = checkboxes[i].getAttribute('data-day-and-time');
    if (clickedDayAndTime == checkboxDayAndTime && clicked !== checkboxes[i]) {
     if (clicked.checked) {
      checkboxes[i].disabled = true;
    }
    else {
      checkboxes[i].disabled = false;
      }
    }
  }
  totalCost.innerText = 'Total: $' + totalActivityCost;
});

//PAYMENT SECTION - VARIABLES
//Removing select payment as an option
const hideSelectPayment = document.querySelector('#payment option').remove();
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

//Hiding bitcoin and paypal options,
//and only displaying the credit card option.
creditCard.hidden = false;
paypal.hidden = true;
bitcoin.hidden = true;


payment.addEventListener('change', (e) => {
if (payment.value == 'credit card') {
  creditCard.hidden = false;
} else {
  creditCard.hidden = true;
}
});

payment.addEventListener('change', (e) => {
if (payment.value == 'bitcoin') {
  bitcoin.hidden = false;
} else  {
  bitcoin.hidden = true;
}
});

payment.addEventListener('change', (e) => {
if (payment.value == 'paypal') {
  paypal.hidden = false;
} else  {
  paypal.hidden = true;
}
});


//FORM VALIDATION- VARIABLES
const mail = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const activitiesInput = document.querySelectorAll('.activities input');

//Validating name for name field
const nameValidator = () => {
  const nameInput = name.value;
  const nameField = /^[a-zA-Z]+$/;
  if (nameInput.length > 0 && nameInput.match(nameField)) {
    name.style.border = '2px solid white';
    return true;
  } else {
    name.style.border = '2px solid red';
    return false;
  }
}

//Validating email for email field
const mailValidator = () => {
const mailInput = mail.value;
const mailField = /^[^@]+@[^@.]+\.[a-z]+$/i; //i after /
  if (mailInput.length > 0 && mailInput.match(mailField)) {
    mail.style.border = '2px solid white';
    return true;
  } else {
    mail.style.border = '2px solid red';
    return false;
  }
}

//Validating activities to make sure at least one was chosen
const activitiesValidator = () => {
for (let i=0; i<activitiesInput.length; i++) {
  if (activitiesInput[i].checked) {
    activities.style = '2px solid #5e97b0';
    return true;
  }
}
activities.style.border = '2px solid red';
    return false;
}
const ccNumValidator = () => {
const ccNumInput = ccNum.value;
const ccNumField = /^\d{13,16}$/;
  if (ccNumInput.length > 0 && ccNumInput.match(ccNumField)) {
    ccNum.style.border = '2px solid white';
    return true;
  }
    ccNum.style.border = '2px solid red';
    return false;
}

//Validating zip code
const zipCodeValidator = () => {
const zipCodeInput = zipCode.value;
const zipCodeField = /^\d{5}$/;
  if (zipCodeInput.length > 0 && zipCodeInput.match(zipCodeField)) {
    zipCode.style.border = '2px solid white';
    return true;
  }
    zipCode.style.border = '2px solid red';
    return false;
}

//Validating CVV
const cvvValidator = () => {
const cvvInput = cvv.value;
const cvvField = /^\d{3}$/;
  if (cvvInput.length > 0 && cvvInput.match(cvvField)) {
    cvv.style.border = '2px solid white';
    return true;
  }
    cvv.style.border = '2px solid red';
    return false;
}

//Displaying error indicators if user leaves a field empty or inncorrectly fills it out.
name.addEventListener('keyup', nameValidator);
name.addEventListener('blur', nameValidator);
mail.addEventListener('keyup', mailValidator);
mail.addEventListener('blur', mailValidator);
activities.addEventListener('mouseout', activitiesValidator);
ccNum.addEventListener('keyup', ccNumValidator);
zipCode.addEventListener('keyup', zipCodeValidator);
cvv.addEventListener('keyup', cvvValidator);

//Preventing page relaod
document.addEventListener('submit', (e) => {
if (!nameValidator()) {
  e.preventDefault();
}
if (!mailValidator()) {
  e.preventDefault();
  }
if (!activitiesValidator()) {
  e.preventDefault();
  }
//Only if credit card was selected this validation for the
//credit card runs.
if (payment.value == 'credit card') {
  if (!ccNumValidator()) {
    e.preventDefault();
      }
  if (!zipCodeValidator()) {
    e.preventDefault();
      }
  if (!cvvValidator()) {
    e.preventDefault();
      }
    }
});
