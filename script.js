document.addEventListener('DOMContentLoaded', function () {
    // Alle Buttons mit data-modal-id holen
    const openButtons = document.querySelectorAll('[data-modal-id]');
    const closeButtons = document.querySelectorAll('.modal .close');

    openButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Schließen beim Klick außerhalb des Inhalts
    window.addEventListener('click', function (e) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(function (modal) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
