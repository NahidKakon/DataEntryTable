// Array to store all form data entries
let allEntries = [];

function exportToCSV() {
    // Get form data
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);
   
    // Create an entry with current form data
    const entry = {
        Contract_ID: formData.get('Contract ID'),
        Theme_Name: formData.get('Theme Name'),
        Reference: formData.get('Reference'),
        Activity_Name: formData.get('Activity Name'),
        Activity_Description: formData.get('Activity Description'),
        Proxy_Unit: formData.get('Proxy Unit'),
        Proxy_Value_Per_Unit: formData.get('Proxy Value (Per Unit)'),
        status: formData.get('status'),
        Commited_Units: formData.get('Commited Units'),
        Commited_Value_Per_Activity: formData.get('Commited Value Per Activity'),
        Delivered_Units: formData.get('Delivered Units'),
        Delivered_Value_Per_Activity: formData.get('Delivered Value Per Activity'),
        Start_Date: formData.get('Start Date'),
        End_Date: formData.get('Start Date'),
        Evidence_Description: formData.get('Evidence Description')

    };
    
    // Add the entry to the allEntries array
    allEntries.push(entry);
    
    // Convert all entries to CSV format
    const headers = ['Contract ID', 'Theme Name', 'Reference', 'Activity Name', 'Activity Description', 'Proxy Unit', 'Proxy Value (Per Unit)', 'status', 'Commited Units', 'Commited Value Per Activity', 'Delivered Units', 'Delivered Value Per Activity', 'Start Date', 'End Date', 'Evidence Description'];
    const rows = allEntries.map(entry => [
        entry.Contract_ID,
        entry.Theme_Name,
        entry.Reference,
        entry.Activity_Name,
        entry.Activity_Description,
        entry.Proxy_Unit,
        entry.Proxy_Value_Per_Unit,      
        entry.status,
        entry.Commited_Units,
        entry.Commited_Value_Per_Activity,
        entry.Delivered_Units,
        entry.Delivered_Value_Per_Activity,
        entry.Start_Date,
        entry.End_Date,
        entry.Evidence_Description
    ].join(','));
    
    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows].join('\n');
    
    // Create a Blob from the CSV string
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a download link and trigger a download
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'form_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optionally, clear the form after submission
    form.reset();
}


// Explanation:
// HTML Structure:

// The form includes text inputs, number inputs, and dropdown selections (<select> elements) for collecting user data.
// Fields include Name, Email, Country (dropdown), Age, and Gender (dropdown).
// JavaScript Functionality:

// Data Collection: The exportToCSV() function gathers all data from the form, including both dropdown selections and input fields.
// Data Storage: The form data is stored as objects in the allEntries array.
// CSV Generation: The allEntries array is converted to CSV format. Each entry becomes a row, and the CSV file includes all entries made so far.
// Download CSV: The CSV file is generated and made available for download every time the user submits the form.
// Form Reset:

// The form is reset after each submission, so users can enter new data without having to refresh the page.
// Usage:
// Adding Data: Users can input data and click "Add to CSV" to append it to the CSV file.
// Creating a Database: Each new submission adds a new row to the CSV, effectively building a database over time.

// Array to store all form data entries

//template below to follow: 

// let allEntries = [];

// function exportToCSV() {
//     // Get form data
//     const form = document.getElementById('dataForm');
//     const formData = new FormData(form);
    
//     // Create an entry with current form data
//     const entry = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         country: formData.get('country'),
//         age: formData.get('age'),
//         gender: formData.get('gender')
//     };
    
//     // Add the entry to the allEntries array
//     allEntries.push(entry);
    
//     // Convert all entries to CSV format
//     const headers = ['Name', 'Email', 'Country', 'Age', 'Gender'];
//     const rows = allEntries.map(entry => [
//         entry.name,
//         entry.email,
//         entry.country,
//         entry.age,
//         entry.gender
//     ].join(','));
    
//     // Combine headers and rows
//     const csvContent = [headers.join(','), ...rows].join('\n');
    
//     // Create a Blob from the CSV string
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
//     // Create a download link and trigger a download
//     const link = document.createElement('a');
//     const url = URL.createObjectURL(blob);
//     link.setAttribute('href', url);
//     link.setAttribute('download', 'TOMsData.csv');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
    
//     // Optionally, clear the form after submission
//     form.reset();
// }

function appendNumber(number) {
    const display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById("display");
    display.value += operator;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// For calculator

$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });

  document.getElementById("calculator").addEventListener("click", function(event){
    event.preventDefault(); 
  
    window.location.href = "indexn1.html"; // Redirect after submission
  });

//   document.getElementById("signUpBtn").addEventListener("click", function(event){
//     event.preventDefault();
//     window.location.href = "Signup.html"; // Redirect to the signup page
//   }); 

function appendNumber(number) {
    const display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById("display");
    display.value += operator;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
