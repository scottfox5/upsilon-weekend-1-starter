$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);

    clearForm();
  });
});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object

  $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  $emp.append('<p>' + emp.employeeIdNumber + '</p>');

  $('#employees').append($emp); // append our div to the DOM
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}
