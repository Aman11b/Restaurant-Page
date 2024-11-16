
// src/home.js
function loadHome(){
    // create element

    const content=document.createElement("div");
    content.classList.add("home-content");

    const heading=document.createElement("h1");
    heading.textContent="Welcome to out restaurant";

    const imageElement=document.createElement("img");
    imageElement.src=testImage;

    const description=document.createElement("p");
    description.textContent='Enjoy our delicious menu, made with fresh ingredients and lots of love.';

    // append element to the content div
    content.appendChild(heading);
    content.appendChild(description);

    const mainContent=document.getElementById('content');
    mainContent.appendChild(content);
}
export default loadHome;