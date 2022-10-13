const btn = document.getElementById("button");

btn.addEventListener("click", function (e) {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons += val[Math.floor(Math.random() * 16)];
  }
  document.getElementById("canvas").style.background = cons;
});
