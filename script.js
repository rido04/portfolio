document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleSidebar = document.getElementById("theme-toggle-sidebar");
  const body = document.body;

  menuToggle.addEventListener("click", function () {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });

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
      themeToggleSidebar.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
      themeToggleSidebar.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
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

  themeToggleSidebar.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
      updateToggleButton("dark-mode");
    } else {
      localStorage.setItem("theme", "");
      updateToggleButton("");
    }
  });
});
