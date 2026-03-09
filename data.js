// Mock data for FusionBite

const RESTAURANTS_DATA = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "Italian, Pizza",
        rating: 4.5,
        deliveryTime: "30-35 min",
        distance: "2.5 km",
        image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "italian",
        popular: true
    },
    {
        id: 2,
        name: "Wok & Roll",
        cuisine: "Chinese, Asian",
        rating: 4.3,
        deliveryTime: "25-30 min",
        distance: "1.8 km",
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "chinese",
        popular: true
    },
    {
        id: 3,
        name: "Spice Route",
        cuisine: "Indian, North Indian",
        rating: 4.6,
        deliveryTime: "35-40 min",
        distance: "3.2 km",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "indian",
        popular: false
    },
    {
        id: 4,
        name: "Taco Fiesta",
        cuisine: "Mexican, Tex-Mex",
        rating: 4.4,
        deliveryTime: "20-25 min",
        distance: "1.5 km",
        image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "mexican",
        popular: true
    },
    {
        id: 5,
        name: "Sweet Treats",
        cuisine: "Desserts, Bakery",
        rating: 4.7,
        deliveryTime: "15-20 min",
        distance: "1.2 km",
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "dessert",
        popular: false
    },
    {
        id: 6,
        name: "Burger Barn",
        cuisine: "American, Fast Food",
        rating: 4.2,
        deliveryTime: "25-30 min",
        distance: "2.0 km",
        image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "american",
        popular: true
    }
];

const MENU_ITEMS = {
    1: [ // Pizza Palace
        { id: 101, name: "Margherita Pizza", price: 299, image: "https://images.pexels.com/photos/35068608/pexels-photo-35068608.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.5 },
        { id: 102, name: "Pepperoni Pizza", price: 399, image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.6 },
        { id: 103, name: "Veggie Supreme", price: 349, image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.4 },
        { id: 104, name: "BBQ Chicken Pizza", price: 449, image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.7 }
    ],
    2: [ // Wok & Roll
        { id: 201, name: "Veg Fried Rice", price: 199, image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.3 },
        { id: 202, name: "Chicken Noodles", price: 249, image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.5 },
        { id: 203, name: "Spring Rolls", price: 149, image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.2 },
        { id: 204, name: "Manchurian Gravy", price: 179, image: "https://atanurrannagharrecipe.com/wp-content/uploads/2023/01/Veg-Manchurian-for-website-1024x576.jpg", category: "veg", rating: 4.4 }
    ],
    3: [ // Spice Route
        { id: 301, name: "Butter Chicken", price: 329, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.8 },
        { id: 302, name: "Paneer Tikka Masala", price: 279, image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.6 },
        { id: 303, name: "Dal Makhani", price: 229, image:"https://www.pankajbhadouria.com/wp-content/uploads/Dal-Makhani.jpg", category: "veg", rating: 4.5 },
        { id: 304, name: "Biryani", price: 349, image: "https://thespicemess.com/wp-content/uploads/2020/10/Chicken-Biryani-13.jpg", category: "non-veg", rating: 4.7 }
    ],
    4: [ // Taco Fiesta
        { id: 401, name: "Chicken Tacos", price: 199, image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.4 },
        { id: 402, name: "Veggie Burrito", price: 179, image: "https://www.thespruceeats.com/thmb/v6Zy0PaUd-wEf4fBfhriYwguhxc=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-bean-and-rice-burrito-recipe-3378550-Final-5b9bbf0f4cedfd00506b8ead.jpg", category: "veg", rating: 4.3 },
        { id: 403, name: "Nachos Supreme", price: 249, image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.5 },
        { id: 404, name: "Quesadilla", price: 219, image: "https://www.recipetineats.com/tachyon/2018/06/Quesadillas_4.jpg", category: "veg", rating: 4.2 }
    ],
    5: [ // Sweet Treats
        { id: 501, name: "Chocolate Cake", price: 149, image: "https://stephaniessweets.com/wp-content/uploads/2020/05/IMG_0243.jpg", category: "veg", rating: 4.8 },
        { id: 502, name: "Red Velvet Cupcake", price: 99, image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Red_velvet_cupcake.jpg", category: "veg", rating: 4.6 },
        { id: 503, name: "Ice Cream Sundae", price: 129, image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.7 },
        { id: 504, name: "Brownie Fudge", price: 119, image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.5 }
    ],
    6: [ // Burger Barn
        { id: 601, name: "Classic Burger", price: 179, image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.3 },
        { id: 602, name: "Veggie Burger", price: 149, image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.2 },
        { id: 603, name: "Cheese Burger", price: 199, image: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=400", category: "non-veg", rating: 4.4 },
        { id: 604, name: "French Fries", price: 99, image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400", category: "veg", rating: 4.1 }
    ]
};

const COUPONS = [
    { code: "FIRST50", discount: 50, minOrder: 200, description: "Flat ₹50 off on first order" },
    { code: "SAVE100", discount: 100, minOrder: 500, description: "₹100 off on orders above ₹500" },
    { code: "FUSION20", discount: 20, minOrder: 0, description: "20% off up to ₹100" }
];

// Export to global scope
window.RESTAURANTS_DATA = RESTAURANTS_DATA;
window.MENU_ITEMS = MENU_ITEMS;
window.COUPONS = COUPONS;