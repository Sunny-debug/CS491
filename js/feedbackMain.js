const presentContainer = document.querySelector('#presents');
const titleContainer = document.querySelector('#title');
const app = new App(presentContainer, titleContainer);

function validateForm() {
  // Get the input values
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = document.getElementById("comments").value.trim();

  // Validate the input values
  if (name === "" || address === "" || phone === "" || email === "" || comments === "") {
    alert("Please fill out all fields.");
    return false;
  }

  // Validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate the phone format
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a 10-digit phone number.");
    return false;
  }

  document.getElementById("result").innerHTML = "Thank you for your feedback. <br /> Click for a present:";
  document.getElementById("feedback-form").hidden = true;
  document.getElementById("presents").hidden = false;
  document.getElementById("submitAgain").hidden = false;
  return false;
}