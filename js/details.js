import { products } from "./products.js";



// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId);

// Find the product with the matching ID
const product = products.find(product => product.id == productId);

// Function to render product details
function renderProductDetails(product) {
    const detailsContainer = document.getElementById("details-container");

    // Create card element
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.style.backgroundColor = "antiquewhite";
    card.style.height = "650px";

    // Create link element for back button
    const backButton = document.createElement("a");
    backButton.href = "index.html"; // Link back to index.html
    backButton.classList.add("back-button");
    backButton.style.backgroundColor="antiquewhite";
    backButton.style.padding="10px";
    backButton.style.paddingLeft="17px";
    backButton.style.width="10%"
    backButton.style.borderRadius="20px";
    backButton.style.position="absolute";
    backButton.style.top="20px";
    backButton.style.left="20px";
    backButton.style.zIndex="1111111111";

    // Create arrow icon for back button
    const arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fas", "fa-arrow-left", "arrow-icon");
    arrowIcon.style.color="rgb(119, 97, 81)";
    arrowIcon.style.fontSize="25px";


    // Append arrow icon to back button
    backButton.appendChild(arrowIcon);

    // Append back button to card
    card.appendChild(backButton);

    // Create image element
    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("card-img-top");
    image.alt = "Product Image";
    image.style.width = "100%";
    image.style.height = "400px";
    image.style.borderRadius = "10px";
    image.style.position="relative"

    // Create card body element
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create title element
    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.textContent = product.englishName;
    title.style.color = "black"; // Example style for name
    title.style.fontWeight = "bold";

    // Create kcal element
    const kcal = document.createElement("p");
    kcal.classList.add("card-text");
    kcal.textContent = product.kcal + "kcal";
    kcal.style.color = "rgb(119, 97, 81)";
    kcal.style.marginLeft ="0px";
    kcal.style.marginTop ="8px";
    kcal.style.fontWeight ="700";
    kcal.style.border = "1px solid rgb(119, 97, 81)";
    kcal.style.backgroundColor ="azure";
    kcal.style.padding = "5px";
    kcal.style.borderRadius = "17px";
    kcal.style.width = "12%";
    kcal.style.fontSize = "12px";

    // Create details element
    const details = document.createElement("p");
    details.classList.add("card-text");
    details.textContent = product.englishDetails;
    // Rest of your code for details styling...

    // Create price element
    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = product.price;
    price.textContent = product.price;
    price.style.color = "white";
    price.style.fontSize = "15px";
    price.style.border = "1px solid rgb(119, 97, 81)";
    price.style.backgroundColor = "rgb(119, 97, 81)";
    price.style.padding = "5px";
    price.style.paddingLeft = "12px";
    price.style.borderRadius = "17px";
    price.style.width = "18%";
    price.style.fontSize = "16px";
    // Append elements to card body
    cardBody.appendChild(title);
    cardBody.appendChild(kcal);
    cardBody.appendChild(details);
    cardBody.appendChild(price);

    // Append image and card body to card
    card.appendChild(image);
    card.appendChild(cardBody);

    // Append card to details container
    detailsContainer.appendChild(card);
}

// Render product details
renderProductDetails(product);



