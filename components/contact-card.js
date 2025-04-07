/**
 * Contact Card Component
 * Reusable component for displaying contact information
 */

class ContactCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon = this.getAttribute('icon') || 'fas fa-envelope';
        const title = this.getAttribute('title') || 'Contact';
        const link = this.getAttribute('link') || '#';
        const text = this.getAttribute('text') || 'Contact me';
        
        this.innerHTML = `
            <div class="card h-100 shadow-sm text-center border-0 contact-card">
                <div class="card-body">
                    <div class="icon-circle bg-primary text-white mb-3 mx-auto">
                        <i class="${icon} fa-lg"></i>
                    </div>
                    <h5 class="card-title">${title}</h5>
                    <a href="${link}" class="stretched-link" target="_blank">${text}</a>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-card', ContactCard);
