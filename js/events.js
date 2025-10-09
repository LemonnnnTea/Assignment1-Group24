
    document.addEventListener('DOMContentLoaded', () => {
    // 1. Restrict date to today or later
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute('min', minDate);
});

    // 2. Booking Modal Control
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModal');

    window.openModal = function() {
    bookingModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

    function closeModal() {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeModal();
});

    // 3. Success Modal & Form Submission
    const bookingForm = document.getElementById('bookingForm');
    const successModal = document.getElementById('successMessage');
    const closeSuccessBtn = document.getElementById('closeSuccess');

    function showSuccess() {
    successModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

    function closeSuccess() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

    bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccess();
    bookingForm.reset();
    closeModal();
});

    closeSuccessBtn.addEventListener('click', closeSuccess);
    window.addEventListener('click', (e) => {
    if (e.target === successModal) closeSuccess();
});

    // 4. Event Filter Functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#events-grid .card').forEach(card => {
    if (filter === 'all' || card.dataset.type === filter) {
    card.style.display = 'block';
    card.style.animation = 'fadeIn 0.5s ease';
} else {
    card.style.display = 'none';
}
});
});
});

    // 5. Card Hover Animation
    document.querySelectorAll('#events-grid .card').forEach(card => {
    card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
});
    card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.08)';
});
});
});

    // 参考 booking.html 的弹窗处理方式
    document.addEventListener('DOMContentLoaded', function () {
        // 打开弹窗
        document.getElementById('open-booking').addEventListener('click', function () {
            document.getElementById('bookingModal').style.display = 'block';
            // 不自动选主题
            document.getElementById('partyType').selectedIndex = 0;
        });

        // 关闭弹窗
        document.getElementById('closeModal').addEventListener('click', function () {
            document.getElementById('bookingModal').style.display = 'none';
        });

        // 关闭成功提示
        document.getElementById('closeSuccess').addEventListener('click', function () {
            document.getElementById('successMessage').style.display = 'none';
        });

        // 提交表单
        document.getElementById('bookingForm').addEventListener('submit', function (e) {
            e.preventDefault();
            document.getElementById('bookingModal').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            this.reset();
        });

        // 支持点击“Book This Event”按钮也弹窗，并自动填入主题
        document.querySelectorAll('.card .primary').forEach(function(btn){
            btn.addEventListener('click', function(e){
                e.preventDefault();
                // 获取主题名
                var card = btn.closest('.card');
                var theme = card.querySelector('h3').textContent.trim();
                document.getElementById('bookingModal').style.display = 'block';
                // 自动选中主题
                var select = document.getElementById('partyType');
                for (var i = 0; i < select.options.length; i++) {
                    if (select.options[i].value === theme) {
                        select.selectedIndex = i;
                        break;
                    }
                }
            });
        });
    });
