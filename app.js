const colors = ["green","#a5575d","#e1679c","#daa520","#a5575d","#d4b9d4","#a5575d","#8990e6","#769da6", "#daa520","#769da6","#e1679c","red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = RandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function RandomNumber  ()  {
  return Math.floor(Math.random() * colors.length);
};
