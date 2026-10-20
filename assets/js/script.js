

let banners = [

  {
    bannerseason: "winter 2020",
    banner_heading: "Mega Diwali Sale",
    banner_description: "Get up to 70% off on top brands this festive season.  Limited time offer — shop before it's gone!",
    image: "assets/image/portrait-fashionable-woman-oversized-sweater-removebg-preview.png"
  },
  {
    bannerseason: "winter 2020",
    banner_heading: "Men’s Winter Collection",
    banner_description: "Stay warm and stylish this winter with our latest range of jackets, sweaters, and hoodies.",
    image: " assets/image/images__3_-removebg-preview.png"
  },
  {
    bannerseason: "summer 2023",
    banner_heading: "Women’s Exclusive Styles",
    banner_description: "Explore elegant outfits designed for modern women — from ethnic to western wear.",
    image: "assets/image/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAzL3Jhd3BpeGVsb2ZmaWNlMTJfcG9ydHJhaXRfb2ZfYW5fYXR0cmFjdGl2ZV9zbWlsaW5nX3NsaWdodGx5X2NhdV9mYzM5NGJmYi04ZTViLTQxZGItOTYzYS1mMDE0YjgwODk3YTdfMS5wbmc-removebg-pre.png"
  },
  {
    bannerseason: "winter 2020",
    banner_heading: "women Fashion Fiesta",
    banner_description: "Colorful, comfy, and trendy — find the perfect outfit for your little ones.",
    image: "assets/image/festival-wear-orange-rayon-geo-1718615195-removebg-preview.png"
  },
  {
    bannerseason: "summer 2024",
    banner_heading: "Flash Sale - 24 Hours Only",
    banner_description: "Hurry! Unbelievable discounts on shoes, accessories, and more. Offer ends tonight!",
    image: "assets/image/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl95b3VuZ19pbmRpYW5fZ2lybF9ob2xkaW5nX3N0dWRlbnRfYl81ZmVkNmMzMy01ZWU0LTRjY2MtYmNiZS1kZWVlOWQyNTBmMWYtbTRzODZ3b2gucG5n-rem.png"
  },
  {
    bannerseason: "winter 2025",
    banner_heading: "Footwear Festival",
    banner_description: "Step up your style with our new collection of sneakers, heels, and sandals.",
    image: "assets/image/kent-uk-01012024-fila-disruptor-600nw-2476450571-removebg-preview.png"
  },
  {
    bannerseason: "summer 2020",
    banner_heading: "Accessories & More",
    banner_description: "Complete your look with premium bags, watches, and fashion accessories.",
    image: "assets/image/png-transparent-girl-woman-girl-image-file-formats-people-girls-removebg-preview.png"
  },
  {
    bannerseason: "winter 2021",
    banner_heading: "End of Season Clearance",
    banner_description: "Huge discounts on last season’s bestsellers. Shop your favorites before they’re gone!",
    image: "assets/image/png-curly-haired-man-laughing-portrait-adult-ai-generated-image-by-rawpixel_53876-752845-removebg-preview.png"
  },
  {
    bannerseason: "summer 2023",
    banner_heading: "Join Our Loyalty Program",
    banner_description: "Earn points every time you shop and enjoy exclusive discounts and early access to sales.",
    image: "assets/image/e5a86b866bd4c75272e65689faa8c1b7-removebg-preview.png"
  }
]

let container = document.querySelector("#container")

function redirect(){
  let unique_products=document.querySelectorAll(".unique_products")
  unique_products.forEach(item =>{
    item.addEventListener("click",()=>{
      let slug=item.getAttribute("data-slug")
      window.location.href="/pages/product/index.html?slug="+slug
    })
  })
}


for (const element of banners) {
  container.innerHTML += `
    <div class="banner_slider">
      <div class="main_container" style="padding: 60px 5px;">
      <h2 class="summer">${element.bannerseason} </h2>
      <h1  class="collection">${element.banner_heading}</h1>
      <p class="para">${element.banner_description}</p>
      <button class="shop">SHOP NOW</button>
    </div>
    <div class="right_image">
      <img src="${element.image}" alt="">
    </div>
    </div>
  `
}

let slider=document.querySelectorAll(".banner_slider")
function sliderfunc(index,isreturn){
  let width=container.offsetWidth
  slider.forEach(slide=>{
    if(isreturn){
      slide.style.transition="";
    }
    else{
      slide.style.transition="all 1s ease"
    }
    slide.style.transform=`translateX(-${(index*width)}px)`
  })
}
let currentIndex=0
let isreturn;
setInterval(()=>{
  if(slider.length-1>currentIndex){
    currentIndex++
    isreturn=false
  }else{
    currentIndex=0
    isreturn=true
  }
  sliderfunc(currentIndex,isreturn)
},3000)
  
function showproduct(showdiv,product){
  for (const element of product) {
    showdiv.innerHTML+=`
      <div class="card_1 unique_products" data-slug=${element.slug}>
        <img src="${element.images[0]}" alt="">
        <div class="card_information">
          <h6 class="design">${element. productName}</h6>
        </div>
        <h2 class="english">English Department</h2>
        <pre class="price-tag">Rs.${element.finalPrice} <span class="price" style="color: green;">Rs.${element.price}</span></pre>
      </div>
    
    ` 
  }
  redirect()
}

let container_4=document.getElementById("container_4")
showproduct(container_4,allproducts.slice(0,8))