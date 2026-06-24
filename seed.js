const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./src/models/User");
const Product = require("./src/models/Product");

dotenv.config();

const products = [
  { name: "Wireless Headphones", price: 2499, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", rating: 4.5, numReviews: 128, stock: 15, description: "Premium wireless headphones with noise cancellation and 30hr battery life." },
  { name: "Running Shoes", price: 3999, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", rating: 4.7, numReviews: 256, stock: 30, description: "Lightweight running shoes with responsive cushioning for all terrains." },
  { name: "Smart Watch", price: 8999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", rating: 4.3, numReviews: 89, stock: 8, description: "Feature-packed smartwatch with health tracking and GPS." },
  { name: "Leather Backpack", price: 1799, category: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", rating: 4.6, numReviews: 312, stock: 22, description: "Genuine leather backpack with laptop compartment and USB port." },
  { name: "Sunglasses", price: 1299, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80", rating: 4.2, numReviews: 67, stock: 40, description: "UV400 polarized sunglasses with premium frame." },
  { name: "Coffee Maker", price: 4599, category: "Kitchen", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", rating: 4.8, numReviews: 445, stock: 12, description: "Programmable coffee maker with built-in grinder and thermal carafe." },
  { name: "Yoga Mat", price: 899, category: "Sports", image: "https://images.unsplash.com/photo-1601925228008-1d24d00e8e5b?w=400&q=80", rating: 4.4, numReviews: 198, stock: 50, description: "Non-slip eco-friendly yoga mat with carrying strap." },
  { name: "Mechanical Keyboard", price: 5999, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80", rating: 4.9, numReviews: 534, stock: 7, description: "TKL mechanical keyboard with RGB lighting and Cherry MX switches." },
  { name: "Denim Jacket", price: 2199, category: "Clothing", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80", rating: 4.3, numReviews: 143, stock: 18, description: "Classic denim jacket with distressed finish and slim fit." },
  { name: "Bluetooth Speaker", price: 3299, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", rating: 4.6, numReviews: 287, stock: 25, description: "Waterproof portable speaker with 360° sound and 24hr battery." },
  { name: "Face Serum", price: 1499, category: "Beauty", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", rating: 4.5, numReviews: 321, stock: 60, description: "Vitamin C brightening serum with hyaluronic acid." },
  { name: "Gaming Mouse", price: 2799, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", rating: 4.7, numReviews: 412, stock: 20, description: "Ergonomic gaming mouse with 16000 DPI and 7 programmable buttons." },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  await User.deleteMany();
  await Product.deleteMany();

  await User.create([
    { name: "Admin User", email: "admin@demo.com", password: "admin123", role: "admin" },
    { name: "Revan Kumar", email: "user@demo.com", password: "user123", role: "user" },
  ]);
  console.log("✅ Users seeded");

  await Product.insertMany(products);
  console.log("✅ Products seeded");

  console.log("🎉 Database ready!");
  process.exit();
}

seed().catch(err => { console.error(err); process.exit(1); });
