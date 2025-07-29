const quotes = [
  "“Her dalga bir gün kıyıya ulaşır.”",
  "“Bugün hissettiğin fırtına, yarının güneşine yer açar.”",
  "“Derin nefes al, çünkü bu da geçecek.”",
  "“Senin gülüşün, dünyanın en güzel sabahı.”",
  "“Yalnız değilsin, seni düşünen biri var.”"
];

function changeQuote() {
  const text = document.getElementById("quote-text");
  const random = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[random];
}

function saveEntry() {
  const entry = document.getElementById("entry").value;
  localStorage.setItem("ilayda-journal", entry);
  document.getElementById("saved-status").textContent = "Kaydedildi 💾";
}

