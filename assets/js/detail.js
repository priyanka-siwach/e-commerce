
let container_4 = document.getElementById("container_4");
let slug;
let main_sctn = {}
let cart = {}
document.addEventListener("DOMContentLoaded", () => {
  let parsm = new URLSearchParams(window.location.search)
  slug = parsm.get('slug')
  getproductdata();
  for (const element of allproducts) {
    if (element.slug == slug) {
      productdetail(element);
      break;
    }
  }
   savequantity(slug) 
});



function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

function handleQuantity() {
  let count = 1;
  let substract = document.getElementById("substract");
  let addnumber = document.getElementById("addnumber");
  let additem = document.getElementById("additem");

  additem.addEventListener("click", () => {
    count++;
    addnumber.textContent = count;
  });

  substract.addEventListener("click", () => {
    if (count > 1) count--;
    addnumber.textContent = count;
  });
}


function handleCart() {
  let addcart = document.getElementById("addcart")
  let go_btn = document.getElementById("go_btn")
  let addnumber = document.getElementById("addnumber");
  addcart.addEventListener("click", (e) => {
    let username = null;
    e.stopPropagation()
    for (const key in main_sctn) {
      if (main_sctn[key].islogin) {
        username = key
      }
    }
    if (username == null) {
      signupbox.style.visibility = "visible";
      signupbox.style.opacity = "1";
      signupbox.style.zIndex = "100000000000000000"
      signupbox.style.pointerEvents = "auto"
      return
    }
    else {
      if (!cart[username]) {
        cart[username] = []
      }
      cart[username].push({
        slug: slug,
        quantity: addnumber.textContent
      })
      savecart()
      addcart.style.display = "none"
      go_btn.style.display = "flex"
    }

  })
  go_btn.addEventListener("click", () => {
     showLoader();
      setTimeout(() => {
    window.location.href = "/pages/cart/index.html";
      },500)
  });
}

function savequantity(slug) {
  let addcart = document.getElementById("addcart")
  let go_btn = document.getElementById("go_btn")
  let addnumber = document.getElementById("addnumber");
  let username = null
  for (const key in main_sctn) {
    if (main_sctn[key].islogin) {
      username = key
    }
  }

  if (username == null) {
    signupbox.style.visibility = "hidden";
    signupbox.style.opacity = "1";
    signupbox.style.zIndex = "100000000000000000"
    signupbox.style.pointerEvents = "auto"
    return
  }
  else {
    let productcart = cart[username].find(item => item.slug === slug)
    if (productcart) {
      addnumber.textContent=productcart.quantity
      addcart.style.display = "none"
      go_btn.style.display = "block"
    }
  
  }
}
function savecart() {
  localStorage.setItem("cartData", JSON.stringify(cart))
}

function getproductdata() {
  main_sctn = JSON.parse(localStorage.getItem("user")) || {}
  cart = JSON.parse(localStorage.getItem("cartData")) || {}
}

function savedata(filename, data) {
  localStorage.setItem(filename, JSON.stringify(data));
}
function handelshowimage() {
  let allimages = document.querySelectorAll(".allimages");
  let main_Img = document.getElementById("main_Img");
  allimages.forEach(img => {
    img.addEventListener("click", () => {
      main_Img.src = img.src;
    });
  });
}
function showProductImage(arr) {
  let image_div = document.getElementById("image_div");
  image_div.innerHTML = "";
  for (const element of arr) {
    image_div.innerHTML += `
      <img class="allimages" src="${element}" alt="" style="width:80px;margin:5px;cursor:pointer;opacity:0.5">
    `;
  }
  handelshowimage();
}
function handlecolor() {
  let colorbox = document.querySelectorAll(".colorbox");
  if (colorbox.length > 0) colorbox[0].classList.add("selected");
  colorbox.forEach(box => {
    box.addEventListener("click", () => {
      colorbox.forEach(newbox => newbox.classList.remove("selected"));
      box.classList.add("selected");
    });
  });
}
function showcolor(arr2) {
  let color = document.getElementById('color');
  if (!color) return;
  color.innerHTML = "";
  for (const element of arr2) {
    let hex = element.hex || element;
    color.innerHTML += `
      <div class="colorbox" style="background-color:${hex}">
        <i class="fa-solid fa-check" style="position:absolute;"></i>
      </div>
    `;
  }
  handlecolor();
}

function handlesize() {
  let sizeselect = document.querySelectorAll(".sizeselect");
  if (sizeselect.length > 0) sizeselect[0].classList.add("clickedsize");
  sizeselect.forEach(element => {
    element.addEventListener("click", () => {
      sizeselect.forEach(boxchoose => boxchoose.classList.remove("clickedsize"));
      element.classList.add("clickedsize");
    });
  });
}
function showsize(arr3) {
  let sizes = document.getElementById('sizes');
  if (!sizes) return;
  sizes.innerHTML = "";
  for (const element of arr3) {
    sizes.innerHTML += `
      <div class="sizeselect">
        <button class="sizes-btn">${element}</button>
      </div>
    `;
  }
  handlesize();
}
function productdetail(element) {
  container_4.innerHTML = ` 
    <div class="detail_page1">
      <div class="product-images">
        <div class="main-image-1">
          <img src="${element.images[0]}" id="main_Img">
        </div>
      </div>
      <div class="product-container">
        <div class="product-pic" id="image_div"></div>
      </div>
      <div class="product-details">
        <h2 class="print">${element.productName}</h2>
        <p class="ruppee">${element.price}</p>
        <p class="mrp">MRP incl. of all taxes</p>
        <p class="collar">${element.description}</p>
        <div class="circle">
          <div><p class="color_name">COLOR</p></div>
          <div class="color-box" id="color"></div>
        </div>
        <div class="sizes">
          <div><p class="size_name">SIZES</p></div>
          <div class="size-btn-list" id="sizes"></div>
        </div>
        <div class="find">
          <p class="find_size">FIND YOUR SIZE | MEASUREMENT GUIDE</p>
        </div>
         <div class="product_item-2">
            <div class="quantity_div">
              <span id="substract" style="font-size: 26px;">-</span>
              <span id="addnumber">1</span>
              <span id="additem" style="font-size: 26px;">+</span>
            </div>
          </div>
        <div class="add_div">
          <button class="add" id="addcart">Add to cart</button>
            <button id="go_btn"style="display:none" class="add " >go to cart</button>
        </div>
      </div>
    </div>
  `;
  showProductImage(element.images);
  showcolor(element.colors);
  showsize(element.sizes);
  handleCart()
  handleQuantity();

}
