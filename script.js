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
