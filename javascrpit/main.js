const nav1= document.getElementById("nav")
window.onscroll =function(){
 if(document.body.scrollTop >0 || document.documentElement.scrollTop >0){
   nav1.style.background="var(--color-primary)";
   nav1.style.boxShadow="0 1rem 2rem rgba(0,0,0,0.2)";
 }
 else{
  nav1.style.background="transparent";
  nav1.style.boxShadow="none";
 }
}
 
function faq(answer){
  let answerid =`${answer}p`;
  let icon =`${answer}i`;
  let text =document.getElementById(`${answerid}`);
  let iconlg =document.getElementById(`${icon}`);
  if(text.style.display=="block"){
    text.style.display="none";
    iconlg.classList.add("fa-regular");
    iconlg.classList.add("fa-plus");
    iconlg.classList.remove("fa-solid");
    iconlg.classList.remove("fa-minus");
  }
  else{
    text.style.display="block";
    iconlg.classList.remove("fa-regular");
    iconlg.classList.remove("fa-plus");
    iconlg.classList.add("fa-solid");
    iconlg.classList.add("fa-minus");
}
}
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    600: {
      slidesPerView: 2,
    }}
});
let openbtn=document.getElementById("bar-btn");
let menu=document.getElementById("nav-menu");
let closebtn=document.getElementById("nav-close-btn");
function menu1(){
  menu.style.display="flex";
  closebtn.style.display="inline-block";
  openbtn.style.display="none"
}
function close1(){
  menu.style.display="none";
  closebtn.style.display="none";
  openbtn.style.display="inline-block"
}
