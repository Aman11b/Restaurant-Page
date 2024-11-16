import loadHome from "./home";
import "./styles.css";
import "./normalizer.css";

function initializeWebsite(){
    
    // clean any existing content in the #content div
    content.innerHTML='';
    loadHome();
}

initializeWebsite();