function loadContent(){
    const content=document.createElement("div");
    content.classList.add("contact-content");

    const heading=document.createElement("h1");
    heading.textContent="contact us";

    content.appendChild(heading);

    const mainContent=document.getElementById("content");
    mainContent.appendChild(content);
}

export default loadContent;