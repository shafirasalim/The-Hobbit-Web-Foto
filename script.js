// Menampilkan tombol setelah scroll lebih dari 500px
window.onscroll = function () {
  let button = document.getElementById("scrollsite");
  if (document.documentElement.scrollTop > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Fungsi untuk menggulir ke atas
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
