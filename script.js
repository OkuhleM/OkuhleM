const bars = document.querySelectorAll('.progress');

const convertToArray = Array.from(bars);


convertToArray.forEach(item => {
    let value = item.id;
    let counter = 0;
    let interval = setInterval(()=>{
        item.style.width = counter + "%";

        if(counter == value){
            clearInterval(interval);

        }
        counter++;
    },8);
});

function humburgerMenu() {
    var x = document.getElementById("ham-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  }

  const menu = document.querySelector(".icon");
const navBar = document.querySelector(".navigation-bar");
window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".introduction");
  navBar.classList.toggle("sticky", window.scrollY > 0);
});
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
});