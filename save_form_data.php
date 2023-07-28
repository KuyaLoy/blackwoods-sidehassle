<?php
// Get the form data from the AJAX request
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$website = $_POST['website'];
$budget = $_POST['budget'];
$message = $_POST['message'];

// Create a data array with the form data
$data = array(
    $fullName,
    $email,
    $website,
    $budget,
    $message
);

// Define the path to the CSV file
$csvFilePath = 'form_data.csv';

// If the CSV file doesn't exist, add headers
if (!file_exists($csvFilePath)) {
    $headers = array('Full Name', 'Email', 'Website', 'Budget', 'Message');
    $csvRow = '"' . implode('","', $headers) . '"' . PHP_EOL;
    file_put_contents($csvFilePath, $csvRow, LOCK_EX);
}

// Generate the CSV row data
$csvRow = '"' . implode('","', $data) . '"' . PHP_EOL;

// Append the data to the CSV file
file_put_contents($csvFilePath, $csvRow, FILE_APPEND | LOCK_EX);

// Send a response back to the client (optional)
echo 'Form data has been saved to CSV file.';
?>