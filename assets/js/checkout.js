let cartDetail = {}
let username=null
let ordercontent = document.getElementById("ordercontent")
let Shipping = document.getElementById("Shipping")
let submitform = document.getElementById("submitform")
let animation_page_checkout = document.getElementById("animation_page_checkout")
let background = document.getElementById("background")
let rotator = document.getElementById("rotator")

function saveuserdata(firstname, LastName, Email, Address, phone, city, state, Postalcode, Country) {
    let address = JSON.parse(localStorage.getItem("address")) || {};
    for (const key in address) {
        address[key].Address = false;
    }
    address[firstname] = {
        firstname,
        LastName,
        Email,
        Address,
        phone,
        city,
        state,
        Postalcode,
        Country
    };
    localStorage.setItem("address", JSON.stringify(address));
}

function cleanCart() {
    let username = null
     let userData = JSON.parse(localStorage.getItem("user")) || {}
    for (const key in userData) {
        if (userData[key].islogin) {
            username = key
        }
    }
    if (username != null) {
        console.log("jgfjhfkjkhjhjhk")
        delete cartDetail[username]
        console.log(cartDetail)
    }
    localStorage.setItem("cartData",JSON.stringify(cartDetail))
}
function redirect_shop() {
    let showcartproduct = document.querySelectorAll(".showcartproduct")
    showcartproduct.forEach(item => {
        item.addEventListener("click", () => {
            let slug = item.getAttribute("data-slug")
            window.location.href = "/pages/product/index.html?slug=" + slug;
        })
    })
}

function showcartproduct(arr) {
    ordercontent.innerHTML = "";
    for (const element of arr) {
        ordercontent.innerHTML += `
    <div class="product showcartproduct" data-slug=${element.slug}>
                    <img src="${element.images[0]}" alt="Product">
                    <div class="product-info">
                        <p>Basic Heavy T-SHRT</p>
                        <p>Black/L</p>
                    </div>
                    <div class="price">$${element.price}</div>
             </div>
    `;
    }
    redirect_shop()
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
    total.innerText = Math.floor(count + count * 0.05)
}

Shipping.addEventListener("click", (e) => {
    e.preventDefault()
    animation_page_checkout.style.display = "flex";
    background.style.opacity = "1";
    rotator.style.opacity = "1";
    rotator.classList.add("spin");
    rotator.classList.add("open")
    setTimeout(() => {
        let firstname = document.getElementById("firstname").value;
        let LastName = document.getElementById("LastName").value;
        let Email = document.getElementById("email").value;
        let Address = document.getElementById("Address").value;
        let phone = document.getElementById("phone").value;
        let city = document.getElementById("City").value;
        let state = document.getElementById("State").value;
        let Postalcode = document.getElementById("Postalcode").value;
        let Country = document.getElementById("Country").value;
        saveuserdata(firstname, LastName, Email, Address, phone, city, state, Postalcode, Country)
        submitform.reset();
        cleanCart()
        let confirm = document.getElementById("order_confirmed_box");
        confirm.style.opacity = "1";
        confirm.style.zIndex = "100000000000000000"
        confirm.style.transform = "scale(1)";
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 1500);
    }, 1800);
});





