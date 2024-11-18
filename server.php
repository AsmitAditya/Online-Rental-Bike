<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "property_listings";


// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Endpoint to handle property listing submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $listing = json_decode(file_get_contents('php://input'), true);

    // Insert the listing into the database
    $sql = "INSERT INTO listings (location, price, wifi, ro_water, gym, library, mess, parking, sharing_private, security, laundry, images) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "siiiiiiissis",
        $listing['location'],
        $listing['price'],
        $listing['wifi'],
        $listing['ro_water'],
        $listing['gym'],
        $listing['library'],
        $listing['mess'],
        $listing['parking'],
        $listing['sharing_private'],
        $listing['security'],
        $listing['laundry'],
        $listing['images']
    );

    if ($stmt->execute()) {
        echo "Listing submitted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Close the database connection
$conn->close();

?>
