const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// header
//nav
const headerNav = document.getElementsByTagName("nav")[0].children;
for (let i = 0; i < headerNav.length; i++) {
  headerNav[i].textContent = Object.entries(siteContent.nav)[i][1];
  headerNav[i].className = "italic";
}

//img
document.getElementById("logo-img").src = siteContent.images["logo-img"];

//--header

// section class="cta"
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.images["cta-img"];

// --section class="cta"

// section class="main-content"
// h4 and p
const mainContentObject = Object.entries(siteContent["ana-içerik"]);

const mainContentH4 = document.querySelectorAll(".main-content h4");
const mainContentp = document.querySelectorAll(".main-content p");

for (let i = 0; i < mainContentObject.length; i++) {
  i % 2 == 0
    ? (mainContentH4[i / 2].textContent = mainContentObject[i][1])
    : (mainContentp[Math.floor(i / 2)].textContent = mainContentObject[i][1]);
}

// img
document.querySelector("#middle-img").src = siteContent.images["accent-img"];

// --section class="main-content"

// contact
document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim.email;

// --contact

// footer
document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").className = "bold";

// --footer
