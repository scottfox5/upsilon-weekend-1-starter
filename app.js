var $totalMonthly = 0;

$(function () {
  console.log('document is ready');

  //add html table and table heads
  $('#employees').append('<table></table>');
  $('table').append('<th>Name</th>');
  $('table').append('<th>ID</th>');
  $('table').append('<th>Title</th>');
  $('table').append('<th>Annual Salary</th>');

  //add monthly salary div
  $('body').append('<div id="totalMonthly">Monthly Salary Expenditures: </div>');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    addEmployee(formData);
    addSalary(formData);
    clearForm();

    // $('.deleteRowButton').click(function(){
    //   $('#deleteRowButton').remove();
    //   $('#deleteCurrentRow').siblings('td').remove();
    //   $('.employeeRow').remove();
    // })
  });
});

function addEmployee(emp) {
  var $emp = $('<tr class="employeeRow"></tr>'); // create a div jQuery object
  $emp.append('<td>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</td>'); // add our employee data
  $emp.append('<td>' + emp.employeeIdNumber + '</td>');
  $emp.append('<td>' + emp.jobTitle + '</td>');
  $emp.append('<td id="annSal">' + emp.annualSalary + '</td>');
  $emp.append('<td id="deleteCurrentRow"><button id="deleteRowButton">delete</button></td>')
  $('table').append($emp); // append our div to the DOM
}

function addSalary(emp) {
  
  var $monthlySalary = emp.annualSalary / 12;
  $totalMonthly += $monthlySalary;

  $('#totalMonthlyNumber').remove();

  $('#totalMonthly').append('<div id="totalMonthlyNumber">' + Math.round($totalMonthly) + '</div>');
}

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}
