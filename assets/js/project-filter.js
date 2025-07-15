/**
 * The GDevelopers - Project Filter Functionality
 * Handles filtering of projects on the projects page
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        // Set up filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Filter projects
                filterProjects(filter);
            });
        });
        
        // Filter function
        function filterProjects(filter) {
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.getAttribute('data-categories').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            // Animate the cards that are visible
            setTimeout(() => {
                document.querySelectorAll('.project-card:not(.hidden)').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-in');
                        setTimeout(() => {
                            card.classList.remove('fade-in');
                        }, 500);
                    }, index * 100);
                });
            }, 100);
        }
    }
}); 