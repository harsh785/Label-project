import { getAssetPath } from "../utils/assets";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    priceValue: number;
    image: string;
    tags: string[];
    description: string;
    material: string;
    care: string;
    gallery: string[];
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
        description: "Hand-embroidered zardozi on plush jet-black velvet. This bridal lehenga features a 24-kali flare and antique gold wire work, perfect for the modern maharani. Paired with a signature blouse and tulle dupatta.",
        material: "Pure Micro Velvet",
        care: "Dry Clean Only",
        gallery: [getAssetPath("/images/lehenga.png"), getAssetPath("/images/lehenga.png"), getAssetPath("/images/lehenga.png")]
    },
    {
        id: "2",
        name: "Opulent Kanjivaram Silk",
        category: "Handloom Heritage",
        price: "₹ 1,85,000",
        priceValue: 185000,
        image: getAssetPath("/images/saree.png"),
        tags: ["Saree", "Silk", "Gold"],
        description: "Woven by master artisans in Kanchipuram, this pure silk saree features real zari threads in a double-warp weave. The rich gold sheen is complemented by a traditional korvai border.",
        material: "Pure Kanjivaram Silk",
        care: "Dry Clean Only. Store in muslin cloth.",
        gallery: [getAssetPath("/images/saree.png"), getAssetPath("/images/saree.png")]
    },
    {
        id: "3",
        name: "Noir Avant-Garde Gown",
        category: "Evening Wear",
        price: "₹ 3,20,000",
        priceValue: 320000,
        image: getAssetPath("/images/gown.png"),
        tags: ["Gown", "Black", "Modern"],
        description: "A structural masterpiece inspired by architectural forms. This gown features 3D sequin embellishments and a dramatic sculptural shoulder line. Crafted for the red carpet.",
        material: "Imported Scuba & Tulle",
        care: "Specialist Dry Clean Only",
        gallery: [getAssetPath("/images/gown.png"), getAssetPath("/images/gown.png")]
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
        description: "A variation of our classic velvet lehenga with silver and gold mixed thread work.",
        material: "Pure Velvet",
        care: "Dry Clean Only",
        gallery: [getAssetPath("/images/lehenga.png")]
    },
    {
        id: "5",
        name: "Temple Border Silk",
        category: "Handloom Heritage",
        price: "₹ 1,45,000",
        priceValue: 145000,
        image: getAssetPath("/images/saree.png"),
        tags: ["Saree", "Silk", "Gold"],
        description: "Classic motifs meet contemporary draping. This saree features temple borders and a lighter weave for easier draping.",
        material: "Silk Blend",
        care: "Dry Clean Only",
        gallery: [getAssetPath("/images/saree.png")]
    },
    {
        id: "6",
        name: "Sculpted Drape Gown",
        category: "Evening Wear",
        price: "₹ 2,80,000",
        priceValue: 280000,
        image: getAssetPath("/images/gown.png"),
        tags: ["Gown", "Black", "Modern"],
        description: "Fluid drapes that hug the silhouette. Detailed with hand-sewn crystals.",
        material: "Satin Georgette",
        care: "Dry Clean Only",
        gallery: [getAssetPath("/images/gown.png")]
    },
];
