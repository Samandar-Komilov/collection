let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
      count--;
      value.style.color = "red";
    }
    else if (styles.contains('increase')){
      count++;
      value.style.color = "green";
    }
    else {
      count = 0;
      value.style.color = "grey";
    }
    value.textContent = count;
  })
})

// function dark(check){
//   let result = document.getElementById("darkmode");
//   if (result == true) {
//     document.body.style.backgroundColor = "black";
//   }
//   else {
//     document.body.style.backgroundColor = "white";
//   }
// }

//I just tried to create dark mode