
let cartDetail = {}
let username = null
let cart_cards = document.getElementById("cart_cards")
function redirect_shop() {
  let showcartproduct = document.querySelectorAll(".showcartproduct")
  showcartproduct.forEach(item => {
    item.addEventListener("click", () => {
      let slug = item.getAttribute("data-slug")
      window.location.href = "/pages/product/index.html?slug=" + slug
    })
  })
}

function handlecontrol() {
  let minus = document.querySelectorAll(".minus")
  let plus = document.querySelectorAll(".plus")
  minus.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      let slug = btn.getAttribute("data-slug")
      let qty = document.getElementById(slug)
      if (Number(qty.textContent) > 1) {
        qty.textContent = Number(qty.textContent) - 1
        let product = cartDetail[username].find(p => p.slug == slug)
        product.quantity = Number(qty.textContent)
        localStorage.setItem("cartData", JSON.stringify(cartDetail))
        totalPrice()
      }
    })
  })
  plus.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      let slug = btn.getAttribute("data-slug")
      let qty = document.getElementById(slug)
      if (Number(qty.textContent) < 10) {
        qty.textContent = Number(qty.textContent) + 1
        let product = cartDetail[username].find(p => p.slug == slug)
        product.quantity = Number(qty.textContent)
        localStorage.setItem("cartData", JSON.stringify(cartDetail))
        totalPrice()
      }
    })
  })
}

function showcartproduct(arr) {
  cart_cards.innerHTML = "";
  for (const element of arr) {
    cart_cards.innerHTML += `
      <div class="cart-items  showcartproduct" data-slug=${element.slug}>
        <div class="cart_item" >
          <div class="cart-item-1">
            <div class="cart_image">
              <img src="${element.images[0]}" alt="">
            </div>
            <div class="product_name">
              <span style="color: rgb(55, 55, 55);">${element.productName}</span>
              <span style="color: rgb(241, 186, 23); font-size: 24px;">$${element.price}</span>
            </div>
          </div>
        </div>
        <div class="cart_item-2">
          <div class="quantity-div">
            <span class="minus" style="font-size: 26px;" data-slug=${element.slug}>-</span>
            <span  class="number1" id="${element.slug}">${element.quantity}</span>
            <span class="plus" style="font-size: 26px;" data-slug=${element.slug}>+</span>
          </div>
          <span><i class="fa-solid fa-xmark delete" data-slug=${element.slug}></i></span>
        </div>  
      </div>
    `;
  }
  handlecontrol()
  hundelDeleteIcons();
  redirect_shop()
  redirect_checkout()
}

function getcardData() {
  cartDetail = JSON.parse(localStorage.getItem("cartData"))
  let userData = JSON.parse(localStorage.getItem("user")) || {}
  for (const key in userData) {
    if (userData[key].islogin) {
      username = key
    }
  }
}

function hundelDeleteIcons() {
  let deletea = document.querySelectorAll(".delete")
  deletea.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation()
      let slug = item.getAttribute("data-slug")
      let product = cartDetail[username].find(key => key.slug == slug)
      let index = cartDetail[username].indexOf(product)
      cartDetail[username].splice(index, 1)
      localStorage.setItem("cartData", JSON.stringify(cartDetail))
      let parent = item.parentElement.parentElement.parentElement
      parent.remove()
    })
  })
}
function findproduct() {
  let productarr = []
  for (const element of allproducts) {
    let result = cartDetail[username].find(key => key.slug == element.slug)
    if (result) {
      element.quantity = result.quantity
      productarr.push(element)
    }
  }
  return productarr
}

document.addEventListener("DOMContentLoaded", () => {
  getcardData()
  let product = findproduct()
  showcartproduct(product)
  totalPrice()
})

function totalPrice() {
  let price = document.getElementById("price")
  let Discount = document.getElementById("Discount")
  let delivery_fee = document.getElementById("delivery_fee")
  let total = document.getElementById("total")
  let count = 0
  let discounted = 0
  getcardData()
  for (let i = 0; i < cartDetail[username].length; i++) {
    let slugs = cartDetail[username][i].slug
    let qty = cartDetail[username][i].quantity

    for (let j = 0; j < allproducts.length; j++) {
      if (slugs == allproducts[j].slug) {
        count += allproducts[j].finalPrice * qty
        discounted += allproducts[j].price * qty
      }
    }
  }
  price.innerText = Math.floor(count)
  Discount.innerText = Math.floor(discounted - count)
  delivery_fee.innerText = Math.floor(count * 0.05)
  total.innerText = Math.floor(count + count * 0.05)
}

function redirect_checkout() {
  let userData = {}
  let Checkout = document.getElementById("Checkout")
  Checkout.addEventListener("click", (e) => {
    e.stopPropagation()
    for (const key in userData) {
      if (userData[key].islogin) {
        username = key
      }
    }
    window.location.href = "/pages/contact/index.html";
  });
}
