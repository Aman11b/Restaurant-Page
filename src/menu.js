function loadMenu(){
    const content=document.createElement("div");
    content.classList.add("menu-content");

    const heading=document.createElement("h1");
    heading.textContent="Menu";

    content.appendChild(heading);

    const mainContent=document.getElementById('content');
    mainContent.appendChild(content);
}

export default loadMenu;