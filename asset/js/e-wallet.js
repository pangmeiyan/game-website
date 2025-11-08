// JavaScript Pembayaran E-Wallet

document.addEventListener('DOMContentLoaded', function() {
    const proceedBtn = document.getElementById('proceedBtn');
    const ewalletInput = document.getElementById('ewallet');
    const accountDetailsInput = document.getElementById('accountDetails');
    const scanQRLink = document.getElementById('scanQR');

    // Fungsionalitas tombol Proceed
    if (proceedBtn) {
        proceedBtn.addEventListener('click', function() {
            // Validasi form
            if (!ewalletInput.value.trim()) {
                alert('Please select or enter your e-wallet');
                ewalletInput.focus();
                return;
            }

            if (!accountDetailsInput.value.trim()) {
                alert('Please enter your account details or scan the QR code');
                accountDetailsInput.focus();
                return;
            }

            // Tampilkan konfirmasi
            const totalPrice = document.querySelector('.total-price').textContent;
            if (confirm(`Confirm payment?\n\nE-Wallet: ${ewalletInput.value}\nAccount: ${accountDetailsInput.value}\nTotal: ${totalPrice}`)) {
                alert('Payment processed successfully! Thank you for your purchase.');
                // Di sini biasanya akan memproses pembayaran dan mengarahkan
                // window.location.href = 'success.html';
            }
        });
    }

    // Fungsionalitas link scan QR code - redirect ke halaman scan QR
    if (scanQRLink) {
        scanQRLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Simpan nilai e-wallet ke sessionStorage untuk dibawa ke halaman scan QR
            if (ewalletInput.value.trim()) {
                sessionStorage.setItem('ewallet', ewalletInput.value);
            }
            // Redirect ke halaman scan QR
            window.location.href = 'scan-qr.html';
        });
    }
});

