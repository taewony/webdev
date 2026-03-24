const btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  alert("버튼이 클릭되었습니다.");
});

const container = document.querySelector(".container");

/*
container.addEventListener('mouseover', function(){ 

    this.style.backgroundColor = '#ccc'; 

}); 

container.addEventListener('mouseout', function(){ 

    this.style.backgroundColor = ''; 

}); */

container.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "silver";
});
container.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "";
});

// change event
let colorSelect = document.getElementById("color");
colorSelect.addEventListener("change", function () {
  //   let target = document.querySelector("body");
  let target = document.body;
  target.style.backgroundColor = this.value; // colorSelect.value
});

var links = document.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("focus", function (event) {
    event.preventDefault();
    this.style.color = "red";
    this.style.fontWeight = "bold";
    this.style.backgroundColor = "#ccc";
  });
});

window.addEventListener("keydown", function (event) {
  let userInput = event.key;
  console.log("사용자가 입력한 키:", userInput);
  if (userInput === "ArrowLeft") {
    this.alert("왼쪽 화살표 키가 눌렸습니다.");
  } else if (userInput === "ArrowRight") {
    this.alert("오른쪽 화살표 키가 눌렸습니다.");
  }
});
