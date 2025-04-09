document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const menu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function updateActiveLink() {
    let scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-700");
          link.removeAttribute("aria-current");
        });

        const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("text-blue-700");
          activeLink.setAttribute("aria-current", "page");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});

// Prevent form from refreshing the page and send email

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  let name = document.getElementById("nameField").value;
  let email = document.getElementById("emailField").value;
  let message = document.getElementById("subjectField").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "work.paulmagbanua@gmail.com",
    Password: "CFBED23B17EBA67DD7CE9B3DB14BF68E9EEA",  
    To: "work.paulmagbanua@gmail.com",
    From: "work.paulmagbanua@gmail.com", 
    Subject: "New Contact Form Submission",
    Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
  }).then(response => {
    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
  }).catch(error => {
    alert("Error sending email: " + error);
  });
}

// Optional: Disable context menu and prevent inspect tool usage
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.addEventListener("keydown", (event) => {
//   if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
//     event.preventDefault();
//   }
// });


// Download
document.getElementById("downloadBtn").addEventListener("click", function () {
  alert("Your CV download will start shortly!");
});
