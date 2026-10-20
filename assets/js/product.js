function addSlugsToProducts(products) {
  return products.map((product, index) => {
  
    const slugBase = product.productName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");


    const uniqueSlug = `${slugBase}-${index + 1}`;


    return { ...product, slug: uniqueSlug };
  });
}
// let allproducts;
let allproducts = JSON.parse(localStorage.getItem("products")) || [];

let products = [
  {
    productName: "Men Cotton T-Shirt",
    description: "A soft, breathable cotton T-shirt designed for everyday comfort. Perfect for casual outings, office wear, or layering under jackets.",
    images: [
      "https://thehouseofrare.com/cdn/shop/files/mano-mens-t-shirt-white27624_12378c0a-13fe-4ae7-898c-97937bbc2aae.jpg?v=1719483708",
      "https://tiimg.tistatic.com/fp/1/007/716/fit-comfortable-dark-blue-white-men-cotton-t-shirt-for-party-casual-wear-097.jpg",
      "https://images.meesho.com/images/products/393885627/z8pqx_512.webp?width=512",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuEHWe9UIh1qCjs1OTQ8tAhImay9_TCXLUg&s"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#f01717ff" },
      { name: "Grey", hex: "#808080" }
    ],
    fabric: "100% Cotton",
    sizes: ["S", "M", "L", "XL"],
    category: "Men",
    subCategory: "T-Shirt",
    price: 799,
    discount: 20,
    finalPrice: 799 - (799 * 20) / 100
  },
  {
    productName: "Women Floral Dress",
    description: "A stylish knee-length dress with floral prints. Lightweight fabric suitable for parties, outings, and summer wear.",
    images: [
      "https://www.vastranand.in/cdn/shop/files/3_7c1972c8-de21-4ca3-9367-2c143e926b9a.jpg?v=1743074435",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomlWS9slaltbcy6Mu8BPDOupwd5ltSV52yg&s",
      "https://www.vastranand.in/cdn/shop/files/3_464cbaa6-a798-43e6-b6bf-d382ac2c198d.jpg?v=1743074944&width=1080",
      "https://www.vastranand.in/cdn/shop/files/2_a96a21a0-2ee3-4925-be34-0d2f274b44d6.jpg?v=1743078107&width=1000"
    ],
    colors: [
      { name: "Dark Red", hex: "#690404ff" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Polyester",
    sizes: ["S", "M", "L"],
    category: "Women",
    subCategory: "Dress",
    price: 1499,
    discount: 25,
    finalPrice: 1499 - (1499 * 25) / 100
  },
  {
    productName: "Kids Printed T-Shirt",
    description: "Colorful cotton T-shirt with fun cartoon print. Soft fabric ensures comfort for all-day wear.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGB9vLat27Y7r_echgJi0Z706Q54DSlGBXnA&s",
      "https://giftingaura.co.in/wp-content/uploads/2024/04/203564ba-274f-453b-a611-f634788049d8.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_oHqPB6RKqX_ZOIsMIwjuCvMTl4lHVUYvA&s"
    ],
    colors: [
      { name: "Yellow", hex: "#FFD700" },
      { name: "white", hex: "#23e433ff" }
    ],
    fabric: "Cotton",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    category: "Kids",
    subCategory: "T-Shirt",
    price: 599,
    discount: 10,
    finalPrice: 599 - (599 * 10) / 100
  },
  {
    productName: "Men Casual Shirt",
    description: "Slim fit casual shirt with button-down collar. Made from lightweight cotton blend for daily comfort.",
    images: [
      "https://www.urbanofashion.com/cdn/shop/files/shirtsolreg-01-white.jpg?v=1738593655",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaMqO1oNMVi4x7lm7GIzCWtwNKI6RnG53Uw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjhBLL9Y1UgA269qhC03L8maPSms9Gck1uQ&s",
      "https://assets.ajio.com/medias/sys_master/root/20241129/LNuH/6749c66f0f47f80c87bad5bd/-1117Wx1400H-700672072-green-MODEL5.jpgsx"
    ],
    colors: [
      { name: "Blue", hex: "#0000FF" },
      { name: "White", hex: "#FFFFFF" }
    ],
    fabric: "Cotton Blend",
    sizes: ["M", "L", "XL"],
    category: "Men",
    subCategory: "Shirt",
    price: 1299,
    discount: 15,
    finalPrice: 1299 - (1299 * 15) / 100
  },
  {
    productName: "Women Denim Jacket",
    description: "Trendy denim jacket with button closure. Pairs well with dresses, jeans, or skirts for a chic look.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4Ne9wxUEBNLfqrSzQJFx2QpNxoHp1GFayw&s",
      "https://m.media-amazon.com/images/I/81HRDsfEKUL._UY1100_.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240827/FR7R/66cdace01d763220fa9dbe8b/-1117Wx1400H-700329530-black-MODEL.jpg"
    ],
    colors: [
      { name: "Blue", hex: "#1E90FF" },
      { name: "Black", hex: "#000000" },
      { name: "green", hex: " #c01db8" }
    ],
    fabric: "Denim",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Jacket",
    price: 2199,
    discount: 30,
    finalPrice: 2199 - (2199 * 30) / 100
  },
  {
    productName: "men Winter Hoodie",
    description: "Cozy fleece hoodie for kids with front pockets and a soft hood for warmth in winters.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfsscuQBl0ryULP4zkXXGpIvQa3WvowAcSA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXOzrhwOCHTjAv1_ERTKFcb3nBvcVg8A3_g&s",
      "https://images-static.nykaa.com/media/catalog/product/7/3/73a48a4NK_BEWAK00085819_1.jpg?tr=cm-pad_resize,w-300,h-400"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Blue", hex: "#1E90FF" }
    ],
    fabric: "Fleece",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    category: "Kids",
    subCategory: "Hoodie",
    price: 999,
    discount: 20,
    finalPrice: 999 - (999 * 20) / 100
  },
  {
    productName: "Men Leather Jacket",
    description: "A premium faux-leather jacket crafted for style and durability. Designed with a modern slim fit, multiple pockets, and a smooth zip closure. Perfect for winters, bikers, and casual outings.",
    images: [
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/15/y7pXz9d1_6fcb9d865468416b99e2ce0b66aeef5a.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/15/y7pXz9d1_6fcb9d865468416b99e2ce0b66aeef5a.jpg",
      "https://img4.dhresource.com/webp/m/f3/albu/jc/j/20/02f76b09-23ce-4110-a9ba-6fe9c666ae0e.jpg ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhlbpVRHiwx53MTrpXVjCgO7IUgsDDYz_Nw&s"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#654321" }
    ],
    fabric: "Faux Leather",
    sizes: ["M", "L", "XL"],
    category: "Men",
    subCategory: "Jacket",
    price: 4499,
    discount: 30,
    finalPrice: 4499 - (4499 * 30) / 100
  },
  {
    productName: "Women Silk Saree",
    description: "Elegant silk saree with zari work. Lightweight, soft texture and suitable for weddings, parties, and festive occasions. Includes matching blouse piece.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtrzorZ9xOW3i9UbSsfCXrqmScaS7njh5_w&s",
      "https://www.jiomart.com/images/product/original/rvnw6adbt7/saran-women-gardeny-green-self-design-pure-silk-art-silk-saree-product-images-rvnw6adbt7-0-202209271220.jpg?im=Resize=(500,630)",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunBBCSWrfmpPYtlRHQspfosULO67cP5xlFQ&s",
      "https://jhakhas.com/cdn/shop/files/rn-image_picker_lib_temp_a9d7ff16-3bee-4103-9ef6-1e3b5af37380.jpg?v=1704864971&width=2048 "
    ],
    colors: [
      { name: "black", hex: "#000000" },
      { name: "brown", hex: "#654321" }
    ],
    fabric: "Silk",
    sizes: ["Free Size"],
    category: "Women",
    subCategory: "Saree",
    price: 6999,
    discount: 35,
    finalPrice: 6999 - (6999 * 35) / 100
  },
  {
    productName: "Men Running Shoes",
    description: "Lightweight and durable running shoes with breathable mesh upper and cushioned sole. Provides great grip and comfort for gym and outdoor running.",
    images: [
      "https://www.jiomart.com/images/product/original/rv41jth0yh/boltago-victori-7-sports-shoes-for-men-latest-stylish-casual-sport-shoes-for-men-running-shoes-for-boys-waterproof-shoes-for-running-walking-gym-trekking-sneakers-lightweight-comfortable-hiking-running-shoes-product-images-rv41jth0yh-0-202210192219.jpg?im=Resize=(1000,1000)",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKtb_QHJZUV1JSmTPxNa5g00-OqvdEiqWAA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmxSQb1uM56yA2PL2Tt1x1a64QM-xQyiVXA&s"

    ],
    colors: [
      { name: "Black/White", hex: "#000000" },
      { name: "Navy", hex: "#000080" }
    ],
    fabric: "Mesh & Rubber",
    sizes: ["7", "8", "9", "10", "11"],
    category: "Men",
    subCategory: "Shoes",
    price: 2999,
    discount: 20,
    finalPrice: 2999 - (2999 * 20) / 100
  },
  {
    productName: "Women Handbag",
    description: "Trendy faux-leather handbag with spacious compartments, zip closure, and adjustable strap. Suitable for office, travel, and daily use.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfb_gP2LRVdl8ld7m2EWh4mAtY1DVAgJNQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoOSXcvv_o7WRX4Wk1WorxrXoeeA3kiI5jA&s"
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Faux Leather",
    sizes: ["Standard"],
    category: "Women",
    subCategory: "Bag",
    price: 2599,
    discount: 15,
    finalPrice: 2599 - (2599 * 15) / 100
  },
  {
    productName: "Women Sneakers",
    description: "Comfortable and durable sneakers for kids. Made with breathable mesh and rubber sole for extra grip. Ideal for school and daily wear.",
    images: [
      "https://images.meesho.com/images/products/546540548/prnhc_512.webp?width=512",
      "https://assets.ajio.com/medias/sys_master/root/20230612/dbqT/648722dd42f9e729d737e986/-473Wx593H-466263684-grey-MODEL.jpg",
      "https://image.made-in-china.com/202f0j00mGKqIUcFrAgp/High-Quality-Casual-Women-Shoes-Lady-Sneaker-Shoe-Comfort-Lace-up-Ladies-Sneakers-Female-Footwear.webp"
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light pink", hex: "#f4bee6ff" }
    ],
    fabric: "Mesh & Rubber",
    sizes: ["1Y", "2Y", "3Y", "4Y"],
    category: "Kids",
    subCategory: "Shoes",
    price: 1499,
    discount: 10,
    finalPrice: 1499 - (1499 * 10) / 100
  },
  {
    productName: "Classic Cotton T-Shirt",
    description: "Comfortable cotton T-shirt for everyday wear.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZraM3JemmBnkYBFCM6mLmxkfsOSMSE_poFQ&s",
      "https://www.fitin-me.com/product/fitin-me-mens-classic-v-neck-t-shirt-supima-cotton-pastel-grey/",
      "https://ambarsara.in/product/cotton-t-shirt/",
      "https://theclassictshirt.com/cdn/shop/files/women_more_space.png?v=1759510663&width=1000"
    ],
    colors: ["Black", "White", "Blue"],
    fabric: "100% Cotton",
    sizes: ["S", "M", "L", "XL"],
    category: "Men",
    subCategory: "T-Shirt",
    price: 799,
    discount: 20,
    finalPrice: 799 - (799 * 20) / 100
  },
  {
    productName: "Women Floral Summer Dress",
    description: "Lightweight floral printed summer dress.",
    images: ["https://i.etsystatic.com/24656733/r/il/034a4b/3989186343/il_570xN.3989186343_2v2i.jpg",
      "https://www.vastranand.in/collections/summer-dresses?srsltid=AfmBOoofBgkU_SJGYt3fPfgi7PibWufYK9gPtoMmVi_7xiVq6iSmv4TM",
      "https://www.vastranand.in/products/ploy-georgette-floral-printed-dress?srsltid=AfmBOooyBz3JxNca5yPooM7oaYn5dirTfsDPi99kO_coL6eil3Km7A2A"],
    colors: ["Red", "Black", "Pink"],
    fabric: "Rayon",
    sizes: ["XS", "S", "M", "L"],
    category: "Women",
    subCategory: "Dress",
    price: 2499,
    discount: 30,
    finalPrice: 2499 - (2499 * 30) / 100
  },
  {
    productName: "Casual Check Shirt",
    description: "Trendy checkered shirt for casual outings.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVULyGEWvVrgn0hRpB0fJTCS88yOZwf9g6Q&s",
      "https://www.tradeindia.com/products/men-comfortable-and-breathable-full-sleeves-pure-cotton-casual-check-shirt-7716651.html",
      "https://www.amazon.in/Cloth-Bites-Casual-Checked-Office/dp/B0C5J9YVWY"],
    colors: ["White", "Red", "Black"],
    fabric: "Cotton Blend",
    sizes: ["M", "L", "XL"],
    category: "Men",
    subCategory: "Shirt",
    price: 1499,
    discount: 15,
    finalPrice: 1499 - (1499 * 15) / 100
  },
  {
    productName: "Kids Cartoon T-Shirt",
    description: "Soft cotton T-shirt with fun cartoon print.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6V2XCBnaxh9E5csgZvAgZqrFLeB-DEF5MQ&s",
      "https://www.jandjp.in/products/j-jp-kids-cartoon-printed-t-shirt-shorts-set-pink?srsltid=AfmBOorPJQ1WRdYdP2-3-2cMgDdWtWcNnydFSCsahnNuDWsJfF0QQoX-"],
    colors: ["Black", "Maroon"],
    fabric: "Cotton",
    sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
    category: "Kids",
    subCategory: "T-Shirt",
    price: 599,
    discount: 10,
    finalPrice: 599 - (599 * 10) / 100
  },
  {
    productName: "Women Jeans",
    description: "Stretchable skinny jeans for women.",
    images: ["https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/19202976/2022/7/28/50409467-e71a-44e1-a782-8e6f3e27f9061658997566628-SASSAFRAS-Women-Jeans-241658997565825-1.jpg",
      "https://flyingmachine.nnnow.com/flying-machine-women-wideleg-high-rise-jeans-KPDBK6ACF68",
      "https://www.flipkart.com/kashian-boyfriend-women-dark-blue-jeans/p/itm6f02c1f69ac55"],
    colors: ["Black", "Blue", "Grey"],
    fabric: "Denim",
    sizes: ["26", "28", "30", "32", "34"],
    category: "Women",
    subCategory: "Jeans",
    price: 2299,
    discount: 20,
    finalPrice: 2299 - (2299 * 20) / 100
  },
  {
    productName: "Men Sports Track Pants",
    description: "Comfortable track pants for gym and sports.",
    images: ["https://images.meesho.com/images/products/491638209/lukse_512.webp?width=512",
      "https://www.flipkart.com/gnockface-printed-men-black-track-pants/p/itme51a9a042a8a5",
      "https://www.decathlon.in/p/1000003706/adidas-m-3s-sj-to-pt-men-sports-track-pant-grey"],
    colors: ["Black", "Navy", "Grey"],
    fabric: "Polyester",
    sizes: ["S", "M", "L", "XL"],
    category: "Men",
    subCategory: "Track Pants",
    price: 1299,
    discount: 25,
    finalPrice: 1299 - (1299 * 25) / 100
  },
  {
    productName: "Women Ethnic Kurti",
    description: "Elegant kurti with embroidery work.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnw2XKL6T3fdufLNy_JcBKVH-ED65pSMLKw&s",
      "https://nakhclothing.com/products/suit-set?srsltid=AfmBOorAFB_cQgoDZ6xHMKD2IjdQb4NZiGkKlSfQV98MXdjcRv5SA6z2",
      "https://sanwara.com/products/sf1_ks_krs_s-s-335_bl"],
    colors: ["Pink", "Black", "Brown"],
    fabric: "Cotton Silk",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Kurti",
    price: 1799,
    discount: 35,
    finalPrice: 1799 - (1799 * 35) / 100
  },
  {
    productName: "Men Formal Blazer",
    description: "Stylish formal blazer for office and events.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8clQtQSwOq4G-dbHH6fOQMX6kOgJ-_6ecw&s",
      "https://gargee.com/en-us/products/siena-prestige-blazer?srsltid=AfmBOoprIzCqUPVJb8X-WSTi4IS8ntSsK0Q6f29lZCcpDHpYDTrp4W_j",
      "https://vanheusenindia.abfrl.in/p/men-beige-textured-ultra-slim-fit-formal-blazer-39706867.html"],
    colors: ["Black", "Navy Blue", "Grey"],
    fabric: "Poly Viscose",
    sizes: ["38", "40", "42", "44"],
    category: "Men",
    subCategory: "Blazer",
    price: 4999,
    discount: 30,
    finalPrice: 4999 - (4999 * 30) / 100
  },
  {
    productName: "Kids Party Wear Frock",
    description: "Beautiful frock for kids’ parties and functions.",
    images: ["https://www.fayonkids.com/cdn/shop/files/manufactured-by-fayon-kids-noida-u-p-lilac-neoprene-dress-for-girls-40946014781696.jpg?v=1756713982&width=533",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7oweWol3DeUDQ4vknhsWbILLwoSKLM5jvA&s",
  
      "https://tiimg.tistatic.com/fp/1/005/408/kids-indian-party-wear-gown-for-girls-503.jpg"
    ],
    colors: [
      { name: "red", hex: "#db1b1bff" },
       { name: "pink", hex: "#da10a4ff" },
        { name: "yellow", hex: "#e8d418ff" }

    ],
    fabric: "Net & Silk",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    category: "Kids",
    subCategory: "Frock",
    price: 1599,
    discount: 20,
    finalPrice: 1599 - (1599 * 20) / 100
  },
  {
    productName: "Men Analog Watch",
    description: "Classic analog wristwatch with leather strap and stainless steel dial. Water-resistant design suitable for both formal and casual wear.",
    images: [
      "https://img.tatacliq.com/images/i16//437Wx649H/MP000000016504109_437Wx649H_202403181810431.jpeg",
      "https://www.indiamart.com/proddetail/men-black-analog-wrist-watch-2854249883155.html?srsltid=AfmBOorG3OPfhM6UuLIitXUWJfryyX0rkO0OV47CD8JAYBnzHTAKOtjO"
    ],
    colors: [
      { name: "Black Strap", hex: "#000000" },
      { name: "Brown Strap", hex: "#654321" }
    ],
    fabric: "Leather & Stainless Steel",
    sizes: ["Standard"],
    category: "Men",
    subCategory: "Watch",
    price: 3499,
    discount: 25,
    finalPrice: 3499 - (3499 * 25) / 100
  },
  {
    productName: "Women Heels",
    description: "Elegant high heels with cushioned sole and pointed toe design. Perfect for parties, weddings, and formal gatherings.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRjvjhQvo1C-L8Fx8MgWrFnsOLfn5Fgy-Pw&s",
      "https://www.tatacliq.com/flat-n-heels-womens-beige-sling-back-stilettos/p-mp000000019435268"
    ],
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Nude", hex: "#FAD6A5" }
    ],
    fabric: "Synthetic Leather",
    sizes: ["5", "6", "7", "8"],
    category: "Women",
    subCategory: "Footwear",
    price: 2799,
    discount: 20,
    finalPrice: 2799 - (2799 * 20) / 100
  },
  {
    productName: "Men Polo T-Shirt",
    description: "Comfortable polo T-shirt with ribbed collar and short sleeves. Crafted with breathable cotton fabric, suitable for office casual and weekend wear.",
    images: [
      "https://urturms.com/cdn/shop/files/01_cb52f2bc-c5fa-4d25-a9aa-483f502c059d.jpg?v=1732873860",
      "https://fortcollins.co.in/products/men-all-over-geometric-print-polo-collar-t-shirt-7451ts"
    ],
    colors: [
      { name: "Navy Blue", hex: "#191970" },
      { name: "Maroon", hex: "#800000" }
    ],
    fabric: "Cotton Piqué",
    sizes: ["S", "M", "L", "XL"],
    category: "Men",
    subCategory: "T-Shirt",
    price: 999,
    discount: 15,
    finalPrice: 999 - (999 * 15) / 100
  },
  {
    productName: "Women Hoodie",
    description: "Soft fleece hoodie with kangaroo pocket and drawstring hood. Provides warmth and style for winter wear.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpQsHtiLFarSwdSMsrRUfN3kR67cqjoAxLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7-lbqMfmF6P3mcDbkW3joSlvqYd5-SbLfw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYqPFi9_HpEdA-34VzzpJVQ_bzdRPbJpV4A&s"
    ],
    colors: [
      { name: "Grey", hex: "#e98d8dff" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Fleece Cotton",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Hoodie",
    price: 1999,
    discount: 30,
    finalPrice: 1999 - (1999 * 30) / 100
  },
  {
    productName: "Kids Winter Jacket",
    description: "Warm and cozy winter jacket for kids with hood and zip closure. Made with polyester outer shell and fleece inner lining for maximum comfort.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Uo0CnIagVXBEitbuqCWWnJdLZTYoo_gtuA&s",
      "https://www.joom.com/en/products/5d78924e1436d401018c566a?srsltid=AfmBOor-4V_PdqaYVM2OFUinbAFnigPYAYyUGjceE_HmZOIjjDUUh9cK"
    ],
     colors: ["#ff0000", "#00ff00"],
    fabric: "Polyester & Fleece",
    sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
    category: "Kids",
    subCategory: "Jacket",
    price: 2299,
    discount: 25,
    finalPrice: 2299 - (2299 * 25) / 100
  },
  {
    productName: "Men Sports Shorts",
    description: "Breathable and lightweight polyester shorts with elastic waistband and side pockets. Ideal for running, gym, and outdoor activities.",
    images: [
      "https://5.imimg.com/data5/IU/JG/QQ/SELLER-14071010/solid-men-white-sports-shorts-500x500.jpeg",
      "https://www.technosport.in/collections/men-shorts?srsltid=AfmBOoqmzRAmlJITrN6voByqIK31Pt0KvN-AF90JfOQL4R2W10-8eeg1"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Grey", hex: "#808080" }
    ],
    fabric: "Polyester",
    sizes: ["M", "L", "XL"],
    category: "Men",
    subCategory: "Shorts",
    price: 699,
    discount: 10,
    finalPrice: 699 - (699 * 10) / 100
  },
  {
    productName: "Women Kurti",
    description: "Elegant cotton kurti with embroidery details. Lightweight and breathable fabric, suitable for office wear and festive occasions.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0C7Uii6Z-lG7T2D373PmKJsZmN1Pz18DZg&s",
      "https://phabrica.in/product/womens-pure-cotton-baby-pink-a-line-kurti/"
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Pink", hex: "#FFC0CB" }
    ],
    fabric: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Kurti",
    price: 1499,
    discount: 20,
    finalPrice: 1499 - (1499 * 20) / 100
  },
  {
    productName: "Kids Party Dress",
    description: "Cute party dress for kids with frill design and bow. Lightweight satin blend fabric, ideal for birthdays and festive events.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5BMmJnpW6Yn_uTlV2OuB57QZDexB2j9Tlw&s",
      "https://liandli.in/products/plum-purple-partywear-frock-with-spreaded-rani-pink-butterflies?srsltid=AfmBOorNX3DTiHMlS9Wzm1K5RmjERQVhsSLLIUdDTsq5uRl-3BAe6kRi"
    ],
    colors: [
      { name: "Lavender", hex: "#E6E6FA" },
      { name: "Peach", hex: "#FFDAB9" }
    ],
    fabric: "Satin Blend",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    category: "Kids",
    subCategory: "Dress",
    price: 1799,
    discount: 15,
    finalPrice: 1799 - (1799 * 15) / 100
  },
  {
    productName: "Men Formal Trousers",
    description: "Slim-fit formal trousers made with premium poly-cotton blend. Perfect for office wear and formal occasions.",
    images: [
      "https://i.pinimg.com/736x/77/48/ba/7748bae82f48ce2a05d4e0de8184f0a8.jpg",
      "https://www.amazon.in/RAGZO-Baggy-Formal-Trousers-Pants/dp/B0DGGRN41H"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#000080" }
    ],
    fabric: "Poly-Cotton",
    sizes: ["30", "32", "34", "36"],
    category: "Men",
    subCategory: "Trousers",
    price: 1999,
    discount: 20,
    finalPrice: 1999 - (1999 * 20) / 100
  },
  {
    productName: "Women Leggings",
    description: "Stretchable cotton-blend leggings with elastic waistband. Perfect for daily wear and pairing with kurtis or tops.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWlr2y0udmROoHchl77a55GpbI-KesMWS_Q&s",
      "https://blissclub.com/pages/women-lycra-leggings?srsltid=AfmBOor_97A6xCpNQ1lslRoKQWc6GCJZR9x2CH6eyLZvRAAyMjdAP8G9"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Maroon", hex: "#800000" }
    ],
    fabric: "Cotton Lycra",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Leggings",
    price: 799,
    discount: 15,
    finalPrice: 799 - (799 * 15) / 100
  },
  {
    productName: "Kids Denim Jeans",
    description: "Durable and stylish denim jeans for kids. Comfortable fit with elastic waistband for flexibility.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/5c7455fa7eb88c343ee82f66/e2469f7f-a207-4914-82e1-a179353b2483/i_dig_denim_organic_denim_kids_meer.jpg",
      "https://www.amazon.in/Rolanko-Elastic-Straight-Stretch-Clothes/dp/B09WTPZKWK"
    ],
    colors: [
      { name: "Blue", hex: "#1E90FF" },
      { name: "Dark Blue", hex: "#00008B" }
    ],
    fabric: "Denim",
    sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
    category: "Kids",
    subCategory: "Jeans",
    price: 1299,
    discount: 10,
    finalPrice: 1299 - (1299 * 10) / 100
  },
  {
    productName: "Women Casual Kurti",
    description: "Comfortable cotton kurti with light embroidery. Ideal for office, casual, or festive occasions.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOIjEc1QzZcYb9TJPmrMT5CBd3BZDb7yCnQ&s",
      "https://jaipurkurta.com/products/womens-off-white-cotton-casual-kurti-set?srsltid=AfmBOoqKbxWN6ISQCu4yF_0wX2C3iTEgzLMaZjxf5Igix0KMDjSl8-yD"
    ],
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "White", hex: "#FFFFFF" }
    ],
    fabric: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Kurti",
    price: 1299,
    discount: 20,
    finalPrice: 1299 - (1299 * 20) / 100
  },
  {
    productName: "Kids Denim Jacket",
    description: "Trendy kids denim jacket with button closure. Perfect for casual wear and outdoor activities.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGvOtZtZNJH9S9dhqdKkHKXDA0Rhpi-7ewg&s",
      "https://www.nextdirect.com/in/en/style/su643741/n49027"
    ],
    colors: [
      { name: "Blue", hex: "#1E90FF" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Denim",
    sizes: ["3Y", "4Y", "5Y", "6Y"],
    category: "Kids",
    subCategory: "Jacket",
    price: 1899,
    discount: 15,
    finalPrice: 1899 - (1899 * 15) / 100
  },
  {
    productName: "Men Sports Shoes",
    description: "Lightweight and durable sports shoes with cushioned sole for running, gym, and casual outings.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVtZFGgV-QjPR2kcfCk0nTFOhPuRsWwM-mA&s",
      "https://www.temu.com/men-s-sports-shoes--g-601099606286369.html"
    ],
    colors: [
      { name: "Grey", hex: "#808080" },
      { name: "Blue", hex: "#0000FF" }
    ],
    fabric: "Mesh",
    sizes: ["7", "8", "9", "10"],
    category: "Men",
    subCategory: "Shoes",
    price: 2499,
    discount: 25,
    finalPrice: 2499 - (2499 * 25) / 100
  },
  {
    productName: "Women Heels",
    description: "Elegant high-heel sandals suitable for parties, weddings, and festive occasions.",
    images: [
      "https://m.media-amazon.com/images/I/71aN9oSZl2L._UY300_.jpg",
      "https://shoethatfitsyou.in/cdn/shop/products/Black_stiletto.jpg?v=1571967681"
    ],
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Synthetic Leather",
    sizes: ["36", "37", "38", "39", "40"],
    category: "Women",
    subCategory: "Footwear",
    price: 1999,
    discount: 30,
    finalPrice: 1999 - (1999 * 30) / 100
  },
  {
    productName: "Kids Sneakers",
    description: "Comfortable sneakers for kids with strong grip and breathable design.",
    images: [
      "https://images-cdn.ubuy.co.in/66742a61ce26da0a7343cd83-baby-shoes-children-boys-bling-led-light.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6luCsVqRtGwViSzKSktTRnCcBWr_MrZ_0w&s"
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#1E90FF" }
    ],
    fabric: "Synthetic",
    sizes: ["28", "29", "30", "31"],
    category: "Kids",
    subCategory: "Shoes",
    price: 1499,
    discount: 20,
    finalPrice: 1499 - (1499 * 20) / 100
  },
  {
    productName: "Men Casual Shorts",
    description: "Breathable cotton shorts for summer. Comfortable and stylish for casual outings.",
    images: [
      "https://images.meesho.com/images/products/382299385/ric4t_512.webp?width=512",
      "https://fastfashion.co.in/product/comfortable-khaki-linen-shorts-for-men/"
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Navy", hex: "#000080" }
    ],
    fabric: "Cotton",
    sizes: ["M", "L", "XL"],
    category: "Men",
    subCategory: "Shorts",
    price: 999,
    discount: 15,
    finalPrice: 999 - (999 * 15) / 100
  },
  {
    productName: "Women Palazzo Pants",
    description: "Soft and flowy palazzo pants for office and casual wear. Designed for comfort and elegance.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMs_eq2YdGQSEHi92QMppaBZ8eyxWyW7Jmg&s",
      "https://www.pinklay.com/products/awadhi-shirt-palazzo-pant-set?srsltid=AfmBOopUyNFG6rSPtI-JcgQf_ap92qj2jPvknOx-IQ9T8p3LOTi5BCM6"
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Maroon", hex: "#800000" }
    ],
    fabric: "Rayon",
    sizes: ["S", "M", "L", "XL"],
    category: "Women",
    subCategory: "Pants",
    price: 1299,
    discount: 25,
    finalPrice: 1299 - (1299 * 25) / 100
  },
  {
    productName: "Kids Cotton Shorts",
    description: "Lightweight cotton shorts for everyday wear. Ideal for summer activities.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uZCsIZ9XMKteGWSDuywsnI1V8wiK0pCsOw&s",
      "https://image.made-in-china.com/202f0j00zsfiojuybKpt/Custom-Toddler-Shorts-for-Teenage-Short-Pants-Girls-Boys-Summer-Cotton-Shorts-Kids-Baby-Short-Boy-Girl-Casual-Solid-Color-Unisex.webp"
    ],
    colors: [
      { name: "Yellow", hex: "#FFD700" },
      { name: "Green", hex: "#008000" }
    ],
    fabric: "Cotton",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    category: "Kids",
    subCategory: "Shorts",
    price: 799,
    discount: 10,
    finalPrice: 799 - (799 * 10) / 100
  },
  {
    productName: "Men Leather Belt",
    description: "Classic leather belt with metal buckle. Perfect accessory for formal and casual outfits.",
    images: [
      "https://craftandglory.in/cdn/shop/products/2_9ffa6b20-4b45-43cd-b219-eced29a6a909.png?v=1655465959",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrTmKoRjnjYu5rxv4mZaZefy0jbOSVBYgNQ&s"
    ],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#000000" }
    ],
    fabric: "Genuine Leather",
    sizes: ["32", "34", "36", "38"],
    category: "Men",
    subCategory: "Accessories",
    price: 1299,
    discount: 20,
    finalPrice: 1299 - (1299 * 20) / 100
  },
  {
    productName: "Women Scarf",
    description: "Lightweight printed scarf for all seasons. Perfect for layering with any outfit.",
    images: [
      "https://rukminim2.flixcart.com/image/480/640/xif0q/scarf/q/n/j/free-women-square-scarf-silk-feeling-head-scarf-for-women-print-original-imagsmvwzfhzqffq.jpeg?q=90",
      "https://images.meesho.com/images/products/357611110/3o9bd_512.webp?width=512"
    ],
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "White", hex: "#FFFFFF" }
    ],
    fabric: "Chiffon",
    sizes: ["Free Size"],
    category: "Women",
    subCategory: "Accessories",
    price: 599,
    discount: 15,
    finalPrice: 599 - (599 * 15) / 100
  },
  {
    productName: "Kids Cap",
    description: "Cute cotton cap to protect kids from sun. Lightweight and adjustable.",
    images: [
      "https://www.jiomart.com/images/product/original/rv89nsiwsi/vritraz-plain-classic-little-sports-cap-for-active-kids-baby-girls-and-boys-3-12-years-black-p-product-images-rv89nsiwsi-2-202306140437.jpg?im=Resize=(500,630)",
      "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29245772/2024/4/29/0304efce-72e8-413e-bfb0-f58fa76f5c6c1714389772097KicksCrawlLittleBunnyYellowCap-6-12M1.jpg"
    ],
    colors: [
      { name: "Blue", hex: "#1E90FF" },
      { name: "Yellow", hex: "#FFD700" }
    ],
    fabric: "Cotton",
    sizes: ["Free Size"],
    category: "Kids",
    subCategory: "Accessories",
    price: 399,
    discount: 10,
    finalPrice: 399 - (399 * 10) / 100
  },
  
];

allproducts = addSlugsToProducts(products)

