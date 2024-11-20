const hire = document.querySelector('.hire-me');

hire.addEventListener('click',() =>{
    window.location.hash = '#contact';
})



// Initialize EmailJS (replace 'your_user_id' with your actual EmailJS user ID)
emailjs.init("your_user_id");

// Add event listener to the 'Send Message' button
document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.querySelector("input[placeholder='Name']").value.trim();
  const email = document.querySelector("input[placeholder='Email']").value.trim();
  const subject = document.querySelector("input[placeholder='Subject']").value.trim();
  const message = document.querySelector("textarea[placeholder='Message']").value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // EmailJS configuration
  const serviceID = "your_service_id"; // Replace with your EmailJS service ID
  const templateID = "your_template_id"; // Replace with your EmailJS template ID

  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  // Send email via EmailJS
  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      alert("Message sent successfully!");
      console.log("Success:", response);

      // Clear form fields
      document.querySelector("input[placeholder='Name']").value = "";
      document.querySelector("input[placeholder='Email']").value = "";
      document.querySelector("input[placeholder='Subject']").value = "";
      document.querySelector("textarea[placeholder='Message']").value = "";
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error("Error:", error);
    });
});
