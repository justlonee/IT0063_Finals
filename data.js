const laptops = {
    1: {
        name: "Acer Nitro V 15",
        brand: "Acer",
        description: "The Acer Nitro V 15 is an excellent budget-friendly gaming laptop that delivers solid performance for casual gamers and content creators alike. Featuring a sleek design with red-backlit keyboard, it offers smooth gameplay for popular titles at medium to high settings. The cooling system ensures optimal thermal performance during extended gaming sessions.",
        price: "₱47,500",
        specs: {
            processor: "Intel Core i5-13420H",
            display: "15.6-inch, 1920 x 1080 pixels",
            gpu: "NVIDIA GeForce RTX 3050",
            memory: "8GB DDR5",
            storage: "512GB SSD",
            OS: "Windows 11 Home"
        },
        images: {
            1: "./assets/images/laptops/Acer Nitro V 15 1.png",
            2: "./assets/images/laptops/Acer Nitro V 15 2.png",
            3: "./assets/images/laptops/Acer Nitro V 15 3.png",
            4: "./assets/images/laptops/Acer Nitro V 15 4.png"
        },
        reviews: "★★★★☆ 287 reviews",
    },
    2: {
        name: "Acer Predator Helios Neo 16",
        brand: "Acer",
        description: "The Acer Predator Helios Neo 16 is a powerful mid-range gaming laptop that maximizes GPU performance for serious gamers. With its 16-inch WUXGA display and 165Hz refresh rate, it delivers stunning visuals and smooth gameplay. The RGB keyboard and aggressive Predator design language make it stand out, while the advanced cooling system keeps temperatures in check during intense gaming marathons.",
        price: "₱55,990",
        specs: {
            processor: "Intel Core i7-13700HX",
            display: "16-inch, 1920 x 1200 pixels",
            gpu: "NVIDIA GeForce RTX 4060",
            memory: "16GB DDR5",
            storage: "1TB SSD",
            OS: "Windows 11 Home"
        },
        images: {
            1: "./assets/images/laptops/Acer Predator Helios Neo 16 1.png",
            2: "./assets/images/laptops/Acer Predator Helios Neo 16 2.png",
            3: "./assets/images/laptops/Acer Predator Helios Neo 16 3.png",
            4: "./assets/images/laptops/Acer Predator Helios Neo 16 4.png"
        },
        reviews: "★★★★★ 412 reviews",
    },
    3: {
        name: "Asus ROG Zephyrus G14",
        brand: "Asus",
        description: "The Asus ROG Zephyrus G14 is a premium compact gaming laptop that combines portability with exceptional performance. Its 14-inch QHD display with 120Hz refresh rate offers crisp visuals in a highly portable form factor. The unique AniMe Matrix LED display on the lid adds customization options, while the powerful AMD Ryzen processor and RTX 3060 GPU handle demanding games and creative workloads with ease.",
        price: "₱83,900",
        specs: {
            processor: "AMD Ryzen 9 5900HS",
            display: "14-inch, 2560 x 1600 pixels",
            gpu: "NVIDIA GeForce RTX 3060",
            memory: "16GB DDR4",
            storage: "1TB SSD",
            OS: "Windows 11 Home"
        },
        images: {
            1: "./assets/images/laptops/Asus ROG Zephyrus G14 1.png",
            2: "./assets/images/laptops/Asus ROG Zephyrus G14 2.png",
            3: "./assets/images/laptops/Asus ROG Zephyrus G14 3.png",
            4: "./assets/images/laptops/Asus ROG Zephyrus G14 4.png"
        },
        reviews: "★★★★★ 198 reviews",
    },
    4: {
        name: "Asus TUF A15",
        brand: "Asus",
        description: "The Asus TUF A15 is a rugged and reliable gaming laptop built to withstand intense gaming sessions. Featuring a military-grade durable construction, it offers excellent value with its AMD Ryzen 7 processor and RTX 4050 graphics. The 144Hz refresh rate display ensures smooth gameplay, while the self-cleaning cooling system with anti-dust technology maintains long-term performance reliability.",
        price: "₱65,999",
        specs: {
            processor: "AMD Ryzen 7 7735HS",
            display: "15.6-inch, 1920 x 1080 pixels, 144Hz",
            gpu: "NVIDIA GeForce RTX 4050",
            memory: "16GB DDR5",
            storage: "512GB SSD",
            OS: "Windows 11 Home"
        },
        images: {
            1: "./assets/images/laptops/Asus TUF A15 1.png",
            2: "./assets/images/laptops/Asus TUF A15 2.png",
            3: "./assets/images/laptops/Asus TUF A15 3.png",
            4: "./assets/images/laptops/Asus TUF A15 4.png"
        },
        reviews: "★★★★☆ 356 reviews",
    },
    5: {
        name: "HP Omen 16",
        brand: "HP",
        description: "The HP Omen 16 strikes a perfect balance between gaming performance and professional aesthetics, making it ideal for both gamers and creative professionals. The 16.1-inch Full HD display with 144Hz refresh rate delivers smooth visuals, while the powerful Intel Core i7 processor and RTX 3060 GPU handle demanding tasks effortlessly. The minimalist design with customizable RGB lighting offers a sophisticated gaming experience.",
        price: "₱72,750",
        specs: {
            processor: "Intel Core i7-12700H",
            display: "16.1-inch, 1920 x 1080 pixels, 144Hz",
            gpu: "NVIDIA GeForce RTX 3060",
            memory: "16GB DDR5",
            storage: "1TB SSD",
            OS: "Windows 11 Home"
        },
        images: {
            1: "./assets/images/laptops/HP Omen 16 1.png",
            2: "./assets/images/laptops/HP Omen 16 2.png",
            3: "./assets/images/laptops/HP Omen 16 3.png",
            4: "./assets/images/laptops/HP Omen 16 4.png"
        },
        reviews: "★★★★☆ 421 reviews",
    },
    6: {
        name: "Lenovo Legion 7i",
        brand: "Lenovo",
        description: "The Lenovo Legion 7i is a premium gaming powerhouse featuring top-tier components in a sleek aluminum chassis. With its stunning 16-inch QHD+ display at 165Hz refresh rate and NVIDIA RTX 4080 graphics, it delivers unparalleled gaming performance. The advanced Legion Coldfront 5.0 cooling system ensures optimal thermal management, while the per-key RGB keyboard and vapor chamber cooling make it a dream machine for serious gamers.",
        price: "₱117,500",
        specs: {
            processor: "Intel Core i9-13900HX",
            display: "16-inch, 2560 x 1600 pixels, 165Hz",
            gpu: "NVIDIA GeForce RTX 4080",
            memory: "32GB DDR5",
            storage: "1TB SSD",
            OS: "Windows 11 Pro"
        },
        images: {
            1: "./assets/images/laptops/Lenovo Legion 7i 1.png",
            2: "./assets/images/laptops/Lenovo Legion 7i 2.png",
            3: "./assets/images/laptops/Lenovo Legion 7i 3.png",
            4: "./assets/images/laptops/Lenovo Legion 7i 4.png"
        },
        reviews: "★★★★★ 187 reviews",
    },
    7: {
        name: "Microsoft Surface Pro",
        brand: "Microsoft",
        description: "The Microsoft Surface Pro is a versatile 2-in-1 device that combines tablet portability with laptop performance. The brilliant 13-inch PixelSense touchscreen with 2880x1920 resolution offers exceptional clarity, while the detachable keyboard and slim pen support make it perfect for productivity and creativity. With all-day battery life and premium build quality, it's ideal for professionals who need flexibility without compromising performance.",
        price: "₱67,100",
        specs: {
            processor: "Intel Core i7-1265U",
            display: "13-inch, 2880 x 1920 pixels, Touchscreen",
            gpu: "Intel Iris Xe Graphics",
            memory: "16GB LPDDR4x",
            storage: "512GB SSD",
            OS: "Windows 11 Pro"
        },
        images: {
            1: "./assets/images/laptops/Microsoft Surface Pro 1.png",
            2: "./assets/images/laptops/Microsoft Surface Pro 2.png",
            3: "./assets/images/laptops/Microsoft Surface Pro 3.png",
            4: "./assets/images/laptops/Microsoft Surface Pro 4.png"
        },
        reviews: "★★★★★ 523 reviews",
    },
    8: {
        name: "ProArt Studiobook Pro 16 OLED",
        brand: "Asus",
        description: "The ProArt Studiobook Pro 16 OLED is a mobile workstation designed for creative professionals who demand color accuracy and powerful performance. The stunning 16-inch 4K OLED display covers 100% of DCI-P3 color space with Calman verification, perfect for photographers, video editors, and designers. Powered by an Intel Core i9 processor and NVIDIA RTX graphics, it handles intensive creative workloads with ease, while the ASUS Dial provides precise creative control.",
        price: "₱139,900",
        specs: {
            processor: "Intel Core i9-13980HX",
            display: "16-inch, 3200 x 2000 pixels, OLED, 120Hz",
            gpu: "NVIDIA RTX 3000 Ada Generation",
            memory: "32GB DDR5",
            storage: "2TB SSD",
            OS: "Windows 11 Pro"
        },
        images: {
            1: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 1.png",
            2: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 2.png",
            3: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 3.png",
            4: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 4.png"
        },
        reviews: "★★★★★ 89 reviews",
    }
};


// redirect to product-info.html with correct data
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
    card.addEventListener("click", function () {
        console.log("card clicked");

        const productId = this.getAttribute("data-laptop-id");
        const models = laptops[productId];

        // store data in localStorage
        localStorage.setItem("selectedLaptop", JSON.stringify(models));

        console.log(productId);

        // redirect to product-info.html
        window.location.href = 'product-info.html';

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const laptopId = card.getAttribute("data-laptop-id");
        const laptop = laptops[laptopId];

        if (laptop) {
            card.querySelector(".card-img-top").src = laptop.images[1];
            card.querySelector(".card-img-top").alt = laptop.name;

            card.querySelector(".card-title").textContent = laptop.name;
            card.querySelector(".card-text").textContent = laptop.description;
            card.querySelector("h5.card-title:last-of-type").textContent = laptop.price;
        } else {
            console.error(`Laptop with ID ${laptopId} not found`);
        }
    });
});