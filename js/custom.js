// toggle Menu
let btn = document.getElementById("btn");
let menuList = document.getElementById("menuList");
btn.addEventListener("click", ()=>{
    menuList.classList.toggle("show");
});

// header sticky
    let headerA= document.querySelector("#nav");
    window.onscroll = function() {myFunction();};	
    let sticky = headerA.offsetTop; 
    function myFunction() {
      if (window.pageYOffset > sticky) {
        headerA.classList.add("stickyBar");
      } else {
        headerA.classList.remove("stickyBar");
      }
    }

//------Counter ------

let num = document.querySelectorAll(".num");
let interval = 5000;


num.forEach((val)=>{
    let startVal = 0;
    let endVal = parseInt(val.getAttribute("data-value"));
    let duration = Math.floor(endVal / interval);

    let counter = setInterval(()=>{
        startVal +=1;
        val.textContent = startVal;

        if(startVal == endVal){
            clearInterval(counter);
        }
    },duration);
});

// OnScroll Animation
let AniBox = document.querySelectorAll(".AniBox");
window.addEventListener("scroll", animationBox);
function animationBox(){
   for(let i =0; i<AniBox.length; i++){
    let trigerBtn = window.innerHeight /5*4;
    console.log(trigerBtn);
    let boxTop = AniBox[i].getBoundingClientRect().top;
    console.log(boxTop);

    if(boxTop < trigerBtn){
      AniBox[i].classList.add("AniBoxShow");
    }
    else{
      AniBox[i].classList.remove("AniBoxShow");
    }
   }
    
}

window.addEventListener("load",animationBox2);
function animationBox2(){
  let AniBox2 = document.querySelectorAll("AniBox2");
      AniBox2.forEach((val)=>{
        val.classList.add("AniBoxShow");
      });
}

//--Active- BTN

let listItems = document.querySelectorAll("#menuList>li");
listItems.forEach((navLsit)=>{
  navLsit.addEventListener("click",()=>{
    listItems.forEach((li)=>{
      li.classList.remove("active");
      li.classList.add("activeRemove");
    });
    navLsit.classList.add("active");
  });
});

