const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data
    })
      .then(() => {
        status.textContent = "Message sent! I’ll get back to you soon.";
        form.reset();

        setTimeout(() => {
          status.textContent = "";
        }, 4000);
      })
      .catch(() => {
        status.textContent = "Oops! There was a problem.";
      });
  });
}
