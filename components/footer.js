/**
 * Footer Component
 * Reusable footer component with social links and copyright information
 */

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const year = new Date().getFullYear();
        
        this.innerHTML = `
            <footer class="bg-dark text-white py-4 mt-auto">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p class="mb-0">© ${year} Shadrack Mutinda. All rights reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="social-links d-flex justify-content-center justify-content-md-end gap-3">
                                <a href="https://github.com/yourusername" target="_blank" class="text-white">
                                    <i class="fab fa-github fa-lg"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/shadrack-mutinda/" target="_blank" class="text-white">
                                    <i class="fab fa-linkedin fa-lg"></i>
                                </a>
                                <a href="#" target="_blank" class="text-white">
                                    <i class="fab fa-twitter fa-lg"></i>
                                </a>
                                <a href="#" target="_blank" class="text-white">
                                    <i class="fab fa-instagram fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
