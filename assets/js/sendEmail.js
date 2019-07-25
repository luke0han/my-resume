function sendMail(contactForm) {
    emailjs.send("gmail", "resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed", error);
        });
}


        window.onload = function() {
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();
                this.contact_number.value = Math.random() * 100000 | 0;
                emailjs.sendForm('gmail', 'resume', this);
            });
        }
