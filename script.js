
// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        result.style.color = "red";
        result.innerHTML = "Please fill all fields.";

    }

    // Validate email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        result.style.color = "red";
        result.innerHTML = "Please enter a valid email address.";

    }

    // Successful submission
    else {

        result.style.color = "green";
        result.innerHTML = "Form submitted successfully!";

        document.getElementById("contactForm").reset();

    }

});
