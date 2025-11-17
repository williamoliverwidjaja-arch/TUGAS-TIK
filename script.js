// Fungsi untuk menampilkan/menyembunyikan Dropdown Administrasi Member
function toggleDropdown() {
    // Dapatkan elemen dropdown berdasarkan ID
    const dropdown = document.getElementById("memberDropdown");
    
    // Toggle class 'show' untuk menampilkan atau menyembunyikan
    dropdown.classList.toggle("show");
}

// Menutup dropdown jika user mengklik di luar area dropdown
window.onclick = function(event) {
    // Cek apakah yang diklik BUKAN tombol dropdown
    if (!event.target.matches('.member-btn')) {
        // Dapatkan semua elemen dropdown yang memiliki class 'show' (tampil)
        const dropdowns = document.getElementsByClassName("dropdown-content");
        
        // Loop melalui semua dropdown
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            
            // Jika dropdown sedang terbuka, sembunyikan dengan menghapus class 'show'
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Anda bisa menambahkan fungsionalitas JavaScript lainnya di sini, 
// misalnya: 
// 1. Memuat data katalog rumah dari file JSON
// 2. Filter atau sort katalog
// 3. Validasi form (jika ada form login/registrasi)