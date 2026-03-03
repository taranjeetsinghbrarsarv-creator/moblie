// 1. MASTER DATA LIST
const allItems = [
    { name: "Samsung Galaxy S23", price: "₹74,999", img: "https://m.media-amazon.com/images/I/81ZSn2rk9WL._SX679_.jpg", type: "mobile" },
    { name: "iPhone 15", price: "₹79,999", img: "https://m.media-amazon.com/images/I/61f4dTush1L._SX679_.jpg", type: "mobile" },
    { name: "iPhone 14", price: "₹69,999", img: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg", type: "mobile" },
    { name: "OnePlus 11R", price: "₹39,999", img: "https://m.media-amazon.com/images/I/71yTvU9VgdL._SX679_.jpg", type: "mobile" },
    { name: "Wireless Earbuds", price: "₹2,999", img: "wireless.jfif", type: "accessory" },
    { name: "Bluetooth Speaker", price: "₹3,499", img: "spiker.jfif", type: "accessory" },
    { name: "Power Bank 20000mAh", price: "₹2,199", img: "power bank.jfif", type: "accessory" }
    // Yaha aap apne baki 30 items add kar sakte hain
];

// 2. SEARCH LOGIC (HOME PAGE)
function searchProduct(query) {
    let searchTerm = query.toLowerCase().trim();
    let resultsGrid = document.getElementById('searchResultsGrid');
    let resultsSection = document.getElementById('searchResultsSection');
    let heroSection = document.querySelector('.hero');
    let featuredSection = document.querySelector('.featured');

    if (searchTerm.length > 0) {
        // Search Filter
        let matched = allItems.filter(item => item.name.toLowerCase().includes(searchTerm));

        // Hide Hero and Featured
        if(heroSection) heroSection.style.display = "none";
        if(featuredSection) featuredSection.style.display = "none";
        resultsSection.style.display = "block";

        resultsGrid.innerHTML = ""; // Clear screen

        if (matched.length > 0) {
            matched.forEach(item => {
                resultsGrid.innerHTML += `
                    <div class="featured-card" style="border:1px solid #ddd; padding:15px; border-radius:10px; text-align:center; width:220px; background:white;">
                        <img src="${item.img}" style="width:100%; height:150px; object-fit:contain;">
                        <h3 style="font-size:16px; margin:10px 0;">${item.name}</h3>
                        <p style="color:#f43f5e; font-weight:bold;">${item.price}</p>
                        <button onclick="window.location.href='${item.type === 'mobile' ? 'mobile.html' : 'offers.html'}'" 
                                style="background:#38bdf8; color:white; border:none; padding:8px 15px; border-radius:20px; cursor:pointer;">
                            View Product
                        </button>
                    </div>`;
            });
        } else {
            resultsGrid.innerHTML = `<h3 style="width:100%; text-align:center;">No results found for "${query}"</h3>`;
        }
    } else {
        // If Search empty, show everything back
        if(heroSection) heroSection.style.display = "block";
        if(featuredSection) featuredSection.style.display = "block";
        resultsSection.style.display = "none";
    }
}

// 3. CART LOGIC
let cartCount = 0;
function addToCart(btn){
    cartCount++;
    let display = document.getElementById('cartCount');
    if(display) display.innerText = cartCount;
    
    btn.innerText = "Added ✔";
    btn.disabled = true;
    btn.style.background = "#10b981";
}

// 4. FILTER LOGIC (For Mobile Page)
function filterProduct(category){
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if(category === 'all') card.style.display = 'block';
        else card.style.display = card.classList.contains(category) ? 'block' : 'none';
    });
}