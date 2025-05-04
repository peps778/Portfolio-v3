function sendMail(e) {
  e.preventDefault(); // Stop form from submitting normally

  // Get values from fields
  let parms = {
    name: document.getElementById('nameField').value,
    countryCode: document.getElementById('countryCode').value,
    phone: document.getElementById('phoneField').value,
    email: document.getElementById('emailField').value,
    subject: document.getElementById('subjectField').value
  };

  // Show spinner and disable button
  const btn = document.getElementById('submitBtn');
  const spinner = document.getElementById('spinner');
  const btnText = document.getElementById('btnText');

  btn.disabled = true;
  spinner.classList.remove('hidden');
  btnText.textContent = 'Sending...';

  // Send email
  emailjs.send("service_w6dxdeq", "template_2sxx128", parms)
    .then(() => {
      alert("Details Submitted!");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      // Reset UI
      spinner.classList.add('hidden');
      btnText.textContent = 'Send';
      btn.disabled = false;

      document.getElementById("contactForm").reset();
    });
}
