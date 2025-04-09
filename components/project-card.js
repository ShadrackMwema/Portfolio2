/**
 * Project Card Component
 * Reusable component for displaying project information
 */

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Project Title';
        const description = this.getAttribute('description') || 'Project description';
        const tags = (this.getAttribute('tags') || '').split(',');
        const github = this.getAttribute('github') || '#';
        const demo = this.getAttribute('demo') || '#';
        
        const tagsHtml = tags.map(tag => 
            `<span class="badge bg-light text-primary me-1">${tag.trim()}</span>`
        ).join('');
        
        this.innerHTML = `
            <div class="card h-100 shadow-sm border-0 project-card">
                <div class="card-body d-flex flex-column">
                    <div class="mb-2">
                        ${tagsHtml}
                    </div>
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text text-muted flex-grow-1">${description}</p>
                    <div class="d-flex mt-3">
                        <a href="${github}" class="btn btn-sm btn-outline-primary me-2" target="_blank">
                            <i class="fab fa-github me-1"></i> Code
                        </a>
                        <a href="${demo}" class="btn btn-sm btn-primary" target="_blank">
                            <i class="fas fa-external-link-alt me-1"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);
