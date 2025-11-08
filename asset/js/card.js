// JavaScript Halaman Pembayaran Lengkap

document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas tombol Konfirmasi & Bayar
    const confirmPayBtn = document.getElementById('confirmPayBtn');
    const cardNumberInput = document.getElementById('cardNumber');
    const cardholderNameInput = document.getElementById('cardholderName');
    const expirationDateInput = document.getElementById('expirationDate');
    const cvvInput = document.getElementById('cvv');

    if (confirmPayBtn) {
        confirmPayBtn.addEventListener('click', function() {
            // Validasi formulir
            if (!cardNumberInput.value.trim()) {
                alert('Please enter your card number');
                cardNumberInput.focus();
                return;
            }

            if (cardNumberInput.value.replace(/\s/g, '').length < 13) {
                alert('Please enter a valid card number');
                cardNumberInput.focus();
                return;
            }

            if (!cardholderNameInput.value.trim()) {
                alert('Please enter cardholder name');
                cardholderNameInput.focus();
                return;
            }

            if (!expirationDateInput.value) {
                alert('Please select expiration date');
                expirationDateInput.focus();
                return;
            }

            if (!cvvInput.value.trim()) {
                alert('Please enter CVV');
                cvvInput.focus();
                return;
            }

            // Ambil detail pesanan
            const totalPrice = document.querySelector('.total-price').textContent;

            // Tampilkan konfirmasi
            if (confirm(`Confirm payment?\n\nCard Number: ${cardNumberInput.value}\nCardholder: ${cardholderNameInput.value}\nTotal: ${totalPrice}`)) {
                alert('Payment processed successfully! Thank you for your purchase.');
                // Di sini biasanya akan memproses pembayaran dan mengarahkan
                // window.location.href = 'success.html';
            }
        });
    }

    // Format nomor kartu (tambahkan spasi setiap 4 digit)
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            let value = this.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length > 19) formattedValue = formattedValue.substr(0, 19);
            this.value = formattedValue;
        });
    }

    // Atur tanggal minimum ke hari ini untuk tanggal kedaluwarsa
    if (expirationDateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const minDate = `${year}-${month}-${day}`;
        expirationDateInput.min = minDate;
        
        // Buka datepicker saat input diklik di mana saja
        expirationDateInput.addEventListener('click', function() {
            // Gunakan showPicker() jika tersedia (browser modern)
            if (typeof this.showPicker === 'function') {
                try {
                    this.showPicker();
                } catch (err) {
                    // Cadangan: fokuskan input
                    this.focus();
                }
            } else {
                // Cadangan untuk browser lama: fokuskan dan picu klik pada ikon kalender
                this.focus();
                // Coba klik indikator pemilih kalender
                setTimeout(() => {
                    const indicator = this.shadowRoot?.querySelector('input') || this;
                    if (indicator && typeof indicator.showPicker === 'function') {
                        try {
                            indicator.showPicker();
                        } catch (e) {
                            // Jika showPicker gagal, pastikan fokus
                            this.focus();
                        }
                    }
                }, 10);
            }
        });
        
        // Juga buka saat fokus
        expirationDateInput.addEventListener('focus', function() {
            if (typeof this.showPicker === 'function') {
                try {
                    this.showPicker();
                } catch (err) {
                    // Abaikan kesalahan
                }
            }
        });
        
        // Validasi tanggal kedaluwarsa tidak di masa lalu
        expirationDateInput.addEventListener('change', function() {
            if (this.value) {
                const selectedDate = new Date(this.value);
                const currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0); // Atur ke awal hari untuk perbandingan
                selectedDate.setHours(0, 0, 0, 0);
                
                if (selectedDate < currentDate) {
                    alert('Please select a valid expiration date (not in the past)');
                    this.value = '';
                    this.focus();
                }
            }
        });
    }

    // Validasi CVV (hanya angka, maksimal 4 digit)
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    // Validasi nama pemegang kartu (hanya huruf dan spasi)
    if (cardholderNameInput) {
        cardholderNameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }
});

