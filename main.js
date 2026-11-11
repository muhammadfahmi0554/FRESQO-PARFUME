
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Menutup menu setelah memilih navigasi
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuToggle.innerHTML = "☰";
    });
});


/* HARGA VARIAN PARFUM FRESQO */

const perfumePrices = {
    "Blue Ocean": {
        "30 ml": 75000,
        "50 ml": 110000,
        "100 ml": 150000
    },

    "Aura": {
        "30 ml": 85000,
        "50 ml": 125000,
        "100 ml": 170000
    },

    "Fresh Breeze": {
        "30 ml": 75000,
        "50 ml": 110000,
        "100 ml": 150000
    },

    "Obsidian": {
        "30 ml": 100000,
        "50 ml": 150000,
        "100 ml": 200000
    },

    "Royale": {
        "30 ml": 150000,
        "50 ml": 225000,
        "100 ml": 300000
    },

    "Lumine": {
        "30 ml": 100000,
        "50 ml": 150000,
        "100 ml": 200000
    }
};

/* NAVIGASI CHECKOUT */

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", function() {

        const card = button.closest(".product-card");
        const variant = card.querySelector(".product-variant");

        const product = button.dataset.name;
        const size = variant ? variant.value : "30 ml";

        const price = perfumePrices[product]?.[size];

        if (price === undefined) {
            alert("Harga produk atau varian tidak ditemukan!");
            return;
        }

        const checkoutURL = new URL(
            "checkout.html",
            window.location.href
        );

        checkoutURL.searchParams.set("name", product);
        checkoutURL.searchParams.set("variant", size);
        checkoutURL.searchParams.set("price", price);

        window.location.href = checkoutURL.href;

    });

});

