
/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*scroll selection active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });


/* sticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window,scrollY > 100);

/* remove toggle icon and navbar when click navbar link (scroll)*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* scroll reveal */
 ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
 ScrollReveal().reveal('.home-img, .contact form', {origin : 'bottom'});
 ScrollReveal().reveal('.home-content h1', {origin : 'left'});
 ScrollReveal().reveal('.home-content p', {origin : 'right'});


 // Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer'],
    typeSpeed: 50,
    backSpeed:150,
    backDelay: 2000,
    loop: true
});

function Send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var emailsubject = document.getElementById("emailsubject").value;
    var message = document.getElementById("message").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Mobile No: " + number + "<br/> Message: " + message;
    console.log(body);

    Email.send({
        SecureToken: "1b559856-7a72-471c-8223-24dee79cef02", // Replace with your actual SecureToken
        To: "gowthamsanjay701@gmail.com",
        From: "gowthamsanjay701@gmail.com", // Use a verified sender email address
        Subject: emailsubject,
        Body: body
    }).then(
        message => {
            if (message === 'OK') {
                swal("Successful!", "Your Data Successfully Received!", "success");
            } else {
                console.error("Email.send error:", message); // Log the error for debugging
                swal("Something Wrong", "Your Data is not Received!", "error");
            }
            clearForm(); // Clear form fields after sending email
        }
    ).catch(error => {
        console.error("Email.send error:", error); // Log any caught errors
        swal("Something Wrong", "Your Data is not Received!", "error");
        clearForm(); // Clear form fields after sending email (if necessary)
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("emailsubject").value = "";
    document.getElementById("message").value = "";
}
