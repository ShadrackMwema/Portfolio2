/**
 * Header Component
 * Reusable header component with responsive navigation
 */

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const currentPath = window.location.pathname;
        const isRoot = currentPath.endsWith('index.html') || currentPath.endsWith('/');
        const prefix = isRoot ? '' : '../';

        this.innerHTML = `
            <header class="sticky-top">
                <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                    <div class="container">
                        <a class="navbar-brand fw-bold" href="${prefix}index.html">
                            Shadrack<span class="text-primary">.Dev</span>
                        </a>
                        
                        <div class="d-flex align-items-center ms-auto me-2">
                            <div class="dark-mode-toggle mx-2">
                                <div class="toggle-ball"></div>
                            </div>
                        </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                data-bs-target="#navbarNav" aria-controls="navbarNav" 
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="${isRoot ? '#home' : '../index.html#home'}">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${isRoot ? '#about' : '../index.html#about'}">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${isRoot ? '#skills' : '../index.html#skills'}">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${isRoot ? '#projects' : '../index.html#projects'}">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${prefix}pages/portfolio.html">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="${isRoot ? '#contact' : '../index.html#contact'}">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;

        // Add event listener for the dark mode toggle
        const darkModeToggle = this.querySelector('.dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                
                // Save user preference
                if (document.body.classList.contains('dark-theme')) {
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    localStorage.setItem('darkMode', null);
                }
            });
            
            // Check for saved user preference on load
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-theme');
            }
        }
    }
}

customElements.define('app-header', Header);
