function generate() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let total = r + g + b;
  rgb = [`rgb(${r}, ${g}, ${b})`, total];

  return rgb;
}
const btns = document.querySelectorAll("button");
const sections = document.querySelectorAll("section");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    generate();
    btn.parentElement.style.backgroundColor = rgb[0];
    btn.previousElementSibling.innerHTML = rgb[0];
    if (rgb[1] < 380) {
      btn.previousElementSibling.style.color = "white";
    } else btn.previousElementSibling.style.color = "black";
  });
}
