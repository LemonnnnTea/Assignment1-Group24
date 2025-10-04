function initGallery() {
    // Filter functionality - allows users to filter images by category
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality for viewing images in full size
    const lightbox = document.getElementById('lightbox');
    const closeLight = document.getElementById('close-light');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    let images = [];
    
    // Collect all image information for lightbox
    galleryItems.forEach((item, index) => {
        const title = item.querySelector('h4').textContent;
        const description = item.querySelector('p').textContent;
        const imgSrc = item.querySelector('.gallery-img').src;
        
        images.push({
            title: title,
            description: description,
            src: imgSrc,
            alt: item.querySelector('.gallery-img').alt,
            index: index
        });
        
        // Add click event to open lightbox when image is clicked
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Function to open lightbox with selected image
    function openLightbox(index) {
        const image = images[index];
        updateLightbox(image);
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Update lightbox content with selected image
    function updateLightbox(image) {
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        // Display the actual image in lightbox
        const lightContent = document.getElementById('light-content');
        lightContent.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" style="width: 100%; max-height: 500px; object-fit: contain; border-radius: 8px;">
        `;
    }

    // Close lightbox when close button is clicked
    closeLight.addEventListener('click', closeLightbox);
    
    // Close lightbox when clicking on the background
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    console.log('Gallery functionality initialized successfully');
}