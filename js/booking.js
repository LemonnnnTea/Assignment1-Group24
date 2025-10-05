
    document.addEventListener('DOMContentLoaded', () => {
    // Set minimum date for date inputs
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute('min', minDate);
});

    // Modal functionality
    const openBtn = document.getElementById('open-booking');
    const heroBtn = document.getElementById('hero-booking');
    const modal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModal');

    function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

    function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

    openBtn.addEventListener('click', openModal);
    heroBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
    if (event.target === modal) {
    closeModal();
}
});

    // Form submissions
    const bookingForm = document.getElementById('bookingForm');
    const pageForm = document.getElementById('pageBookingForm');

    function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

    function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

    bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessMessage();
    bookingForm.reset();
    closeModal();
});

    pageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessMessage();
    pageForm.reset();
});

    // Close success message
    document.getElementById('closeSuccess').addEventListener('click', closeSuccessMessage);

    // Close success message when clicking outside
    window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('successMessage')) {
    closeSuccessMessage();
}
});
});