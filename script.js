document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerHTML =
        "Thank you for reaching out! I will get back to you soon.";

    this.reset();
});
