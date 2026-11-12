/* =========================================================
   JAVASCRIPT PORTOFOLIO
   Menu mobile, tahun otomatis, dan navigasi aktif
   ========================================================= */

// Mengambil tombol menu dan elemen navigasi dari HTML
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav-link");

// Membuka atau menutup menu navigasi pada tampilan ponsel
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("open", !isExpanded);
});

// Menutup menu setelah salah satu tautan navigasi dipilih
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Menampilkan tahun saat ini secara otomatis pada footer
document.querySelector("#year").textContent = new Date().getFullYear();

// Memberi penanda pada menu sesuai bagian halaman yang sedang terlihat
const pageSections = document.querySelectorAll("main section[id], .hero");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const currentId = entry.target.id || "beranda";
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isCurrent);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

// Memantau setiap bagian yang memiliki tujuan navigasi
pageSections.forEach((section) => sectionObserver.observe(section));
