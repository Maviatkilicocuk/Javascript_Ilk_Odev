// Kullanıcının adını al ve ekrana yaz
let userName = prompt("Lütfen adınızı giriniz:");
document.getElementById("myName").innerText = userName || "Misafir"; // Boşsa "Misafir" yaz

// Saati gösteren fonksiyon
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.toLocaleDateString("tr-TR", { weekday: "long" });

  // Tek haneli sayıları başına 0 ekleyerek düzenle
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} - ${day}`;

  document.getElementById("myClock").innerText = time;
  setTimeout(showTime, 1000); // 1 saniyede bir güncelle
}

// Sayfa yüklendiğinde saat fonksiyonunu başlat
window.onload = showTime;
