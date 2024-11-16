function loadHome(){
    const content=document.createElement("div");
    content.classList.add("home-content");

    // headline
    const heading=document.createElement("h1");
    heading.classList.add("home-heading");
    heading.textContent="Home";
    content.appendChild(heading);

    const orderBtn=document.createElement('button');
    orderBtn.classList.add("order-btn");
    orderBtn.textContent="Order Now"
    content.appendChild(orderBtn);

    const description=document.createElement("p");
    description.classList.add("home-desc")
    description.textContent="Serving up great tunes with a side of classy food—come for the bites, stay for the vibes! Whether you're here to savor our delicious dishes or just enjoy the perfect playlist, we’ve got something for every mood. Good music, good food, and great times await you!";
    content.appendChild(description);

    const mainContent=document.getElementById("content");
    mainContent.appendChild(content);
}

export default loadHome;