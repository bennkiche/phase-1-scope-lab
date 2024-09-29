// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare bestCustomer in global scope
  }
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Change the global bestCustomer
  }
const leastFavoriteCustomer = 'some value'; // Assign an initial value
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another value'; // This will throw an error
  }
  