var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
const opentab=(tabname)=>{
 for(tablink of tablinks){
    tablink.classList.remove("active-link");
 }
 for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu=document.getElementById("sidemenu");
const openmenu=()=>{
    sidemenu.style.right="0";
}
const closemenu=()=>{
    sidemenu.style.right="-200px"
}
const text=document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Android Developer";
    },0);
    setTimeout(()=>{
        text.textContent="Web Developer";
    },4000);
    setTimeout(()=>{
        text.textContent="Desktop Developer";
    },8000);
    setTimeout(()=>{
        text.textContent="Freelancer Developer";
    },12000);
}
textLoad();
setInterval(textLoad,18000)