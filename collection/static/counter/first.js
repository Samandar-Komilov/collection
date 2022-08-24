let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const decrease = document.querySelector(".decrease")

increase.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
})

decrease.addEventListener("click", () => {
  count--;
  value.innerHTML = count;
})

reset.addEventListener("click", () => {
  count = 0;
  value.innerHTML = count;
})