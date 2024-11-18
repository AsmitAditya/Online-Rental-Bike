document.getElementById('logo').addEventListener('click', function() {
    // Handle logo click
    alert('Logo clicked!');
  });

 

// JavaScript function to create star rating
function createStarRating(elementId, rating) {
  const ratingContainer = document.getElementById(elementId);
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.innerHTML = i <= rating ? "&#9733;" : "&#9734;";
    ratingContainer.appendChild(star);
  }
}

// JavaScript function for adding to wishlist
function addToWishlist(propertyId) {
  // Add your logic here for adding to the wishlist
  alert("Added to wishlist: Property ID " + propertyId);
}


// JavaScript function to dynamically create content cards
function createContentCards() {
  const contentCardsContainer = document.getElementById("content-cards");

  // Sample data, replace with your actual data
  const properties = [
    { id: 1, title: "Property 1", rating: 4, category: "Apartment", price: "$1,200/month", imageUrl: "Room.jpg" },
    { id: 2, title: "Property 2", rating: 3, category: "House", price: "$1,500/month", imageUrl: "Property.jpeg" },
    { id: 3, title: "Property 3", rating: 5, category: "1BHK", price: "$1,800/month", imageUrl: "flat.jpeg" },
    { id: 4, title: "Property 4", rating: 4, category: "2BHK", price: "$1,300/month", imageUrl: "Room.jpg" },
    { id: 5, title: "Property 5", rating: 5, category: "1RK", price: "$1,100/month", imageUrl: "Property.jpeg" },
    { id: 6, title: "Property 6", rating: 4, category: "Shop", price: "$1,900/month", imageUrl: "flat.jpeg" },
    // Add more properties as needed
  ];

  properties.forEach(property => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = `
      <img src="${property.imageUrl}" alt="Property Image" class="card-image">
      <div class="details">
        <h3>${property.title}</h3>
        <div class="rating" id="rating-${property.id}"></div>
        <p>Category: ${property.category}</p>
        <p>Price: ${property.price}</p>
        <button class="enquiry-btn">Enquiry</button>
        <button class="wishlist-btn" onclick="addToWishlist(${property.id})">&#10084; Wishlist</button>
      </div>
    `;

    card.innerHTML = cardContent;
    contentCardsContainer.appendChild(card);

    // Create star rating for each card
    createStarRating(`rating-${property.id}`, property.rating);
     // Apply the transition effect on hover
     card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
}

// Call the function to create dynamic content cards
createContentCards();
// Add this JavaScript for the login popup functionality
// Function to open the login popup
function openLoginPopup() {
  var loginPopup = document.getElementById("loginPopup");
  loginPopup.style.display = "block";
}

// Function to close the login popup
function closeLoginPopup() {
  var loginPopup = document.getElementById("loginPopup");
  loginPopup.style.display = "none";
}

// Function to send OTP
function sendOtp() {
  // Add your logic to send OTP
}

// Function to handle mobile number input
function handleMobileNumberInput() {
  // Add your logic to handle mobile number input
}

// Function to perform login
function login() {
  // Add your login logic
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function submitForm() {
  const propertyForm = document.getElementById("propertyForm");

  // Get form data
  const location = propertyForm.elements.location.value;
  const price = propertyForm.elements.price.value;
  const wifi = propertyForm.elements.wifi.checked;
  const roWater = propertyForm.elements.roWater.checked;
  const gym = propertyForm.elements.gym.checked;
  const library = propertyForm.elements.library.checked;
  const mess = propertyForm.elements.mess.checked;
  const parking = propertyForm.elements.parking.checked;
  const sharingPrivate = propertyForm.elements.sharingPrivate.value;
  const security = propertyForm.elements.security.checked;
  const laundry = propertyForm.elements.laundry.checked;
  const imagesInput = propertyForm.elements.images;
  const images = Array.from(imagesInput.files);

  // For demo purposes, log the form data to the console
  console.log("Location:", location);
  console.log("Price:", price);
  console.log("WiFi:", wifi);
  console.log("RO Water:", roWater);
  console.log("Gym:", gym);
  console.log("Library:", library);
  console.log("Mess:", mess);
  console.log("Parking:", parking);
  console.log("Sharing/Private:", sharingPrivate);
  console.log("Security:", security);
  console.log("Laundry:", laundry);
  console.log("Images:", images);


  // Add logic to send the form data to the backend for storage
  // This is where you'd typically make an API request to your server
}
function modifyListing() {
  const listingId = document.getElementById("listingId").value;

}
function deactivateListing() {
  const listingId = document.getElementById("listingId").value;

  // Add logic to update the database to deactivate the listing based on listingId
  // This can be done by updating a "status" column to mark the listing as deactivated
}
function showRegistration() {
  // Add your logic to show the registration popup
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide the Scroll to Top button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// JavaScript to dynamically update counts
let customerCount = 0;
let accommodationCount = 0;
let citiesCount = 0;
let savingsCount = 0;

function updateCounts() {
  // Update the counts with your actual data
  customerCount = 1000; // Replace with the actual number of customers
  accommodationCount = 2000; // Replace with the actual number of accommodations
  citiesCount = 50; // Replace with the actual number of cities in India
  savingsCount = 50000; // Replace with the actual savings amount

  // Update the HTML elements with the counts
  document.getElementById("customerCount").innerText = customerCount.toLocaleString();
  document.getElementById("accommodationCount").innerText = accommodationCount.toLocaleString();
  document.getElementById("citiesCount").innerText = citiesCount.toLocaleString();
  document.getElementById("savingsCount").innerText = "₹" + savingsCount.toLocaleString();
}

// Call the function to update counts
updateCounts();



