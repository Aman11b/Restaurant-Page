import img from '../img/cafe.gif';  // Replace with your contact image
import insta from '../img/insta.png';  // Replace with your social icon image
import github from '../img/github.png';  // Replace with your social icon image
import lin from '../img/linedin.png';  // Replace with your social icon image
import em from '../img/email.png';  // Replace with your email icon image

function loadContent() {
    const content = document.createElement("div");
    content.classList.add("contact-content");

    const heading = document.createElement("h1");
    heading.classList.add("contact-heading");
    heading.textContent = "Contact Us";
    content.appendChild(heading);


    const image = document.createElement("img");
    image.classList.add("image");
    image.src = img;  // Replace with your image path
    image.alt = "Contact Image";
    content.appendChild(image);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-desc");

    const description = document.createElement("p");
    description.classList.add("social-description");
    description.textContent = `Hey there, I'm Aman—your go-to Computer Science Engineer with a knack for full-stack development and web design. Oh, and did I mention I’m also a poet? Yep, poetry born from the wrath of life (you guessed it, heartbreak!). I blend tech and creativity like it's a superpower. Follow me on socials and let’s see where this journey takes us!`;
    contactContainer.appendChild(description);

    const socials=document.createElement("div");
    socials.classList.add("socials");

    const instagramBtn = document.createElement("a");
        instagramBtn.href = "https://www.instagram.com/tales.by.sunflower/";
        instagramBtn.target = "_blank";
        const instagramImg = document.createElement("img");
        instagramImg.src = insta;  // Replace with actual Instagram icon
        instagramImg.alt = "Instagram";
        instagramImg.classList.add("social-icon");
        instagramBtn.appendChild(instagramImg);
    socials.appendChild(instagramBtn);

    const githubBtn = document.createElement("a");
        githubBtn.href = "https://github.com/Aman11b";
        githubBtn.target = "_blank";
        const githubImg = document.createElement("img");
        githubImg.src = github;  // Replace with actual GitHub icon
        githubImg.alt = "GitHub";
        githubImg.classList.add("social-icon");
        githubBtn.appendChild(githubImg);
    socials.appendChild(githubBtn);

    const linkedinBtn = document.createElement("a");
        linkedinBtn.href = "https://www.linkedin.com/in/aman-singh-120a76234/";
        linkedinBtn.target = "_blank";
        const linkedinImg = document.createElement("img");
        linkedinImg.src = lin;  // Replace with actual LinkedIn icon
        linkedinImg.alt = "LinkedIn";
        linkedinImg.classList.add("social-icon");
        linkedinBtn.appendChild(linkedinImg);
    socials.appendChild(linkedinBtn);

    contactContainer.appendChild(socials)


    content.appendChild(contactContainer);

    const mainContent = document.getElementById("content");
    mainContent.appendChild(content);
}

export default loadContent;
