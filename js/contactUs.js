document.addEventListener('DOMContentLoaded', () => {

    // ------------- Contact Form ----------------
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showSuccess(contactSuccess);
            contactForm.reset();
        });
    }

    // ------------- Booking Modal ----------------
    const bookingModal = document.getElementById('bookingModal');
    const bookingForm = document.getElementById('bookingForm');
    const bookingSuccess = document.getElementById('successMessage');
    const openBookingBtn = document.getElementById('open-booking');
    const closeBookingBtn = bookingModal?.querySelector('#closeModal');

    // 打开弹窗
    openBookingBtn?.addEventListener('click', () => {
        bookingModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // 关闭弹窗
    closeBookingBtn?.addEventListener('click', () => hideModal(bookingModal));
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) hideModal(bookingModal);
    });

    // 表单提交
    bookingForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        hideModal(bookingModal);
        showSuccess(bookingSuccess);
        bookingForm.reset();
    });

    // 成功提示关闭
    const closeSuccessBtn = bookingSuccess?.querySelector('#closeSuccess');
    closeSuccessBtn?.addEventListener('click', () => hideModal(bookingSuccess));
    window.addEventListener('click', (e) => {
        if (e.target === bookingSuccess) hideModal(bookingSuccess);
    });

    // ------------- Guest Number ----------------
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const guestsInput = document.getElementById('guests');

    decreaseBtn?.addEventListener('click', () => {
        if (!guestsInput) return;
        let value = parseInt(guestsInput.value) || 1;
        if (value > 1) guestsInput.value = value - 1;
    });

    increaseBtn?.addEventListener('click', () => {
        if (!guestsInput) return;
        let value = parseInt(guestsInput.value) || 1;
        guestsInput.value = value + 1;
    });

    // ------------- Helper Functions -------------
    function hideModal(el) {
        el.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showSuccess(el) {
        el.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // ------------- Google Maps ----------------
    function loadGoogleMaps() {
        console.log('Google Maps loaded for 天津市大港油田海滨街道庆祥北里');
    }
    loadGoogleMaps();
});


