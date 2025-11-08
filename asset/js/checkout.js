// Complete Top-Up Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Payment option selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Complete Order button functionality
    const completeOrderBtn = document.getElementById('completeOrderBtn');
    const playerIdInput = document.getElementById('playerId');
    const serverRegionInput = document.getElementById('serverRegion');
    const receiptCheckbox = document.getElementById('receiptEmail');

    if (completeOrderBtn) {
        completeOrderBtn.addEventListener('click', function() {
            // Validate form
            if (!playerIdInput.value.trim()) {
                alert('Please enter your Player ID');
                playerIdInput.focus();
                return;
            }

            if (!serverRegionInput.value.trim()) {
                alert('Please enter your Server/Region');
                serverRegionInput.focus();
                return;
            }

            // Check if payment method is selected
            const selectedPayment = document.querySelector('.payment-option.active');
            if (!selectedPayment) {
                alert('Please select a payment method');
                return;
            }

            // Get order details
            const totalPrice = document.querySelector('.total-price').textContent;
            const paymentMethod = selectedPayment.querySelector('.payment-text').textContent;
            const sendReceipt = receiptCheckbox.checked;

            // Show confirmation
            const receiptInfo = sendReceipt ? '\nReceipt will be sent to your email.' : '';
            if (confirm(`Confirm your order?\n\nPlayer ID: ${playerIdInput.value}\nServer/Region: ${serverRegionInput.value}\nPayment Method: ${paymentMethod}\nTotal: ${totalPrice}${receiptInfo}`)) {
                alert('Order submitted successfully! Redirecting to payment...');
                // Here you would typically redirect to payment gateway
                // window.location.href = 'payment-gateway.html';
            }
        });
    }

    // Form input validation
    if (playerIdInput) {
        playerIdInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }

    if (serverRegionInput) {
        serverRegionInput.addEventListener('input', function() {
            // Allow alphanumeric and spaces
            this.value = this.value.replace(/[^a-zA-Z0-9\s]/g, '');
        });
    }
});

