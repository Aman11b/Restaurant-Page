function loadHome(){
    const content=document.createElement("div");
    content.classList.add("contact-content");

    const heading=document.createElement("h1");
    heading.textContent="Home";

    content.appendChild(heading);

    const mainContent=document.getElementById("content");
    mainContent.appendChild(content);
}

export default loadHome;