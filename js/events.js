// Events Data
const eventsData = [
    {
        id: 1,
        title: "Summer Beach Luau",
        category: "themed",
        date: "Aug 15, 2024",
        time: "6:00 PM - 11:00 PM",
        location: "Beach Park",
        attendees: "50+ People",
        description: "Join us for an unforgettable beach party with tropical drinks, Hawaiian music, and fun beach games. Perfect for all ages!",
        image: "🎉"
    },
    {
        id: 2,
        title: "Mystery Masquerade Ball",
        category: "themed",
        date: "Sep 2, 2024",
        time: "7:00 PM - 12:00 AM",
        location: "Grand Ballroom",
        attendees: "100 People",
        description: "An evening of elegance and mystery. Wear your finest mask and enjoy classical music, dancing, and gourmet cuisine.",
        image: "🎭"
    },
    {
        id: 3,
        title: "Epic Gaming Night",
        category: "themed",
        date: "Aug 25, 2024",
        time: "5:00 PM - 2:00 AM",
        location: "Game Center",
        attendees: "80 People",
        description: "Compete in various video game tournaments with amazing prizes. Food, drinks, and gaming stations provided!",
        image: "🎮"
    },
    {
        id: 4,
        title: "Kids Superhero Birthday Bash",
        category: "birthday",
        date: "Aug 20, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Party Room A",
        attendees: "25 Kids",
        description: "Superhero-themed birthday party with costume contest, hero training activities, and super-powered fun!",
        image: "🦸"
    },
    {
        id: 5,
        title: "Corporate Team Building",
        category: "corporate",
        date: "Sep 10, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Conference Center",
        attendees: "40 People",
        description: "Professional team building activities designed to enhance collaboration and communication in the workplace.",
        image: "💼"
    },
    {
        id: 6,
        title: "Halloween Spooktacular",
        category: "seasonal",
        date: "Oct 31, 2024",
        time: "7:00 PM - 12:00 AM",
        location: "Haunted Mansion",
        attendees: "120 People",
        description: "Spooky Halloween party with haunted house, costume contest, and ghostly entertainment for brave souls!",
        image: "🎃"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize events
    initializeEvents();

    // Booking button functionality
    const openBtn = document.getElementById('open-booking');
    openBtn.addEventListener('click', () => {
        window.location.href = 'Booking.html';
    });

    // Modal functionality
    const modal = document.getElementById('joinEventModal');
    const closeModalBtn = document.getElementById('closeJoinModal');
    const joinForm = document.getElementById('joinEventForm');

    closeModalBtn.addEventListener('click', closeJoinModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeJoinModal();
        }
    });

    // Join form submission
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const eventTitle = document.getElementById('modalEventTitle').textContent.replace('Join ', '');
        showSuccessMessage(`Thank you for registering for "${eventTitle}"! We'll send you confirmation details within 24 hours.`);
        joinForm.reset();
        closeJoinModal();
    });

    // Success message functionality
    document.getElementById('closeSuccess').addEventListener('click', closeSuccessMessage);

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('successMessage')) {
            closeSuccessMessage();
        }
    });
});

function initializeEvents() {
    // Load all events initially
    filterEvents('all');

    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter events
            const category = this.getAttribute('data-category');
            filterEvents(category);
        });
    });

    // Setup category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Update active state
            categoryCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            // Update filter buttons
            const category = this.getAttribute('data-category');
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Filter events
            filterEvents(category);
        });
    });
}

function filterEvents(category) {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = '';

    const filteredEvents = category === 'all'
        ? eventsData
        : eventsData.filter(event => event.category === category);

    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray);">
                <h3>No events found in this category</h3>
                <p>Check back later for new events or browse other categories.</p>
            </div>
        `;
        return;
    }

    filteredEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <div class="event-image" style="background: linear-gradient(135deg, ${getEventColor(event.category)});">
            ${event.image} ${event.title}
        </div>
        <div class="event-content">
            <div class="event-header">
                <div class="event-date">${event.date}</div>
                <div class="event-category">${getCategoryName(event.category)}</div>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-details">
                <div class="event-info">
                    <span>⏰ ${event.time}</span>
                    <span>📍 ${event.location}</span>
                    <span>👥 ${event.attendees}</span>
                </div>
                <button class="event-button" onclick="openJoinModal(${event.id})">Join Event</button>
            </div>
        </div>
    `;
    return card;
}

function getEventColor(category) {
    const colors = {
        'birthday': '#FF6B6B 0%, #FFE66D 100%',
        'corporate': '#4ECDC4 0%, #556270 100%',
        'seasonal': '#FF5252 0%, #FF4081 100%',
        'themed': '#FF6B6B 0%, #4ECDC4 100%'
    };
    return colors[category] || '#FF6B6B 0%, #4ECDC4 100%';
}

function getCategoryName(category) {
    const names = {
        'birthday': 'Birthday',
        'corporate': 'Corporate',
        'seasonal': 'Seasonal',
        'themed': 'Themed'
    };
    return names[category] || 'Event';
}

function openJoinModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        document.getElementById('modalEventTitle').textContent = `Join ${event.title}`;
        document.getElementById('selectedEventId').value = eventId;
        document.getElementById('joinEventModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeJoinModal() {
    document.getElementById('joinEventModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showSuccessMessage(message) {
    document.getElementById('successMessageText').textContent = message;
    document.getElementById('successMessage').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
    document.body.style.overflow = 'auto';
}