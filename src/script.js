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

// Button Loading Animation
const downloadBtn = document.getElementById('downloadBtn');
const btnText = document.getElementById('btnText');

let downloaded = false;

downloadBtn.addEventListener('click', async (e) => {
  if (downloaded) {
    e.preventDefault();
    return;
  }

  e.preventDefault();

  const confirmed = confirm("Are you sure you want to download this file?");
  if (!confirmed) return;

  downloaded = true;

  // Add spinner
  btnText.innerHTML = `
    <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
    Downloading...
  `;

  // Wait 2 seconds before triggering the download
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = downloadBtn.getAttribute('href');
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Disable button
    downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    downloadBtn.removeAttribute('href');
    downloadBtn.removeAttribute('download');
    btnText.textContent = 'Downloaded';
  }, 2000);
});
