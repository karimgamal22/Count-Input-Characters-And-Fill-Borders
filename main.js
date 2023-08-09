let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let Mixlength = input.getAttribute("maxlength");

count.innerHTML = Mixlength;
input.oninput = () => {
  count.innerHTML = Mixlength - input.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");

  progress.style.width = `${(input.value.length * 100) / Mixlength}%`;
};
