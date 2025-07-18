// Set nama di welcome
document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Masukkan nama Anda:");
  const welcome = document.getElementById("welcomeMessage");
  if (name && welcome) {
    welcome.innerText = `Hi ${name}, Welcome To Website`;
  }
});

// Validasi dan tampilkan form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tglLahir = document.getElementById("tglLahir").value;
    const gender = document.querySelector("input[name='gender']:checked");
    const pesan = document.getElementById("pesan").value;

    if (!nama || !tglLahir || !gender || !pesan) {
      alert("Semua field wajib diisi!");
      return;
    }

    const now = new Date();

    result.innerHTML = `
      <p><strong>Current time:</strong> ${now}</p>
      <p><strong>Name:</strong> ${nama}</p>
      <p><strong>Date of Birth:</strong> ${tglLahir}</p>
      <p><strong>Gender:</strong> ${gender.value}</p>
      <p><strong>Message:</strong> ${pesan}</p>
    `;
  });
});

const images = [
    "asset/B1.jpg",
    "asset/B2.jpg",
    "asset/B3.jpg"
  ];

  let current = 0;
  const banner = document.getElementById("banner-image");

  setInterval(() => {
    current = (current + 1) % images.length;
    banner.style.opacity = 0;
    setTimeout(() => {
      banner.src = images[current];
      banner.style.opacity = 1;
    }, 500); // transition half second
  }, 4000);