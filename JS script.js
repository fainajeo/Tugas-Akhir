document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname;

    // Fungsi untuk validasi form input
    function validateForm(event) {
        event.preventDefault();
        var inputField = document.getElementById("inputField");
        if(inputField.value.trim() === ""){
            alert("Input tidak boleh kosong!");
        }
    }

    // Memeriksa halaman saat ini
    if (currentPage === "/index.html") {
        // Kode untuk halaman utama
        document.getElementById("myForm").addEventListener("submit", validateForm);
    } else if (currentPage === "/halaman1.html") {
        // Kode untuk halaman 1
    } else if (currentPage === "/halaman2.html") {
        // Kode untuk halaman 2
    }
});

