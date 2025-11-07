// JavaScript Halaman Payment Success

document.addEventListener('DOMContentLoaded', function() {
    const backStoreBtn = document.getElementById('backStoreBtn');
    const contactSupportBtn = document.getElementById('contactSupportBtn');

    // Fungsionalitas tombol Back to Store
    if (backStoreBtn) {
        backStoreBtn.addEventListener('click', function() {
            // Redirect ke halaman store/home
            window.location.href = 'index.html';
        });
    }

    // Fungsionalitas tombol Contact Support
    if (contactSupportBtn) {
        contactSupportBtn.addEventListener('click', function() {
            // Redirect ke halaman support
            window.location.href = 'HelpCenter.html';
        });
    }
});

