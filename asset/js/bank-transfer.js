// JavaScript Pembayaran Bank Transfer

document.addEventListener('DOMContentLoaded', function() {
    const havePaidBtn = document.getElementById('havePaidBtn');
    const bankInput = document.getElementById('bank');
    const accountNameInput = document.getElementById('accountName');
    const accountNumberInput = document.getElementById('accountNumber');
    const referenceInput = document.getElementById('reference');

    // Fungsionalitas tombol I Have Paid
    if (havePaidBtn) {
        havePaidBtn.addEventListener('click', function() {
            // Validasi form
            if (!bankInput.value.trim()) {
                alert('Please enter bank name');
                bankInput.focus();
                return;
            }

            if (!accountNameInput.value.trim()) {
                alert('Please enter account name');
                accountNameInput.focus();
                return;
            }

            if (!accountNumberInput.value.trim()) {
                alert('Please enter account number');
                accountNumberInput.focus();
                return;
            }

            if (!referenceInput.value.trim()) {
                alert('Please enter reference number');
                referenceInput.focus();
                return;
            }

            // Tampilkan konfirmasi
            const totalPrice = document.querySelector('.total-price').textContent;
            if (confirm(`Confirm payment?\n\nBank: ${bankInput.value}\nAccount Name: ${accountNameInput.value}\nAccount Number: ${accountNumberInput.value}\nReference: ${referenceInput.value}\nTotal: ${totalPrice}`)) {
                alert('Payment confirmation received! Your credits will be delivered once the transfer is verified.');
                // Di sini biasanya akan memproses konfirmasi pembayaran
                // window.location.href = 'success.html';
            }
        });
    }

    // Validasi account number hanya angka
    if (accountNumberInput) {
        accountNumberInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    // Validasi reference hanya angka dan huruf
    if (referenceInput) {
        referenceInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
        });
    }
});

