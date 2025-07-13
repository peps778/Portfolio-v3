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
const downloadBtn = document.getElementById("downloadBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("spinner");

let downloaded = false;

downloadBtn.addEventListener("click", async (e) => {
  if (downloaded) {
    e.preventDefault();
    return;
  }

  e.preventDefault();

  const confirmed = confirm("Are you sure you want to download this file?");
  if (!confirmed) return;

  // Show spinner and change text
  spinner.classList.remove("hidden");
  btnText.textContent = "Downloading...";

  // Simulate a brief delay before downloading
  setTimeout(() => {
    // Create a temporary anchor to trigger the download
    const link = document.createElement("a");
    link.href = downloadBtn.getAttribute("href");
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Disable button and update text
    downloaded = true;
    downloadBtn.classList.add("opacity-50", "cursor-not-allowed");
    downloadBtn.removeAttribute("href");
    downloadBtn.removeAttribute("download");
    spinner.classList.add("hidden");
    btnText.textContent = "Downloaded";
  }, 2000);
});
