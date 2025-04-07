/**
 * Project Filter Component
 * Reusable component for filtering projects by category
 */

class ProjectFilter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="text-center mb-4">
                <div class="btn-group project-filter" role="group" aria-label="Project filters">
                    <button type="button" class="btn btn-outline-primary active" data-filter="all">All</button>
                    <button type="button" class="btn btn-outline-primary" data-filter="web">Web Development</button>
                    <button type="button" class="btn btn-outline-primary" data-filter="app">App Development</button>
                    <button type="button" class="btn btn-outline-primary" data-filter="ui">UI/UX Design</button>
                </div>
            </div>
        `;
        
        // Add event listeners for filtering
        const filterButtons = this.querySelectorAll('[data-filter]');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Get all project items
                const projectItems = document.querySelectorAll('.project-item');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else {
                        if (item.classList.contains(filterValue)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
}

customElements.define('project-filter', ProjectFilter);
