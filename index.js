const form = $('.credit-card-form');
const formDiv = $('.form-div');
const thanks = $('.thank-you-message');

// Inputs
const cardHolderName = $('#name');
const creditCardNum = $('#cardNumberInput');
const month = $('#expDateMonth');
const year = $('#expDateYear');
const cvc = $('#cvc');

// Card Preview
const namePreview = $('.name-preview');
const datePreviewMonth = $('.date-preview-month');
const slash = $('.date-preview-slash');
const datePreviewYear = $('.date-preview-year');
const cvcPreview = $('.cvc-preview');
const cardNumberPreview = $('.card-number-preview');

// Card Preview - as user types in each field it appears on card

// Name
cardHolderName.keyup(function (event) {
  namePreview.html($(this).val());
});

// // Card Number
creditCardNum.keyup(function (event) {
  cardNumberPreview.html($(this).val());
});

// // Expiration Date

// // Month

month.keyup(function (event) {
  datePreviewMonth.html($(this).val());
});

// // Year

year.keyup(function (event) {
  datePreviewYear.html($(this).val());
});

// // CVC
cvc.keyup(function (event) {
  cvcPreview.html($(this).val());
});


// Check for Errors on Submit


$('.confirm-button').on('click', function (e) {

  let error = false;
  let nameError = '';
  let monthError = '';
  let yearError = '';
  let cvcError = '';
  let ccNumError = '';

  const notifications = $('#notifications');
  const nameErrorDescr = $('#name-error');
  const numberErrorDescr = $('#number-error');
  const monthErrorDescr = $('#month-error');
  const yearErrorDescr = $('#year-error');
  const cvcErrorDescr = $('#cvc-error');

  nameErrorDescr.html('');
  numberErrorDescr.html('');
  monthErrorDescr.html('');
  yearErrorDescr.html('');
  cvcErrorDescr.html('');


  if (cardHolderName.val() === '') {
    error = true;
    nameError = '<li><a href="#name">Please enter your name.</a></li>';
    nameErrorDescr.html('Your name is missing.');
    cardHolderName.addClass('invalid-input');
  }

  // If letters are entered in the credit card number field show error message and invalid input styling

  var enteredNumber = creditCardNum.val();
  if (isNaN(enteredNumber)) {
    error = true;
    ccNumError = '<li><a href="#cardNumberInput">Please enter a valid credit card number.</a></li>';
    numberErrorDescr.html('Wrong format numbers only.');
    creditCardNum.addClass("invalid-input");
  }

  // If month is left blank show error message and invalid input styling

  if (month.val() === '') {
    error = true;
    monthError = '<li><a href="#expDateMonth">Please enter expiration date month.</a></li>';
    monthErrorDescr.html('Expiration date month is missing.');
    month.addClass('invalid-input');
  }

  // If year is left blank show error message and invalid input styling

  if (year.val() === '') {
    error = true;
    yearError = '<li><a href="#expDateYear">Please enter expiration date year.</a></li>';
    yearErrorDescr.html('Expiration date year is missing.');
    year.addClass('invalid-input');
  }

  // If cvc is left blank show error message and invalid input styling

  if (cvc.val() === '') {
    error = true;
    cvcError = '<li><a href="#cvc">Please enter cvc.</a></li>';
    cvcErrorDescr.html('Cvc is missing.');
    cvc.addClass('invalid-input');
  }

  // If there's no errors

  if (!error) {

    // Hide Form and Preview of Card Details

    formDiv.hide();
    cardNumberPreview.hide();
    namePreview.hide();
    datePreviewMonth.hide();
    datePreviewYear.hide();
    slash.hide();
    cvcPreview.hide();

    // Show Thank You Message

    notifications.addClass('thank-you-message');
    notifications.html(
      '<img class="complete-icon" src="images/icon-complete.svg" alt="">' +
      '<h1 class="thank-you" role="alert">THANK YOU!</h1>' +
      '<p class="card-details" role="alert">Your card details have been added.</p>');
  } else {

    // Show Errors List

    notifications.html(
      '<h3 class="notification-error"><span role="alert">There are errors in your form</span></h3>' + '<ul class="error-list-ul">' + nameError + monthError + yearError + ccNumError + cvcError + '</ul>');
    notifications.addClass('notifications');
  }

  // Move Focus to Notifications
  notifications.focus();
  return false;
});
