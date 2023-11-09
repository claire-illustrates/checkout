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
  let numberError = '';
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

  // name field
  if (cardHolderName.val() === '') {
    error = true;
    nameError = '<li><a href="#name">Please enter your name.</a></li>';
    nameErrorDescr.html('Your name is missing.');
    creditCardNum.addClass('invalid-input');
  }

  // card number

  // Empty Field Warning
  if (creditCardNum.val() === '') {
    error = true;
    numberError = '<li><a href="#cardNumberInput">Please enter your credit card number.</a></li>';
    numberErrorDescr.html('Your credit card number is missing.');
    cardHolderName.addClass('invalid-input');
  }

    // Wrong Format Warning
    var enteredNumber = creditCardNum.val();
    if (isNaN(enteredNumber)) {
      error = true;
      ccNumError = '<li><a href="#cardNumberInput">Please enter a valid credit card number.</a></li>';
      numberErrorDescr.html('Wrong format numbers only.');
      creditCardNum.addClass("invalid-input");
    }

  // month

  // Empty Field Warning
  if (month.val() === '') {
    error = true;
    monthError = '<li><a href="#expDateMonth">Please enter expiration date month.</a></li>';
    monthErrorDescr.html('Expiration date month is missing.');
    month.addClass('invalid-input');
  }

    // Format Warning
    var enteredMonth = month.val();
    var maxLength = 2;
    if (isNaN(enteredMonth)) {
      error = true;
      monthError = '<li><a href="#expDateMonth">Please enter month in format 00.</a></li>';
      monthErrorDescr.html('Wrong format numbers only.');
      month.addClass("invalid-input");
    }
    if (enteredMonth > maxLength) {
      error = true;
      monthError = '<li><a href="#expDateMonth">Please enter month in format 00.</a></li>';
      monthErrorDescr.html('Maximum of 2 characters can be entered.');
      month.addClass("invalid-input");
    }

  // year

  // Empty Field Warning
  if (year.val() === '') {
    error = true;
    yearError = '<li><a href="#expDateYear">Please enter expiration date year.</a></li>';
    yearErrorDescr.html('Expiration date year is missing.');
    year.addClass('invalid-input');
  }

  // Format Warning
  var enteredYear = year.val();
  var maxLength = 2;
  if (isNaN(enteredYear)) {
    error = true;
    yearError = '<li><a href="#expDateYear">Please enter year in format 00.</a></li>';
    yearErrorDescr.html('Wrong format numbers only.');
    year.addClass("invalid-input");
  }
  if (enteredYear > maxLength) {
    error = true;
    yearError = '<li><a href="#expDateYear">Please enter year in format 00.</a></li>';
    yearErrorDescr.html('Maximum of 2 characters can be entered.');
    year.addClass("invalid-input");
  }

  // cvc

  //Empty Field Warning
  if (cvc.val() === '') {
    error = true;
    cvcError = '<li><a href="#cvc">Please enter cvc.</a></li>';
    cvcErrorDescr.html('Cvc is missing.');
    cvc.addClass('invalid-input');
  }

  // Format Warning
  var enteredCvc = cvc.val();
  var maxLength = 3;
  if (isNaN(enteredCvc)) {
    error = true;
    cvcError = '<li><a href="#cvc">Please enter cvc in format 000.</a></li>';
    cvcErrorDescr.html('Wrong format numbers only.');
    cvc.addClass("invalid-input");
  }
  if (enteredCvc > maxLength) {
    error = true;
    cvcError = '<li><a href="#cvc">Please enter cvc in format 000.</a></li>';
    cvcErrorDescr.html('Maximum of 3 characters can be entered.');
  cvc.addClass("invalid-input");
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
      '<h1 class="thank-you">THANK YOU!</h1>' +
      '<p class="card-details" role="alert">Your card details have been added.</p>');
  } else {

    // Show Errors List

    notifications.html(
      '<h2 class="notification-error"><span role="alert">There are errors in your form</span></h2>' + '<ul class="error-list-ul">' + nameError + numberError + monthError + yearError + ccNumError + cvcError + '</ul>');
    notifications.addClass('notifications');
  }

  // Move Focus to Notifications
  notifications.focus();
  return false;
});
