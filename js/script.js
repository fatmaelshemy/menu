import { products } from "./products.js";


document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");
    let language = "1"; // Default language, assuming English is the default

    function renderProductsWithCategories() {
        // Clear existing content
        productContainer.innerHTML = "";
    
        // Get all unique categories
        const categories = Array.from(new Set(products.map(product => product.category)));
    
        // Loop through categories and render products for each category
        categories.forEach(category => {
            // Create category name element
            const categoryName = document.createElement("h4");
            categoryName.textContent = category;
            categoryName.id = category;
            categoryName.style.fontWeight = "bold";
            productContainer.appendChild(categoryName);
            const br = document.createElement("br");
            productContainer.appendChild(br);
    
            // Filter products based on category
            const filteredProducts = products.filter(product => product.category === category);
    
            // Add click event listener to category name element
            categoryName.addEventListener('click', function(event) {
                event.preventDefault();
    
                // Remove border from all category links
                document.querySelectorAll('.category-link').forEach(link => {
                    link.classList.remove('selected-category');
                });
    
                // Add border to the clicked category link
                categoryName.classList.add('selected-category');
            });
    
            // Render products for the current category
            renderProducts(filteredProducts);
        });
    }
    
    

    // Function to render products
   // Function to render products
function renderProducts(products) {
    // Render each product
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.style.backgroundColor="antiquewhite";
        card.style.border="none"

        // Create link element with product ID in the URL
        const link = document.createElement("a");
        link.href = `details.html?id=${product.id}`; // Add product ID to the URL
        link.style.textDecoration = "none"; // Remove underline from link

        const row = document.createElement("div");
        row.classList.add("row", "g-0");

        const contentColumn = document.createElement("div");
        contentColumn.classList.add("col-md-8");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = language == "2" ? product.arabicName : product.englishName;
        title.style.color = "black"; // Example style for name
        title.style.fontWeight = "bold";

        const details = document.createElement("p");
        details.classList.add("card-text");
        details.innerHTML = `<small>${language == "2" ? product.arabicDetails : product.englishDetails}</small>`;
        details.style.color = "black";

        const priceKcalContainer = document.createElement("div");
        priceKcalContainer.classList.add("d-flex", "justify-content-start");

        const price = document.createElement("p");
        price.classList.add("card-text");
        price.textContent = product.price;
        price.style.color = "white";
        price.style.fontSize = "15px";
        price.style.border = "1px solid rgb(119, 97, 81)";
        price.style.backgroundColor = "rgb(119, 97, 81)";
        price.style.padding = "5px";
        price.style.borderRadius = "7px";
        price.style.display = "inline"; // Set price as inline element

        const kcal = document.createElement("span");
        kcal.classList.add("card-text");
        kcal.textContent = language == "2" ? product.kcal + "سعره حراريه" : product.kcal + "kcal";
        kcal.style.color = "rgb(119, 97, 81)";
        kcal.style.marginLeft ="17px";
        kcal.style.marginTop ="5px";
        kcal.style.fontWeight ="700";
        kcal.style.display = "inline"; // Set kcal as inline element

        price.insertBefore(kcal, price.firstChild); // Insert kcal before price content

        priceKcalContainer.appendChild(price);
        priceKcalContainer.appendChild(kcal);

        cardBody.appendChild(title);
        cardBody.appendChild(priceKcalContainer);
        cardBody.appendChild(details);

        contentColumn.appendChild(cardBody);

        const imageColumn = document.createElement("div");
        imageColumn.classList.add("col-md-4");

        const image = document.createElement("img");
        image.src = product.image;
        image.classList.add("img-fluid", "rounded-start");
        image.style.width = "100px";
        image.style.marginLeft = "50px";
        image.style.marginTop = "30px";
        image.style.borderRadius="6px"
        image.alt = "Product Image";

        imageColumn.appendChild(image);

        row.appendChild(contentColumn);
        row.appendChild(imageColumn);

        link.appendChild(row); // Append row to link
        card.appendChild(link); // Append link to card

        productContainer.appendChild(card);
    });
}

    // Call the function to render products with category names
    renderProductsWithCategories();

    // Get the category element
    var categories = document.getElementById('categories');

    // Get the initial position of the category element
    var initialPosition = categories.offsetTop ;

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        var categories = document.querySelector('.container');
        var initialPosition = categories.offsetTop;
    
        // Get the current scroll position
        var scrollPosition = window.scrollY || window.pageYOffset;
    
        // Check if the scroll position is greater than the initial position of the category element
        // and if the category element is not already fixed
        if (scrollPosition > initialPosition && !categories.classList.contains('fixed-categories')) {
          // Fix the position of the category element
          categories.classList.add('fixed-categories');
        } else if (scrollPosition <= initialPosition && categories.classList.contains('fixed-categories')) {
          // Restore the original position of the category element
          categories.classList.remove('fixed-categories');
        }
      });

   
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the language selector element
    const languageSelector = document.getElementById("language-select");

    // Add event listener for language change
    languageSelector.addEventListener("change", function(event) {
        // Get the selected language value
        const language = event.target.value;
        console.log(language);

        // Call the function to render products with categories for the selected language
        renderProductsWithCategories(language);
    });

    // Function to render products with categories for the selected language
    function renderProductsWithCategories(language) {
        // This is where you should render products based on the selected language
        // You can replace this with your actual rendering logic
        console.log("Rendering products for language:", language);
    }
});


document.addEventListener("click", function() {
    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
           

            // Remove border from all category links
            categoryLinks.forEach(link => {
                link.classList.remove('selected-category');
            });

            // Add border to the clicked category link
            this.classList.add('selected-category');
        });
    });
});



