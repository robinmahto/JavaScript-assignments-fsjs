const btn = document.getElementById("submit");
const qrInput = document.getElementById("input");
const qrImg = document.getElementById("img");
const main = document.getElementById("main");

btn.addEventListener("click", function () {
  if (!qrInput.value) {
    return;
  }
  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
  main.classList.add("active");
  qrImg.classList.add("img");
  if (!qrInput.value) {
    main.classList.remove("active");
    qrImg.classList.remove("img");
  }
});
