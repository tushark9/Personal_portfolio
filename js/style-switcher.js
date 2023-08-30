// ===================== TOGGLE STYLE SWITCHER ===================== //
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// ===================== THEME COLORS =============================== //
const alternateStyles =document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            
        }
        else{
            style.setAttribute("disabled","true");

        }
    })
}
// =============================== THEME LIGHT AND DARK MODE ====================//
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load",()=>{
    if( document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        }
        else{
            dayNight.querySelector("i").classList.add("fa-moon")
        }
    })