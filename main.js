// --- INTERACTION LOGIC ---

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const isOpen = !menu.classList.contains('translate-x-full');

    if (isOpen) {
        menu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Horizontal Scroll for Study Area
function scrollStudy(direction) {
    const container = document.getElementById('study-scroll-container');
    if (container) {
        // Scroll amount corresponds to card width + gap approx
        const scrollAmount = 400;
        if (direction === '+') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}
