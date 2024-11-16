import loadHome from "./home";
import loadMenu from "./menu";
import loadContent from "./contact";

import "./styles.css";

function initializeWebsite(){
    
    // clean any existing content in the #content div
    content.innerHTML='';
    loadHome();

    // GET THE BUTTONS
    const homeTab=document.getElementById("home-tab");
    const menuTab=document.getElementById("menu-tab");
    const contactTab=document.getElementById("contect-tab");


    homeTab.addEventListener("click",()=>{
        content.innerHTML='';
        loadHome();
    });

    menuTab.addEventListener("click",()=>{
        content.innerHTML='';
        loadMenu();
    });

    contactTab.addEventListener("click",()=>{
        content.innerHTML='';
        loadContent();
    });
}

initializeWebsite();


