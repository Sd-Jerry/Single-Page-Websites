// AOS ANIMATION
AOS.init();

// SCROLL ON TOP
function scrolltop() {
    let b = window.document;
    b = location.href = '#home';
}

// CONTACT-FORM MESSAGE ALERT

let contact = document.getElementById('contact-form');
contact.addEventListener('submit', function (x) {
    x.preventDefault();
    alert('Sorry..! Request cannot be accepted due to some Technical Error')
})