const btn = document.getElementById("ChangeColor");
const colorVal = document.getElementById('ColorValue');

// function ChangeColor(){
//   let color = document.getElementById('ColorInput').value
//   document.body.style.backgroundColor = color;
// }

btn.addEventListener('click', () => {
  let color = document.getElementById('ColorInput').value;
  document.body.style.backgroundColor = color;
  colorVal.textContent = color;
})

// Change background color with 2 methods: onclick and addEventListener()

