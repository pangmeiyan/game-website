// JavaScript Halaman Scan QR Code

document.addEventListener('DOMContentLoaded', function() {
    const ewalletInput = document.getElementById('ewallet');

    // Ambil nilai e-wallet dari sessionStorage jika ada
    const savedEwallet = sessionStorage.getItem('ewallet');
    if (savedEwallet && ewalletInput) {
        ewalletInput.value = savedEwallet;
        // Hapus sessionStorage setelah digunakan
        sessionStorage.removeItem('ewallet');
    }
});

