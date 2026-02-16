import { getAssetPath } from "../utils/assets";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: string; // Display price
    priceValue: number; // For sorting
    image: string;
    tags: string[]; // For filtering
}

export const products: Product[] = [
    {
        id: "1",
        name: "The Royal Velvet Lehenga",
        category: "Bridal Couture",
        price: "₹ 2,45,000",
        priceValue: 245000,
        image: getAssetPath("/images/lehenga.png"),
        tags: ["Bridal", "Velvet", "Black"],
    },
    {
        id: "2",
        name: "Opulent Kanjivaram Silk",
        category: "Handloom Heritage",
        price: "₹ 1,85,000",
        priceValue: 185000,
        image: getAssetPath("/images/saree.png"),
        tags: ["Saree", "Silk", "Gold"],
    },
    {
        id: "3",
        name: "Noir Avant-Garde Gown",
        category: "Evening Wear",
        price: "₹ 3,20,000",
        priceValue: 320000,
        image: getAssetPath("/images/gown.png"),
        tags: ["Gown", "Black", "Modern"],
    },
    // Duplicates to fill grid for demo
    {
        id: "4",
        name: "Midnight Zardozi Lehenga",
        category: "Bridal Couture",
        price: "₹ 2,10,000",
        priceValue: 210000,
        image: getAssetPath("/images/lehenga.png"),
        tags: ["Bridal", "Velvet", "Black"],
    },
    {
        id: "5",
        name: "Temple Border Silk",
        category: "Handloom Heritage",
        price: "₹ 1,45,000",
        priceValue: 145000,
        image: getAssetPath("/images/saree.png"),
        tags: ["Saree", "Silk", "Gold"],
    },
    {
        id: "6",
        name: "Sculpted Drape Gown",
        category: "Evening Wear",
        price: "₹ 2,80,000",
        priceValue: 280000,
        image: getAssetPath("/images/gown.png"),
        tags: ["Gown", "Black", "Modern"],
    },
];
