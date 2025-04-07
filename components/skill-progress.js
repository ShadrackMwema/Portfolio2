/**
 * Skill Progress Component
 * Reusable component for displaying skill progress bars
 */

class SkillProgress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const skill = this.getAttribute('skill') || 'Skill';
        const percentage = this.getAttribute('percentage') || '0';
        
        this.innerHTML = `
            <div class="skill-progress mb-3">
                <div class="d-flex justify-content-between mb-1">
                    <span>${skill}</span>
                    <span>${percentage}%</span>
                </div>
                <div class="progress" style="height: 8px;">
                    <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" 
                         role="progressbar" 
                         data-percentage="${percentage}"
                         style="width: 0%;" 
                         aria-valuenow="${percentage}" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                </div>
            </div>
        `;
        
        // Animate progress bar when in viewport
        setTimeout(() => {
            const progressBar = this.querySelector('.progress-bar');
            if (progressBar) {
                const percentage = progressBar.getAttribute('data-percentage');
                progressBar.style.width = percentage + '%';
            }
        }, 300);
    }
}

customElements.define('skill-progress', SkillProgress);
