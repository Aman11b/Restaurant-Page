import pastaImage from '../img/pasta.jpg';
import burgerImage from '../img/burger.jpg';
import saladImage from '../img/salad.jpg';
import pizzaImage from '../img/pizza.jpg';
import soupImage from '../img/soup.jpg';


function loadMenu(){
    const content=document.createElement("div");
    content.classList.add("menu-content");

    const heading=document.createElement("h1");
    heading.classList.add('menu-header');
    heading.textContent="Menu";
    content.appendChild(heading);

    // Array of Menu Items
    const menuItems = [
        { name: "Pasta", description: "Creamy Alfredo Pasta", price: "$12", image:pastaImage },
        { name: "Burger", description: "Juicy Beef Burger", price: "$10", image: burgerImage},
        { name: "Salad", description: "Fresh Caesar Salad", price: "$8", image:saladImage },
        { name: "Pizza", description: "Cheese Margherita Pizza", price: "$15", image:  pizzaImage},
        { name: "Soup", description: "Classic Tomato Soup", price: "$5", image: soupImage },
    ];

    // create a container for food card

    const foodContainer=document.createElement('div');
    foodContainer.classList.add("food-container");

    menuItems.forEach(item=>{

        const card=document.createElement("div");
        card.classList.add("food-card");

        const image=document.createElement("img");
        image.src=item.image;
        image.alt=`${item.name} image`;
        card.appendChild(image);

        const name=document.createElement("h3");
        name.textContent=item.name;
        card.appendChild(name);

        const desc = document.createElement("p");
        desc.textContent = item.description;
        card.appendChild(desc);

        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = item.price;
        card.appendChild(price);

        foodContainer.appendChild(card);
    });

    content.appendChild(foodContainer);

    const mainContent=document.getElementById('content');
    mainContent.appendChild(content);
}

export default loadMenu;