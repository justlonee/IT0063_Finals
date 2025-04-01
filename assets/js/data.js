const ss = "<i class='fa-solid fa-star' style='color: #FFD43B;'></i>"; // solid star
const hs = "<i class='fa-regular fa-star' style='color: #FFD43B;'></i>"; // hollow star

const laptops = {
  1: {
    name: "Acer Predator Helios Neo 16",
    brand: "Acer",
    description:
      "The Acer Predator Helios Neo 16 is a powerful mid-range gaming laptop that maximizes GPU performance for serious gamers. With its 16-inch WUXGA display and 165Hz refresh rate, it delivers stunning visuals and smooth gameplay. The RGB keyboard and aggressive Predator design language make it stand out, while the advanced cooling system keeps temperatures in check during intense gaming marathons.",
    price: "₱55,990.00",
    specs: {
      processor: "Intel Core i7-13700HX",
      display: "16-inch, 1920 x 1200 pixels",
      gpu: "NVIDIA GeForce RTX 4060",
      memory: "16GB DDR5",
      storage: "1TB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Acer Predator Helios Neo 16 1.png",
      2: "./assets/images/laptops/Acer Predator Helios Neo 16 2.png",
      3: "./assets/images/laptops/Acer Predator Helios Neo 16 3.png",
      4: "./assets/images/laptops/Acer Predator Helios Neo 16 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${ss} 412 reviews`,
  },
  2: {
    name: "Acer Nitro 5",
    brand: "Acer",
    description:
      "The Acer Nitro 5 is a budget-friendly gaming laptop that offers solid performance for casual gamers. With its 15.6-inch Full HD display and powerful GPU, it provides an immersive gaming experience. The laptop's dual-fan cooling system ensures stable performance during extended gaming sessions.",
    price: "₱54,999.00",
    specs: {
      processor: "Intel Core i5-12500H (12 cores, 2.5 GHz)",
      display: "15.6-inch Full HD (1920 x 1080), 144Hz, IPS",
      gpu: "NVIDIA GeForce RTX 3050 with 4GB GDDR6",
      memory: "8GB DDR4 SDRAM",
      storage: "512GB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Acer Nitro 5 1.png",
      2: "./assets/images/laptops/Acer Nitro 5 2.png",
      3: "./assets/images/laptops/Acer Nitro 5 3.png",
      4: "./assets/images/laptops/Acer Nitro 5 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 215 reviews`,
  },
  3: {
    name: "Acer TravelMate",
    brand: "Acer",
    description:
      "The Acer TravelMate P2 is a reliable business laptop designed for professionals on the go. It features a 14-inch display and robust security features, making it ideal for productivity tasks. Its durable design and long battery life ensure it keeps up with your busy schedule.",
    price: "₱39,999.00",
    specs: {
      processor: "Intel Core i5-1135G7 (4 cores, 2.4 GHz)",
      display: "14-inch HD (1366 x 768), ComfyView",
      gpu: "Intel Iris Xe Graphics",
      memory: "8GB DDR4 SDRAM",
      storage: "256GB PCIe NVMe SSD",
      OS: "Windows 10 Pro",
    },
    images: {
      1: "./assets/images/laptops/Acer TravelMate 1.png",
      2: "./assets/images/laptops/Acer TravelMate 2.png",
      3: "./assets/images/laptops/Acer TravelMate 3.png",
      4: "./assets/images/laptops/Acer TravelMate 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 178 reviews`,
  },
  4: {
    name: "Acer Swift Edge 16",
    brand: "Acer",
    description:
      "The Acer Swift Edge 16 is an ultra-thin and lightweight laptop that doesn't compromise on performance. Boasting a stunning 16-inch OLED display with 4K resolution, it offers vibrant visuals for both work and entertainment. Its sleek magnesium-aluminum alloy chassis makes it both durable and portable.",
    price: "₱89,999.00",
    specs: {
      processor: "AMD Ryzen 7 6800U (8 cores, 2.7 GHz)",
      display: "16-inch 4K OLED (3840 x 2400), 100% DCI-P3",
      gpu: "AMD Radeon 680M Graphics",
      memory: "16GB LPDDR5",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Acer Swift Edge 16 1.png",
      2: "./assets/images/laptops/Acer Swift Edge 16 2.png",
      3: "./assets/images/laptops/Acer Swift Edge 16 3.png",
      4: "./assets/images/laptops/Acer Swift Edge 16 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 192 reviews`,
  },
  5: {
    name: "Acer Nitro V 15",
    brand: "Acer",
    description:
      "The Acer Nitro V 15 is an excellent budget-friendly gaming laptop that delivers solid performance for casual gamers and content creators alike. Featuring a sleek design with red-backlit keyboard, it offers smooth gameplay for popular titles at medium to high settings. The cooling system ensures optimal thermal performance during extended gaming sessions.",
    price: "₱47,500.00",
    specs: {
      processor: "Intel Core i5-13420H",
      display: "15.6-inch, 1920 x 1080 pixels",
      gpu: "NVIDIA GeForce RTX 3050",
      memory: "8GB DDR5",
      storage: "512GB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Acer Nitro V 15 1.png",
      2: "./assets/images/laptops/Acer Nitro V 15 2.png",
      3: "./assets/images/laptops/Acer Nitro V 15 3.png",
      4: "./assets/images/laptops/Acer Nitro V 15 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 287 reviews`,
  },
  6: {
    name: "Asus Zenbook Duo 14 OLED",
    brand: "Asus",
    description:
      "The Asus Zenbook Duo 14 OLED revolutionizes multitasking with its innovative dual-screen design, featuring a primary 14-inch OLED touchscreen and a secondary ScreenPad Plus. This setup enhances productivity by allowing seamless multitasking and creative workflows. Powered by the latest Intel Core processors and Intel Iris Xe graphics, it delivers robust performance for both work and entertainment. Its sleek, ergonomic design ensures comfort during extended use, making it a versatile companion for professionals and creatives alike.",
    price: "₱99,999.00",
    specs: {
      processor: "Intel Core Ultra 9 285H (16 cores, 3.3 GHz)",
      display: "14-inch 3K OLED (2880 x 1800), 120Hz, Touchscreen",
      gpu: "Intel Arc 140T Graphics",
      memory: "32GB LPDDR5X",
      storage: "1TB PCIe Gen 4 SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Asus Zenbook Duo 14 OLED 1.png",
      2: "./assets/images/laptops/Asus Zenbook Duo 14 OLED 2.png",
      3: "./assets/images/laptops/Asus Zenbook Duo 14 OLED 3.png",
      4: "./assets/images/laptops/Asus Zenbook Duo 14 OLED 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 312 reviews`,
  },
  7: {
    name: "Asus Zenbook S 14",
    brand: "Asus",
    description:
      "The Asus Zenbook S 14 is a premium ultraportable laptop that combines elegant design with powerful performance. Equipped with an Intel Core Ultra 7 processor and Intel Arc Graphics, it handles demanding tasks with ease. The 14-inch 3K OLED touchscreen offers vibrant visuals and intuitive interaction. Weighing just 1.2 kg and measuring 14.9mm thin, it's designed for effortless portability without compromising on functionality. Its robust build quality and advanced features make it an ideal choice for professionals on the move.​",
    price: "₱89,999.00",
    specs: {
      processor: "Intel Core Ultra 7 258V (8 cores, 2.2 GHz)",
      display: "14-inch 3K OLED (2880 x 1800), 120Hz, Touchscreen",
      gpu: "Intel Arc Graphics",
      memory: "32GB LPDDR5X",
      storage: "1TB PCIe 4.0 SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Asus Zenbook S 14 1.png",
      2: "./assets/images/laptops/Asus Zenbook S 14 2.png",
      3: "./assets/images/laptops/Asus Zenbook S 14 3.png",
      4: "./assets/images/laptops/Asus Zenbook S 14 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 278 reviews`,
  },
  8: {
    name: "ProArt Studiobook Pro 16 OLED",
    brand: "Asus",
    description:
      "The ProArt Studiobook Pro 16 OLED is a mobile workstation designed for creative professionals who demand color accuracy and powerful performance. The stunning 16-inch 4K OLED display covers 100% of DCI-P3 color space with Calman verification, perfect for photographers, video editors, and designers. Powered by an Intel Core i9 processor and NVIDIA RTX graphics, it handles intensive creative workloads with ease, while the ASUS Dial provides precise creative control.",
    price: "₱139,900.00",
    specs: {
      processor: "Intel Core i9-13980HX",
      display: "16-inch, 3200 x 2000 pixels, OLED, 120Hz",
      gpu: "NVIDIA RTX 3000 Ada Generation",
      memory: "32GB DDR5",
      storage: "2TB SSD",
      OS: "Windows 11 Pro",
    },
    images: {
      1: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 1.png",
      2: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 2.png",
      3: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 3.png",
      4: "./assets/images/laptops/ProArt Studiobook Pro 16 OLED 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${ss} 89 reviews`,
  },
  9: {
    name: "Asus ROG Zephyrus G14",
    brand: "Asus",
    description:
      "The Asus ROG Zephyrus G14 is a premium compact gaming laptop that combines portability with exceptional performance. Its 14-inch QHD display with 120Hz refresh rate offers crisp visuals in a highly portable form factor. The unique AniMe Matrix LED display on the lid adds customization options, while the powerful AMD Ryzen processor and RTX 3060 GPU handle demanding games and creative workloads with ease.",
    price: "₱83,900.00",
    specs: {
      processor: "AMD Ryzen 9 5900HS",
      display: "14-inch, 2560 x 1600 pixels",
      gpu: "NVIDIA GeForce RTX 3060",
      memory: "16GB DDR4",
      storage: "1TB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Asus ROG Zephyrus G14 1.png",
      2: "./assets/images/laptops/Asus ROG Zephyrus G14 2.png",
      3: "./assets/images/laptops/Asus ROG Zephyrus G14 3.png",
      4: "./assets/images/laptops/Asus ROG Zephyrus G14 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${ss} 198 reviews`,
  },
  10: {
    name: "Asus TUF A15",
    brand: "Asus",
    description:
      "The Asus TUF A15 is a rugged and reliable gaming laptop built to withstand intense gaming sessions. Featuring a military-grade durable construction, it offers excellent value with its AMD Ryzen 7 processor and RTX 4050 graphics. The 144Hz refresh rate display ensures smooth gameplay, while the self-cleaning cooling system with anti-dust technology maintains long-term performance reliability.",
    price: "₱65,999.00",
    specs: {
      processor: "AMD Ryzen 7 7735HS",
      display: "15.6-inch, 1920 x 1080 pixels, 144Hz",
      gpu: "NVIDIA GeForce RTX 4050",
      memory: "16GB DDR5",
      storage: "512GB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Asus TUF A15 1.png",
      2: "./assets/images/laptops/Asus TUF A15 2.png",
      3: "./assets/images/laptops/Asus TUF A15 3.png",
      4: "./assets/images/laptops/Asus TUF A15 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 356 reviews`,
  },
  11: {
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    description:
      "The Lenovo IdeaPad Slim 3 is a reliable and efficient laptop tailored for everyday use. Powered by an AMD Ryzen 7 7730U processor and integrated AMD Radeon Graphics, it ensures smooth performance for multitasking and entertainment. The 15.6-inch Full HD display provides clear and vibrant visuals. With 16GB of DDR4 memory and a 512GB SSD, it offers ample storage and quick responsiveness. Its sleek design and lightweight build make it a practical choice for students and professionals seeking a balance between performance and portability.​",
    price: "₱34,999.00",
    specs: {
      processor: "AMD Ryzen 5 7520U (4 cores, 2.8 GHz)",
      display: "15.6-inch Full HD (1920 x 1080), IPS",
      gpu: "AMD Radeon 610M Graphics",
      memory: "8GB DDR4",
      storage: "256GB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Lenovo IdeaPad Slim 3 1.png",
      2: "./assets/images/laptops/Lenovo IdeaPad Slim 3 2.png",
      3: "./assets/images/laptops/Lenovo IdeaPad Slim 3 3.png",
      4: "./assets/images/laptops/Lenovo IdeaPad Slim 3 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 215 reviews`,
  },
  12: {
    name: "Lenovo Yoga Pro 7",
    brand: "Lenovo",
    description:
      "The Lenovo Yoga Pro 7 is a versatile 2-in-1 laptop designed for users who demand flexibility and performance. Featuring a high-resolution touchscreen display that rotates 360 degrees, it seamlessly transitions between laptop and tablet modes. Equipped with powerful processors and ample memory, it handles intensive tasks and creative applications effortlessly. Its sleek and durable design, combined with advanced features, makes it an ideal companion for professionals and creatives seeking adaptability in their computing experience.",
    price: "₱79,999.00",
    specs: {
      processor: "Intel Core i7-13700H (14 cores, 3.7 GHz)",
      display: "14-inch 2.8K OLED (2880 x 1800), 90Hz, Touchscreen",
      gpu: "NVIDIA GeForce RTX 3050 with 4GB GDDR6",
      memory: "16GB LPDDR5",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Pro",
    },
    images: {
      1: "./assets/images/laptops/Lenovo Yoga Pro 7 1.png",
      2: "./assets/images/laptops/Lenovo Yoga Pro 7 2.png",
      3: "./assets/images/laptops/Lenovo Yoga Pro 7 3.png",
      4: "./assets/images/laptops/Lenovo Yoga Pro 7 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 189 reviews`,
  },
  13: {
    name: "Lenovo LOQ",
    brand: "Lenovo",
    description:
      "The Lenovo LOQ is a gaming laptop that offers a compelling blend of performance and affordability. Designed for gamers, it features a high-refresh-rate display for smooth visuals and responsive gameplay. Powered by the latest processors and dedicated graphics, it delivers reliable performance for modern gaming titles. Its robust cooling system ensures optimal performance during extended gaming sessions. With a sleek design and customizable features, the Lenovo LOQ caters to gamers seeking a balance between quality and value.",
    price: "₱72,999.00",
    specs: {
      processor: "AMD Ryzen 7 8845HS (8 cores, 3.8 GHz)",
      display: "15.6-inch Full HD (1920 x 1080), 144Hz, IPS",
      gpu: "NVIDIA GeForce RTX 4050 with 8GB GDDR6",
      memory: "16GB DDR5",
      storage: "512GB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Lenovo LOQ 1.png",
      2: "./assets/images/laptops/Lenovo LOQ 2.png",
      3: "./assets/images/laptops/Lenovo LOQ 3.png",
      4: "./assets/images/laptops/Lenovo LOQ 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 243 reviews`,
  },
  14: {
    name: "Lenovo IdeaPad Gaming 3",
    brand: "Lenovo",
    description:
      "The Lenovo IdeaPad Gaming 3 is a budget-friendly gaming laptop that doesn't compromise on performance. Equipped with powerful processors and dedicated NVIDIA GeForce graphics, it delivers smooth gameplay for popular titles. The 15.6-inch Full HD display with a high refresh rate provides an immersive visual experience. Its enhanced thermal system ensures consistent performance during intense gaming sessions. With a sleek design and durable build, the IdeaPad Gaming 3 is an excellent choice for gamers looking for affordability without sacrificing quality.",
    price: "₱58,999.00",
    specs: {
      processor: "Intel Core i5-12500H (12 cores, 2.5 GHz)",
      display: "15.6-inch Full HD (1920 x 1080), 120Hz, IPS",
      gpu: "NVIDIA GeForce GTX 1650 with 4GB GDDR6",
      memory: "8GB DDR4",
      storage: "512GB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Lenovo IdeaPad Gaming 3 1.png",
      2: "./assets/images/laptops/Lenovo IdeaPad Gaming 3 2.png",
      3: "./assets/images/laptops/Lenovo IdeaPad Gaming 3 3.png",
      4: "./assets/images/laptops/Lenovo IdeaPad Gaming 3 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 198 reviews`,
  },
  15: {
    name: "Lenovo Legion 7i",
    brand: "Lenovo",
    description:
      "The Lenovo Legion 7i is a premium gaming powerhouse featuring top-tier components in a sleek aluminum chassis. With its stunning 16-inch QHD+ display at 165Hz refresh rate and NVIDIA RTX 4080 graphics, it delivers unparalleled gaming performance. The advanced Legion Coldfront 5.0 cooling system ensures optimal thermal management, while the per-key RGB keyboard and vapor chamber cooling make it a dream machine for serious gamers.",
    price: "₱117,500.00",
    specs: {
      processor: "Intel Core i9-13900HX",
      display: "16-inch, 2560 x 1600 pixels, 165Hz",
      gpu: "NVIDIA GeForce RTX 4080",
      memory: "32GB DDR5",
      storage: "1TB SSD",
      OS: "Windows 11 Pro",
    },
    images: {
      1: "./assets/images/laptops/Lenovo Legion 7i 1.png",
      2: "./assets/images/laptops/Lenovo Legion 7i 2.png",
      3: "./assets/images/laptops/Lenovo Legion 7i 3.png",
      4: "./assets/images/laptops/Lenovo Legion 7i 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${ss} 187 reviews`,
  },
  16: {
    name: "Alienware M16 R2",
    brand: "Alienware",
    description:
      "The Alienware M16 R2 is a powerhouse gaming laptop designed to deliver exceptional performance for both gaming enthusiasts and professionals. Featuring a sleek design and robust build, it houses the latest Intel Core Ultra 9 185H processor and NVIDIA GeForce RTX 4070 graphics, ensuring seamless gameplay and multitasking capabilities. The 16-inch QHD+ display with a 240Hz refresh rate offers stunning visuals and smooth motion, enhancing your gaming experience. Advanced cooling technology maintains optimal performance during intense sessions, while customizable RGB lighting adds a personalized touch.",
    price: "₱159,990.00",
    specs: {
      processor: "Intel Core Ultra 9 185H (16 cores, 2.3 GHz to 5.1 GHz)",
      display:
        "16-inch QHD+ (2560 x 1600), 240Hz, 3ms, 100% sRGB, NVIDIA G-SYNC",
      gpu: "NVIDIA GeForce RTX 4070 with 8GB GDDR6",
      memory: "32GB DDR5 5600 MT/s",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Alienware M16 R2 1.png",
      2: "./assets/images/laptops/Alienware M16 R2 2.png",
      3: "./assets/images/laptops/Alienware M16 R2 3.png",
      4: "./assets/images/laptops/Alienware M16 R2 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 312 reviews`,
  },
  17: {
    name: "Alienware X16 R2",
    brand: "Alienware",
    description:
      "The Alienware X16 R2 stands as a testament to cutting-edge gaming technology, blending a sleek, futuristic design with unparalleled performance. Powered by the Intel Core Ultra 7 155H processor and NVIDIA GeForce RTX 4070 graphics, it delivers exceptional speed and visual fidelity. The 16-inch QHD+ display boasts a 240Hz refresh rate and 3ms response time, ensuring fluid and immersive gameplay. Enhanced with AlienFX lighting featuring 100 micro-LEDs, it offers extensive customization to match your gaming setup. Advanced cooling solutions keep the system running optimally, even during marathon gaming sessions.",
    price: "₱179,990.00",
    specs: {
      processor: "Intel Core Ultra 7 155H (16 cores, 1.4 GHz to 4.8 GHz)",
      display:
        "16-inch QHD+ (2560 x 1600), 240Hz, 3ms, 100% DCI-P3, NVIDIA G-SYNC",
      gpu: "NVIDIA GeForce RTX 4070 with 8GB GDDR6",
      memory: "16GB LPDDR5X 7467 MT/s",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Alienware X16 R2 1.png",
      2: "./assets/images/laptops/Alienware X16 R2 2.png",
      3: "./assets/images/laptops/Alienware X16 R2 3.png",
      4: "./assets/images/laptops/Alienware X16 R2 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 278 reviews`,
  },
  18: {
    name: "Alienware M18 R2",
    brand: "Alienware",
    description:
      "The Alienware M18 R2 redefines gaming excellence with its expansive 18-inch display and formidable hardware. Equipped with the latest Intel Core Ultra 9 processor and NVIDIA GeForce RTX 4080 graphics, it offers unparalleled performance for the most demanding games and applications. The high-resolution screen with a fast refresh rate ensures crisp visuals and smooth gameplay. Its robust cooling system maintains peak performance, while the customizable RGB keyboard enhances the immersive experience. Designed for gamers who seek the ultimate in power and display real estate, the M18 R2 stands as a true desktop replacement.",
    price: "₱209,990.00",
    specs: {
      processor: "Intel Core Ultra 9 185H (16 cores, 2.3 GHz to 5.1 GHz)",
      display:
        "18-inch QHD+ (2560 x 1600), 240Hz, 3ms, 100% sRGB, NVIDIA G-SYNC",
      gpu: "NVIDIA GeForce RTX 4080 with 12GB GDDR6",
      memory: "32GB DDR5 5600 MT/s",
      storage: "2TB PCIe NVMe SSD",
      OS: "Windows 11 Pro",
    },
    images: {
      1: "./assets/images/laptops/Alienware M18 R2 1.png",
      2: "./assets/images/laptops/Alienware M18 R2 2.png",
      3: "./assets/images/laptops/Alienware M18 R2 3.png",
      4: "./assets/images/laptops/Alienware M18 R2 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 198 reviews`,
  },
  19: {
    name: "Alienware X15 R1",
    brand: "Alienware",
    description:
      "The Alienware X15 R1 combines ultra-slim design with high-performance components, making it a top choice for gamers on the move. Featuring an Intel Core i7-11800H processor and NVIDIA GeForce RTX 3070 graphics, it delivers exceptional gaming performance in a sleek chassis. The 15.6-inch FHD display with a 360Hz refresh rate ensures ultra-smooth visuals, while advanced cooling technologies keep the system running efficiently. Its premium build quality and customizable lighting make it both a powerful and stylish companion for gaming enthusiasts.",
    price: "₱149,990.00",
    specs: {
      processor: "Intel Core i7-11800H (8 cores, 2.3 GHz to 4.6 GHz)",
      display: "15.6-inch FHD (1920 x 1080), 360Hz, 1ms, 100% sRGB",
      gpu: "NVIDIA GeForce RTX 3070 with 8GB GDDR6",
      memory: "16GB DDR4 3200 MT/s",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Alienware X15 R1 1.png",
      2: "./assets/images/laptops/Alienware X15 R1 2.png",
      3: "./assets/images/laptops/Alienware X15 R1 3.png",
      4: "./assets/images/laptops/Alienware X15 R1 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 256`,
  },
  20: {
    name: "Alienware M15 R5",
    brand: "Alienware",
    description:
      "The Alienware M15 R5 is a high-performance gaming laptop that combines powerful hardware with a sleek design. Equipped with an AMD Ryzen 9 5900HX processor and NVIDIA GeForce RTX 3070 graphics, it delivers exceptional gaming performance and multitasking capabilities. The 15.6-inch QHD display with a 240Hz refresh rate ensures smooth and immersive visuals, while the advanced cooling system maintains optimal temperatures during intense gaming sessions. Customizable RGB lighting and a premium build quality make the M15 R5 a standout choice for gamers seeking both style and substance.",
    price: "₱109,999.00",
    specs: {
      processor: "AMD Ryzen 9 5900HX (8 cores, 3.3 GHz to 4.6 GHz)",
      display: "15.6-inch QHD (2560 x 1440), 240Hz, 3ms, 100% DCI-P3",
      gpu: "NVIDIA GeForce RTX 3070 with 8GB GDDR6",
      memory: "16GB DDR4 3200MHz",
      storage: "1TB PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/Alienware M15 R5 1.png",
      2: "./assets/images/laptops/Alienware M15 R5 2.png",
      3: "./assets/images/laptops/Alienware M15 R5 3.png",
      4: "./assets/images/laptops/Alienware M15 R5 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 1850 reviews`,
  },
  21: {
    name: "HP Victus 16",
    brand: "HP",
    description:
      "The HP Victus 16 is a gaming laptop that balances performance and affordability. Powered by an AMD Ryzen 7 8845HS processor and NVIDIA GeForce RTX 4070 graphics, it delivers smooth gameplay for modern titles. The 16.1-inch Full HD display ensures crisp visuals, while the understated design appeals to gamers seeking a low-profile aesthetic.",
    price: "₱49,990.00",
    specs: {
      processor: "AMD Ryzen 7 8845HS",
      display: "16.1-inch Full HD (1920 x 1080)",
      gpu: "NVIDIA GeForce RTX 4070",
      memory: "16GB DDR5",
      storage: "512GB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/HP Victus 16 1.png",
      2: "./assets/images/laptops/HP Victus 16 2.png",
      3: "./assets/images/laptops/HP Victus 16 3.png",
      4: "./assets/images/laptops/HP Victus 16 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 312 reviews`,
  },
  22: {
    name: "HP OmniBook X 14",
    brand: "HP",
    description:
      "The HP OmniBook X 14 is a next-generation AI-powered laptop designed for efficiency and portability. Featuring a Qualcomm Snapdragon X Elite processor and a 14-inch touchscreen display, it offers responsive performance and vibrant visuals. Weighing approximately 1.35 kg, it's ideal for professionals on the move.",
    price: "₱64,990.00",
    specs: {
      processor: "Qualcomm Snapdragon X Elite X1E-78-100",
      display: "14-inch touchscreen Low Blue Light Display",
      gpu: "Qualcomm Adreno",
      memory: "16GB LPDDR5x-8448 MHz",
      storage: "1TB PCIe Gen4 NVMe M.2 SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/HP OmniBook X 14 1.png",
      2: "./assets/images/laptops/HP OmniBook X 14 2.png",
      3: "./assets/images/laptops/HP OmniBook X 14 3.png",
      4: "./assets/images/laptops/HP OmniBook X 14 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 278 reviews`,
  },
  23: {
    name: "HP Envy x360",
    brand: "HP",
    description:
      "The HP Envy x360 is a versatile 2-in-1 laptop that combines performance with flexibility. Equipped with an Intel Core Ultra 5-125U processor and a 14-inch WUXGA IPS touchscreen, it supports seamless transitions between laptop and tablet modes. Its sleek design and robust features make it suitable for both work and entertainment.",
    price: "₱60,990.00",
    specs: {
      processor: "Intel Core Ultra 5-125U",
      display: "14-inch WUXGA IPS Touchscreen",
      gpu: "Intel Graphics",
      memory: "16GB LPDDR5",
      storage: "512GB M.2 PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/HP Envy x360 1.png",
      2: "./assets/images/laptops/HP Envy x360 2.png",
      3: "./assets/images/laptops/HP Envy x360 3.png",
      4: "./assets/images/laptops/HP Envy x360 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 243 reviews`,
  },
  24: {
    name: "HP Pavilion Aero 13",
    brand: "HP",
    description:
      "The HP Pavilion Aero 13 is an ultra-lightweight laptop designed for users seeking portability without compromising performance. Powered by an AMD Ryzen 7 8840U processor and featuring a 13.3-inch WQXGA IPS display, it offers crisp visuals and responsive performance. Weighing less than 1 kg, it's perfect for on-the-go use.",
    price: "₱67,990.00",
    specs: {
      processor: "AMD Ryzen 7 8840U",
      display: "13.3-inch WQXGA IPS",
      gpu: "AMD Radeon Graphics",
      memory: "16GB 6400MHz DDR5",
      storage: "1TB M.2 PCIe NVMe SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/HP Pavilion Aero 13 1.png",
      2: "./assets/images/laptops/HP Pavilion Aero 13 2.png",
      3: "./assets/images/laptops/HP Pavilion Aero 13 3.png",
      4: "./assets/images/laptops/HP Pavilion Aero 13 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 198 reviews`,
  },
  25: {
    name: "HP Omen 16",
    brand: "HP",
    description:
      "The HP Omen 16 strikes a perfect balance between gaming performance and professional aesthetics, making it ideal for both gamers and creative professionals. The 16.1-inch Full HD display with 144Hz refresh rate delivers smooth visuals, while the powerful Intel Core i7 processor and RTX 3060 GPU handle demanding tasks effortlessly. The minimalist design with customizable RGB lighting offers a sophisticated gaming experience.",
    price: "₱72,750.00",
    specs: {
      processor: "Intel Core i7-12700H",
      display: "16.1-inch, 1920 x 1080 pixels, 144Hz",
      gpu: "NVIDIA GeForce RTX 3060",
      memory: "16GB DDR5",
      storage: "1TB SSD",
      OS: "Windows 11 Home",
    },
    images: {
      1: "./assets/images/laptops/HP Omen 16 1.png",
      2: "./assets/images/laptops/HP Omen 16 2.png",
      3: "./assets/images/laptops/HP Omen 16 3.png",
      4: "./assets/images/laptops/HP Omen 16 4.png",
    },
    reviews: `${ss}${ss}${ss}${ss}${hs} 421 reviews`,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").pop(); // Get the current HTML file name

  if (path === "index.html") {
    atIndexHTML();
  } else if (
    path === "acer-page.html" ||
    path === "asus-page.html" ||
    path === "lenovo-page.html" ||
    path === "alienware-page.html" ||
    path === "hp-page.html"
  ) {
    atBrandPageHTML();
  }
});

// redirect to product-info.html with correct data
function atIndexHTML() {
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
      window.location.href = "pages/product-info.html";
    });
  });

  productCards.forEach((card) => {
    const laptopId = card.getAttribute("data-laptop-id");
    const laptop = laptops[laptopId];

    if (laptop) {
      card.querySelector(".card-img-top").src = laptop.images[1];
      card.querySelector(".card-img-top").alt = laptop.name;

      card.querySelector(".card-title").textContent = laptop.name;
      card.querySelector(".card-text").textContent = laptop.description;
      card.querySelector("h5.card-title:last-of-type").textContent =
        laptop.price;
    } else {
      console.error(`Laptop with ID ${laptopId} not found`);
    }
  });
}

function atBrandPageHTML() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log("card clicked");
      event.preventDefault();

      const productId = this.getAttribute("data-laptop-id");
      const models = laptops[productId];

      // store data in localStorage
      localStorage.setItem("selectedLaptop", JSON.stringify(models));

      console.log(productId);

      // redirect to product-info.html
      window.location.href = "product-info.html";
    });
  });

  productCards.forEach((card) => {
    const laptopId = card.getAttribute("data-laptop-id");
    const laptop = laptops[laptopId];

    if (laptop) {
      card.querySelector(".card-img-top").src = "." + laptop.images[1];
      card.querySelector(".card-img-top").alt = laptop.name;

      card.querySelector(".card-title").textContent = laptop.name;
      card.querySelector(".card-text").textContent = laptop.description;
      card.querySelector("h5.card-title:last-of-type").textContent =
        laptop.price;
    } else {
      console.error(`Laptop with ID ${laptopId} not found`);
    }
  });
}
