
    document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessMessage();
    contactForm.reset();
});

    // Success message functionality
    function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

    function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

    // Close success message
    document.getElementById('closeSuccess').addEventListener('click', closeSuccessMessage);

    // Close success message when clicking outside
    window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('successMessage')) {
    closeSuccessMessage();
}
});

    // Booking button functionality
    const openBtn = document.getElementById('open-booking');
    openBtn.addEventListener('click', () => {
    window.location.href = 'Booking.html';
});

    // load Google Maps
    function loadGoogleMaps() {
    // you can use more accurate location
    // Here is an example
    console.log('Google Maps loaded for 天津市大港油田海滨街道庆祥北里');
}

    // initialize map after loading pages
    loadGoogleMaps();
});