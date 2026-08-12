// Nexora Technologies Global Conversion & Analytics Engine
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Aqui você pode integrar Google Analytics ou disparo de eventos futuros
            console.log("Global Lead Captured: Form submission initiated.");
        });
    }

    // Rastreamento de cliques em botões de chamada para ação (CTA)
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            console.log("Conversion CTA clicked: " + button.textContent.trim());
        });
    });
});