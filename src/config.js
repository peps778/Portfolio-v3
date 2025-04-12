
// nav bar events 
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

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    event.preventDefault();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // card-rendering

   // render the cards into the page 
 const cards = [
  {
    img: "./src/assets/web-development-icon.png",
    alt: "Web Development Icon",
    title: "Web Developer",
    description: "Building responsive, dynamic websites with clean code and innovative design, turning ideas into seamless digital experiences."
  },
  {
    img: "./src/assets/marketing-specialist-icon.png",
    alt: "Marketing Specialist Icon",
    title: "Marketing Specialist",
    description: "Creating strategic campaigns that drive engagement, boost conversions, and deliver measurable results."
  },
  {
    img: "./src/assets/FB-ads-manager-icon.png",
    alt: "FB Ads Manager Icon",
    title: "FB Ads Manager",
    description: "Optimizing Facebook advertising to maximize reach, generate leads, and grow brand visibility with precision targeting."
  },
  {
    img: "./src/assets/crm-manager-icon.png",
    alt: "CRM Manager Icon",
    title: "CRM Manager",
    description: "Streamlining customer relationships through effective CRM strategies, ensuring smooth communication and long-term client retention."
  },
  {
    img: "./src/assets/automation-icon.png",
    alt: "Automation Expert Icon",
    title: "Automation Expert",
    description: "Developing efficient workflows and systems to reduce manual tasks, increase productivity, and ensure seamless operations. (GHL/Make/Zapier)"
  },
  {
    img: "./src/assets/UI-UX-design-icon.png",
    alt: "UI/UX Design Icon",
    title: "UI/UX Designer",
    description: "Designing intuitive and engaging interfaces that enhance user satisfaction and deliver exceptional digital journeys."
  }
];

const container = document.getElementById("card-container");

cards.forEach((card, index) => {
  const li = document.createElement("li");
  li.className = `flex justify-center bg-slate-50 rounded-lg shadow-xl p-4 max-sm:md-10 md:mx-10 lg:mx-4 pt-10 ${index === cards.length - 1 ? 'max-sm:mb-10' : ''}`;

  li.innerHTML = `
    <div class="text-center">
      <img src="${card.img}" alt="${card.alt}" class="mx-auto w-16 md:w-24 lg:w-28">
      <h1 class="text-2xl md:text-3xl lg:text-2xl font-bold italic my-2 inline-block px-2 rounded text-slate-800">
        ${card.title}
      </h1>
      <p class="text-sm md:text-lg lg:text-1xl text-gray-600 mt-2 inline-block px-2 rounded">
        ${card.description}
      </p>
    </div>
  `;

  container.appendChild(li);

  console.log("test");
});



});


