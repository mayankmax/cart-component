const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "A high-performance smartphone with advanced features.",
      price: 799.99,
      category: "Electronics",
      stock: 50
    },
    {
      id: 2,
      name: "Denim Jeans",
      description: "Classic denim jeans for casual wear.",
      price: 49.99,
      category: "Clothing",
      stock: 100
    },
    {
      id: 3,
      name: "Coffee Maker",
      description: "A programmable coffee maker for brewing delicious coffee at home.",
      price: 59.99,
      category: "Home & Kitchen",
      stock: 30
    },
    {
      id: 4,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones for immersive audio experience.",
      price: 129.99,
      category: "Electronics",
      stock: 70
    },
    {
      id: 5,
      name: "Leather Wallet",
      description: "Stylish leather wallet with multiple card slots and compartments.",
      price: 39.99,
      category: "Accessories",
      stock: 90
    },
    {
      id: 6,
      name: "Yoga Mat",
      description: "Premium quality yoga mat for practicing yoga and exercises.",
      price: 29.99,
      category: "Sports & Fitness",
      stock: 120
    },
    {
      id: 7,
      name: "Graphic T-Shirt",
      description: "Comfortable graphic t-shirt with unique designs.",
      price: 24.99,
      category: "Clothing",
      stock: 80
    },
    {
      id: 8,
      name: "Digital Camera",
      description: "Compact digital camera for capturing high-resolution photos and videos.",
      price: 349.99,
      category: "Electronics",
      stock: 40
    },
    {
      id: 9,
      name: "Stainless Steel Water Bottle",
      description: "Durable stainless steel water bottle for outdoor activities.",
      price: 19.99,
      category: "Accessories",
      stock: 60
    },
    {
      id: 10,
      name: "Running Shoes",
      description: "Lightweight running shoes for enhanced performance and comfort.",
      price: 89.99,
      category: "Sports & Fitness",
      stock: 110
    },
    {
      id: 11,
      name: "Office Chair",
      description: "Ergonomic office chair with adjustable features for maximum comfort.",
      price: 149.99,
      category: "Furniture",
      stock: 20
    },
    {
      id: 12,
      name: "Portable Bluetooth Speaker",
      description: "Compact Bluetooth speaker for wireless music streaming.",
      price: 59.99,
      category: "Electronics",
      stock: 65
    },
    {
      id: 13,
      name: "Sunscreen SPF 50",
      description: "High SPF sunscreen lotion for effective sun protection.",
      price: 12.99,
      category: "Health & Beauty",
      stock: 75
    },
    {
      id: 14,
      name: "Canvas Backpack",
      description: "Durable canvas backpack with multiple compartments.",
      price: 34.99,
      category: "Accessories",
      stock: 55
    },
    {
      id: 15,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse for precise cursor control.",
      price: 19.99,
      category: "Electronics",
      stock: 85
    },
    {
      id: 16,
      name: "Cotton Bed Sheets",
      description: "Soft and breathable cotton bed sheets for a comfortable sleep.",
      price: 39.99,
      category: "Home & Kitchen",
      stock: 95
    },
    {
      id: 17,
      name: "Sunglasses",
      description: "Stylish sunglasses with UV protection for eye safety.",
      price: 29.99,
      category: "Accessories",
      stock: 70
    },
    {
      id: 18,
      name: "Wireless Charging Pad",
      description: "Fast wireless charging pad for smartphones and other devices.",
      price: 24.99,
      category: "Electronics",
      stock: 45
    },
    {
      id: 19,
      name: "Cookware Set",
      description: "Complete cookware set for versatile cooking options.",
      price: 79.99,
      category: "Home & Kitchen",
      stock: 25
    },
    {
      id: 20,
      name: "Fitness Tracker Watch",
      description: "Advanced fitness tracker watch with heart rate monitoring.",
      price: 99.99,
      category: "Sports & Fitness",
      stock: 35
    },
    {
      id: 21,
      name: "Travel Backpack",
      description: "Spacious travel backpack with padded straps for comfort.",
      price: 49.99,
      category: "Accessories",
      stock: 40
    },
    {
      id: 22,
      name: "Electric Toothbrush",
      description: "Rechargeable electric toothbrush for effective dental care.",
      price: 39.99,
      category: "Health & Beauty",
      stock: 60
    },
    {
      id: 23,
      name: "Gaming Mouse",
      description: "High-performance gaming mouse with customizable buttons.",
      price: 49.99,
      category: "Electronics",
      stock: 30
    },
    {
      id: 24,
      name: "Ceramic Mug Set",
      description: "Set of ceramic mugs for enjoying hot beverages.",
      price: 19.99,
      category: "Home & Kitchen",
      stock: 50
    },
    {
      id: 25,
      name: "Running Shorts",
      description: "Breathable running shorts with moisture-wicking fabric.",
      price: 29.99,
      category: "Sports & Fitness",
      stock: 65
    },
    {
      id: 26,
      name: "Leather Belt",
      description: "Genuine leather belt with classic buckle design.",
      price: 24.99,
      category: "Accessories",
      stock: 90
    },
    {
      id: 27,
      name: "External Hard Drive",
      description: "High-capacity external hard drive for storing data.",
      price: 79.99,
      category: "Electronics",
      stock: 55
    },
    {
      id: 28,
      name: "Glass Food Storage Containers",
      description: "Set of glass food storage containers for keeping food fresh.",
      price: 34.99,
      category: "Home & Kitchen",
      stock: 40
    },
    {
      id: 29,
      name: "Yoga Block Set",
      description: "Set of yoga blocks for improving yoga poses and flexibility.",
      price: 14.99,
      category: "Sports & Fitness",
      stock: 75
    },
    {
      id: 30,
      name: "Wireless Keyboard",
      description: "Slim and ergonomic wireless keyboard for comfortable typing.",
      price: 39.99,
      category: "Electronics",
      stock: 60
    },
    {
      id: 31,
      name: "Digital Bathroom Scale",
      description: "Accurate digital bathroom scale for tracking weight loss progress.",
      price: 29.99,
      category: "Health & Beauty",
      stock: 85
    },
    {
      id: 32,
      name: "Travel Pillow",
      description: "Soft and supportive travel pillow for comfortable journeys.",
      price: 19.99,
      category: "Accessories",
      stock: 70
    },
    {
      id: 33,
      name: "Portable Power Bank",
      description: "Compact portable power bank for charging devices on the go.",
      price: 29.99,
      category: "Electronics",
      stock: 50
    },
    {
      id: 34,
      name: "Stainless Steel Cookware Set",
      description: "Durable stainless steel cookware set for everyday cooking.",
      price: 99.99,
      category: "Home & Kitchen",
      stock: 30
    },
    {
      id: 35,
      name: "Resistance Bands Set",
      description: "Set of resistance bands for strength training and physical therapy.",
      price: 19.99,
      category: "Sports & Fitness",
      stock: 45
    },
    {
      id: 36,
      name: "Facial Cleansing Brush",
      description: "Gentle facial cleansing brush for deep cleansing and exfoliation.",
      price: 29.99,
      category: "Health & Beauty",
      stock: 65
    },
    {
      id: 37,
      name: "Stylish Watch",
      description: "Fashionable watch with a sleek design and quartz movement.",
      price: 49.99,
      category: "Accessories",
      stock: 55
    },
    {
      id: 38,
      name: "Bluetooth Earbuds",
      description: "Wireless Bluetooth earbuds for music and hands-free calls.",
      price: 39.99,
      category: "Electronics",
      stock: 80
    },
    {
      id: 39,
      name: "Cooking Utensil Set",
      description: "Complete set of cooking utensils for preparing meals with ease.",
      price: 29.99,
      category: "Home & Kitchen",
      stock: 60
    },
    {
      id: 40,
      name: "Jump Rope",
      description: "Adjustable jump rope for cardio workouts and agility training.",
      price: 14.99,
      category: "Sports & Fitness",
      stock: 70
    },
    {
      id: 41,
      name: "Handheld Vacuum Cleaner",
      description: "Compact handheld vacuum cleaner for quick and easy cleaning.",
      price: 49.99,
      category: "Home & Kitchen",
      stock: 35
    },
    {
      id: 42,
      name: "Travel Backpack",
      description: "Durable travel backpack with multiple compartments and padded straps.",
      price: 59.99,
      category: "Accessories",
      stock: 25
    },
    {
      id: 43,
      name: "Hair Dryer",
      description: "Professional hair dryer with multiple heat and speed settings.",
      price: 39.99,
      category: "Health & Beauty",
      stock: 45
    },
    {
      id: 44,
      name: "Portable Blender",
      description: "Compact portable blender for making smoothies and shakes on the go.",
      price: 34.99,
      category: "Home & Kitchen",
      stock: 40
    },
    {
      id: 45,
      name: "Gym Bag",
      description: "Spacious gym bag with multiple compartments for storing gym essentials.",
      price: 29.99,
      category: "Sports & Fitness",
      stock: 50
    },
    {
      id: 46,
      name: "LED Desk Lamp",
      description: "Energy-efficient LED desk lamp with adjustable brightness levels.",
      price: 24.99,
      category: "Home & Kitchen",
      stock: 30
    },
    {
      id: 47,
      name: "Stylish Scarf",
      description: "Fashionable scarf for adding a stylish touch to any outfit.",
      price: 19.99,
      category: "Accessories",
      stock: 65
    },
    {
      id: 48,
      name: "Wireless Security Camera",
      description: "Smart wireless security camera for home surveillance.",
      price: 79.99,
      category: "Electronics",
      stock: 20
    },
    {
      id: 49,
      name: "Electric Kettle",
      description: "Fast-boiling electric kettle for preparing hot beverages quickly.",
      price: 29.99,
      category: "Home & Kitchen",
      stock: 40
    },
    {
      id: 50,
      name: "Resistance Loop Bands",
      description: "Set of resistance loop bands for strength training and physical therapy.",
      price: 9.99,
      category: "Sports & Fitness",
      stock: 60
    }
  ];

  export default products;