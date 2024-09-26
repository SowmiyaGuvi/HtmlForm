document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let fname = document.getElementById('first-name').value;
    let lname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Get selected food choices
    let selectedFoods = [];
    let foodOptions = document.querySelectorAll('input[name="food"]:checked');
    foodOptions.forEach(food => {
        selectedFoods.push(food.value);
    });

    if (selectedFoods.length < 2) {
        alert("Please select at least two food choices.");
        return;
    }

    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    // Append form data to the table
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = fname;
    newRow.insertCell(1).innerText = lname;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = selectedFoods.join(', ');
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    // Clear the form fields
    document.getElementById('form').reset();
});