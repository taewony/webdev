// alert("Hello, World!");
document.getElementsByTagName("h1")[0].innerHTML = "Hello, World!";

document.getElementById("list1").style.backgroundColor = "silver";

let list = document.getElementsByClassName("list");
for (let i = 0; i < list.length; i++) {
  list[i].style.listStyle = "none";
}

document.querySelector("#list2").style.backgroundColor = "lightblue";
document.querySelectorAll(".list")[1].style.fontWeight = "bold";

let myParagraphs = document.querySelectorAll("article p");
for (let i = 0; i < myParagraphs.length; i++) {
  myParagraphs[i].style.color = "pink";
}

for (mp of myParagraphs) {
  mp.style.backgroundColor = "#ebebeb";
}
