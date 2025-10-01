// Accessibility helpers & simple interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
        const href = a.getAttribute('href');
        if(href.length>1){
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        }
    });
});

// Open booking modal via quick button
const openBooking = document.getElementById('open-booking');
const bookingForm = document.getElementById('booking-form');
const successModal = document.getElementById('success');
const closeSuccess = document.getElementById('close-success');

openBooking.addEventListener('click', ()=>{document.getElementById('booking').scrollIntoView({behavior:'smooth'})});

// Quick booking form submission
document.getElementById('quick-book').addEventListener('submit', e=>{
    e.preventDefault();
    // Basic front-end validation done by browser; show success modal
    successModal.setAttribute('open','');
    document.getElementById('success').focus();
});

closeSuccess.addEventListener('click', ()=>{successModal.removeAttribute('open')});

// Booking form: gather values, basic validation, then show confirmation modal
document.getElementById('booking-form').addEventListener('submit', e=>{
    e.preventDefault();
    const form = e.target;
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }
    // build summary and (here) just show the success modal
    successModal.setAttribute('open','');
});

document.getElementById('reset-booking').addEventListener('click', ()=>{document.getElementById('booking-form').reset()});

// Gallery lightbox
document.querySelectorAll('.thumb').forEach(t=>{
    t.addEventListener('click', openLight);
    t.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openLight(e);});
});
function openLight(e){
    const idx = e.currentTarget.dataset.index || '1';
    const content = document.getElementById('light-content');
    content.innerHTML = '<svg width="100%" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f6f9fc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#98a6b4" font-size="28">Event Photo '+idx+'</text></svg>';
    document.getElementById('lightbox').setAttribute('open','');
}
document.getElementById('close-light').addEventListener('click', ()=>{document.getElementById('lightbox').removeAttribute('open')});
// allow ESC to close modals
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){document.getElementById('lightbox').removeAttribute('open');document.getElementById('success').removeAttribute('open')} });

// Services filter
document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const f = btn.dataset.filter;
        document.querySelectorAll('#services-grid .card').forEach(c=>{
            if(f==='all' || c.dataset.type===f) c.style.display='block'; else c.style.display='none';
        });
    });
});

// Newsletter basic handler
document.getElementById('newsletter').addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('n-email').value;
    if(!email) return; alert('Thanks — signed up: '+email);
    document.getElementById('newsletter').reset();
});