const year = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.innerHTML = `© ${year}
  <span class="l-c" style="cursor:pointer;" onclick="openInstagramdev()">Ahmed Eweis</span>
  جميع الحقوق محفوظة | تصميم وتطوير بواسطة`;
  }
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("dropdown-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  }
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const body = document.body;
  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeIcon) darkModeIcon.src = "icons/sun.png";
    updateHeroImage();
  };
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeIcon) darkModeIcon.src = "icons/moon.png";
    updateHeroImage();
  };
  // عند التحميل
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  // عند الضغط على الزر
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
});
function updateHeroImage() {
  const image = document.getElementById("hero-image");
  const isDark = document.body.classList.contains("dark-mode");
  if (image) {
    image.src = isDark ? "3eznaD.png" : "3eznaL.png";
  }
}
function openInstagram() {
  const now = Date.now();
  window.location.href = "instagram://user?username=ahmed_eweis0";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://www.instagram.com/ahmed_eweis0/";
    }
  }, 1000);
}
function openTikTok() {
  const username = "ahmed_eweis0";
  const deepLink = `tiktok://user/@${username}`;
  const webUrl = `https://www.tiktok.com/@${username}`;
  const now = Date.now();
  window.location.href = deepLink;
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = webUrl;
    }
  }, 1000);
}
function openTelegram() {
  const now = Date.now();
  window.location.href = "tg://resolve?domain=Eweis";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://t.me/Eweis";
    }
  }, 1000);
}
function openWhatsAppChannel() {
  const now = Date.now();
  window.location.href = "whatsapp://send?phone=201153161437";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://wa.me/201153161437";
    }
  }, 1000);
}
function openFacebook() {
  const now = Date.now();
  window.location.href = "fb://profile/Wesso00";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://www.facebook.com/Wesso00";
    }
  }, 1000);
}
function openX() {
  const now = Date.now();
  window.location.href = "twitter://user?screen_name=ahmed_eweis0";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://x.com/ahmed_eweis0";
    }
  }, 1000);
}
function openSnapchat() {
  const now = Date.now();
  window.location.href = "snapchat://add/ahmed_eweis0";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://www.snapchat.com/add/ahmed_eweis0";
    }
  }, 1000);
}
function openYouTube() {
  const now = Date.now();
  const channelHandle = "@ahmed_eweis0";
  const webUrl = `https://www.youtube.com/${channelHandle}`;
  window.location.href = webUrl;
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = webUrl;
    }
  }, 1000);
}
// جديد
function openPortfolio() {
  window.location.href = "https://falcon-core.vercel.app/"; // عدلها حسب لينك بورتفوليوك
}
function openGitHub() {
  const now = Date.now();
  window.location.href = "github://profile/Ahmedeweis";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://github.com/Ahmedeweis";
    }
  }, 1000);
}
function openLinkedIn() {
  const now = Date.now();
  window.location.href = "linkedin://in/ahmed-eweis";
  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.location.href = "https://www.linkedin.com/in/ahmed-eweis/";
    }
  }, 1000);
}
