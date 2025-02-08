const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");
  menu.classList.toggle("absolute");
  menu.classList.toggle("top-16");
  menu.classList.toggle("left-0");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("w-full");
  menu.classList.toggle("shadow-lg");
  menu.classList.toggle("p-4");
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Cek localStorage untuk tema yang disimpan
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  updateToggleButton(savedTheme);
}

// Fungsi untuk mengupdate tombol toggle
function updateToggleButton(theme) {
  if (theme === "dark-mode") {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
  }
}

// Event listener untuk tombol toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    updateToggleButton("dark-mode");
  } else {
    localStorage.setItem("theme", "");
    updateToggleButton("");
  }
});

const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

// Fungsi untuk toggle menu di mobile
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");
  menu.classList.toggle("absolute");
  menu.classList.toggle("top-16");
  menu.classList.toggle("left-0");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("dark:bg-gray-900");
  menu.classList.toggle("w-full");
  menu.classList.toggle("shadow-lg");
  menu.classList.toggle("p-4");
});

// Fungsi untuk mengaktifkan Dark Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");

  // Animasi ikon berubah
  if (document.body.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    themeText.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    themeText.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

// Event listener untuk tombol tema
themeToggle.addEventListener("click", toggleTheme);

// Cek Local Storage untuk menyimpan preferensi tema
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark", "bg-gray-900", "text-white");
  themeIcon.classList.replace("fa-moon", "fa-sun");
  themeText.textContent = "Light Mode";
}
