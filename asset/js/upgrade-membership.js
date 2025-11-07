// Pilih membership plan
let selectedMembershipPlan = null;

function selectMembershipPlan(plan) {
    // Hapus class selected dari semua card
    document.querySelectorAll('.membership-plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Tambahkan class selected ke card yang diklik
    event.currentTarget.classList.add('selected');
    
    // Simpan membership plan yang dipilih
    selectedMembershipPlan = plan;
    
    console.log('Membership plan yang dipilih:', plan);
}

// Ganti tab metode pembayaran
function switchPaymentMethod(method, clickedElement) {
    // Hapus class active dari semua tab
    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Tambahkan class active ke tab yang diklik
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else {
        // Cari tab berdasarkan atribut data-method
        const tab = document.querySelector(`.payment-tab[data-method="${method}"]`);
        if (tab) {
            tab.classList.add('active');
        }
    }
    
    // Sembunyikan semua grid metode pembayaran
    const ewalletOptions = document.getElementById('ewallet-options');
    const kartuOptions = document.getElementById('kartu-options');
    const transferOptions = document.getElementById('transfer-options');
    
    if (ewalletOptions) ewalletOptions.style.display = 'none';
    if (kartuOptions) kartuOptions.style.display = 'none';
    if (transferOptions) transferOptions.style.display = 'none';
    
    // Tampilkan grid metode pembayaran yang dipilih
    switch(method) {
        case 'ewallet':
            if (ewalletOptions) ewalletOptions.style.display = 'grid';
            break;
        case 'kartu':
            if (kartuOptions) kartuOptions.style.display = 'grid';
            break;
        case 'transfer':
            if (transferOptions) transferOptions.style.display = 'grid';
            break;
    }
    
    // Hapus pilihan metode pembayaran yang dipilih sebelumnya
    document.querySelectorAll('.payment-method-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

// Pilih metode pembayaran
let selectedPaymentMethod = null;

function selectPaymentMethod(method) {
    // Hapus class selected dari semua tombol
    document.querySelectorAll('.payment-method-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Tambahkan class selected ke tombol yang diklik
    event.currentTarget.classList.add('selected');
    
    // Simpan metode pembayaran yang dipilih
    selectedPaymentMethod = method;
    
    console.log('Metode pembayaran yang dipilih:', method);
}

// Proses upgrade membership
function processUpgrade() {
    // Validasi
    if (!selectedMembershipPlan) {
        alert('Mohon pilih membership plan!');
        return;
    }
    
    if (!selectedPaymentMethod) {
        alert('Mohon pilih metode pembayaran!');
        return;
    }
    
    // Get membership plan name and price
    const membershipPlans = {
        'reguler': { name: 'Reguler', price: 'Free Plan' },
        'silver': { name: 'Silver', price: 'Rp50.000' },
        'gold': { name: 'Gold', price: 'Rp100.000' },
        'diamond': { name: 'Diamond', price: 'Rp225.000' }
    };
    
    // Get payment method name
    const paymentMethodNames = {
        'gopay': 'Gopay',
        'shopeepay': 'ShopeePay',
        'dana': 'Dana',
        'ovo': 'OVO',
        'visa': 'Visa',
        'mastercard': 'Mastercard',
        'bca': 'BCA',
        'mandiri': 'Mandiri',
        'bni': 'BNI'
    };
    
    const plan = membershipPlans[selectedMembershipPlan];
    const paymentMethodName = paymentMethodNames[selectedPaymentMethod] || selectedPaymentMethod;
    
    // Konfirmasi
    if (confirm(`Konfirmasi Upgrade Membership:\n\nPlan: ${plan.name}\nHarga: ${plan.price}\nMetode Pembayaran: ${paymentMethodName}\n\nLanjutkan?`)) {
        // Di sini biasanya Anda akan mengirim data ke backend
        console.log('Memproses upgrade membership:', {
            plan: selectedMembershipPlan,
            paymentMethod: selectedPaymentMethod
        });
        
        // Untuk keperluan demo, tampilkan pesan sukses
        alert('Upgrade membership berhasil! Redirecting...');
        
        // Anda bisa redirect ke halaman payment atau success page
        // window.location.href = 'payment-success.html';
    }
}

// Toggle Menu Mobile
function toggleMobileMenu() {
    const sidebar = document.getElementById('leftSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!sidebar || !overlay) {
        console.error('Sidebar atau overlay tidak ditemukan');
        return;
    }
    
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    console.log('Menu mobile di-toggle:', !isActive);
}

function closeMobileMenu() {
    const sidebar = document.getElementById('leftSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) {
        sidebar.classList.remove('active');
    }
    
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    document.body.style.overflow = '';
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Set tab metode pembayaran default ke e-wallet
    switchPaymentMethod('ewallet');
    
    // Tambahkan event listener klik ke tab pembayaran
    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const method = this.getAttribute('data-method');
            switchPaymentMethod(method, this);
        });
    });
    
    // Toggle menu mobile - Pastikan berfungsi
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }
    
    // Tutup sidebar saat klik pada icon navigasi (mobile)
    document.querySelectorAll('.nav-icon-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                closeMobileMenu();
            }
        });
    });
    
    // Tutup sidebar saat klik di luar sidebar (mobile)
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('leftSidebar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (window.innerWidth <= 992 && sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target) && 
                !sidebarOverlay.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Handle perubahan ukuran window
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMobileMenu();
        }
    });
});

