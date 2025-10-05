const modal = document.getElementById('bookingModal');
const openBtn = document.getElementById('open-booking');
const closeModalBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 成功提示
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');
const closeSuccess = document.getElementById('closeSuccess');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
    successMessage.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    bookingForm.reset();
});

closeSuccess.addEventListener('click', () => {
    successMessage.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === successMessage) {
        successMessage.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 人数加减
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const guestsInput = document.getElementById('guests');

decreaseBtn.addEventListener('click', () => {
    let value = parseInt(guestsInput.value);
    if(value > 1) guestsInput.value = value - 1;
});

increaseBtn.addEventListener('click', () => {
    let value = parseInt(guestsInput.value);
    guestsInput.value = value + 1;
});
