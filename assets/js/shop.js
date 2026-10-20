let productSearch = document.getElementById("productSearch")
let productConatiner = document.getElementById("productConatiner")
let color_row1 = document.getElementById("color_row1")
let size_buttons = document.getElementById("size-buttons")
let productpageno = document.getElementById("productpageno")
let privious = document.getElementById("privious")
let next = document.getElementById("next")
let pageindex = 1
let pagenumberwithlength = null

// let loader = document.getElementById("loader");

let productsArray = []
let sizes = []
let colors = []


let searchdata = JSON.parse(localStorage.getItem("searchcat")) || {};

function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

function getseacrcData() {
  searchdata = JSON.parse(localStorage.getItem("searchcat")) || {}
}
function saveseacrcData(sendData) {
  localStorage.setItem("searchcat", JSON.stringify(sendData))
}

function searchItem(value = undefined) {
  let showProducctArray = []
  if (value) {
    for (const element of allproducts) {
      if (element.productName.includes(value) || element.category.includes(value) || element.subCategory.includes(value) || element.description.includes(value)) {
        showProducctArray.push(element)
      }
    }
    let allcategory = {}
    for (const element of showProducctArray) {
      if (allcategory.hasOwnProperty(element.category)) {
        allcategory[element.category] += 1
      }
      else {
        allcategory[element.category] = 1
      }
    }

    largecategory = Object.values(allcategory)[0]
    for (const element of Object.values(allcategory)) {
      if (largecategory < element) {
        largecategory = element
      }
    }

    let largeindex = Object.values(allcategory).indexOf(largecategory)
    let valueArray = Object.entries(allcategory)[largeindex]
    if (searchdata[valueArray[0]]) {
      searchdata[valueArray[0]] += 1
    } else {
      searchdata[valueArray[0]] = 1

    }
    saveseacrcData(searchdata)

  }

  else {
    showProducctArray = allproducts
  }
  let uniquesize = []
  showProducctArray.forEach(product => {
    for (const element of product.sizes) {
      if (!uniquesize.includes(element)) {
        uniquesize.push(element)
      }
    }
  })

  let uniquecolor = []
  showProducctArray.forEach(product => {
    for (const element of product.colors) {
      let result = uniquecolor.some(color => color.hex == element.hex)
      // console.log(element,result)
      if (!result) {
        uniquecolor.push(element)
      }
    }
  })
  return { showProducctArray, uniquesize, uniquecolor }
}

function showproductno() {
  let totalproduct = document.getElementById("totalproduct")
  totalproduct.innerHTML = `
   <span class="total_product_no" id="pagenumberwithlength" >showing product 0-12</span>
  `
  pagenumberwithlength = document.getElementById("pagenumberwithlength")
}
function redirect_shop() {
  let unique_products_shop = document.querySelectorAll(".unique_products_shop");
  unique_products_shop.forEach(item => {
    item.addEventListener("click", () => {
      let slug = item.getAttribute("data-slug");

      
      showLoader();

     
      setTimeout(() => {
        window.location.href = "/pages/product/index.html?slug=" + slug;
      }, 500);
    });
  });
}



function showIntoHtml(array) {
  productConatiner.innerHTML = ''
  for (const element of array) {
    productConatiner.innerHTML += `
         <div class="tshirt_card unique_products_shop " data-slug=${element.slug}>
          <div class="images_section">
            <img
              src="${element.images[0]}"
              alt="">
          </div>
          <div class="information-card">
            <div class="information">
              <div class="basic_div">
                <h6 class="Grapic_design">${element.fabric} ${element.category} ${element.subCategory}</h6>
                <h2 class="english_dep">${element.productName}</h2>
              </div>
              <div class="prices_div">
                <p class="price">$${element.finalPrice}</p>
              </div>
            </div>

          </div>
        </div>
        `
  }

  productpageno.innerHTML = ""
  for (let index = 1; index <= Math.ceil(productsArray.length / 12); index++) {
    productpageno.innerHTML += `
      <a class="fst_product pageNumber" data-page="${index}">${index}</a>`
  }
  handlepageindex()
  redirect_shop()
  handlepageactive()
}

function handlepageindex() {
  let pageNumber = document.querySelectorAll(".pageNumber");
  pageNumber.forEach(page => {
    page.addEventListener("click", () => {
      showLoader();
      setTimeout(() => {
        let index = page.getAttribute("data-page");
        pageindex = index;
        showIntoHtml(productsArray.slice((index - 1) * 12, (index * 12)));
        pagenumberwithlength.textContent = `showing ${(index - 1) * 12}-${(index * 12)} of ${productsArray.length} products`

        pageNumber.forEach(box1 => box1.classList.remove("active"));
        page.classList.add("active");
        hideLoader();
      }, 500);
    });
  });
}

privious.addEventListener("click", () => {

  if (pageindex > 1) {
    showLoader();
    setTimeout(() => {
      pageindex--;
      showIntoHtml(productsArray.slice((pageindex - 1) * 12, (pageindex * 12)));
      pagenumberwithlength.textContent = `showing ${(pageindex - 1) * 12}-${(pageindex * 12)} of ${productsArray.length} products`
      handlepageactive();
      hideLoader();
    }, 500);
  } else {
    showtoastmessage("error", "Product not found", 500);
  }
});

next.addEventListener("click", () => {
  let pageNumber = document.querySelectorAll(".pageNumber");
  if (pageindex < pageNumber.length) {
    showLoader();
    setTimeout(() => {
      pageindex++;
      showIntoHtml(productsArray.slice((pageindex - 1) * 12, (pageindex * 12)));
      pagenumberwithlength.textContent = `showing ${(pageindex - 1) * 12}-${(pageindex * 12)} of ${productsArray.length} products`

      handlepageactive();
      hideLoader();
    }, 500);
  } else {
    showtoastmessage("error", "product not found", 500);
  }
});

function showcolor(arr) {
  color_row1.innerHTML = ''
  for (const element of arr) {
    color_row1.innerHTML += `
     <div class="allcolor show_active" style="background-color:${element.hex};"></div>
    `
  }
  handleonclickcolor()
}

function showsize(arr) {
  size_buttons.innerHTML = ''
  for (const element of arr) {
    size_buttons.innerHTML += `
      <button class="size_active">${element}</button>
    `
  }
  handelsizeclick()
}

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let productsArray = searchItem(productSearch.value.trim()).showProducctArray
    if (productsArray.length >= 12) {
      showIntoHtml(productsArray.slice(0, 12))
      pagenumberwithlength.textContent = `showing${0}-${(12)} of ${productsArray.length} products`
    } else {
      showIntoHtml(productsArray.slice(0, 12))
      pagenumberwithlength.textContent = `showing ${0}-${(12)} of ${productsArray.length} products`
    }
    // showIntoHtml(productsArray)
  }
})

document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  setTimeout(() => {
    getseacrcData()
    let parsm = new URLSearchParams(window.location.search)
    let q = parsm.get("q")
    productSearch.value = q
    if (q) {
      let objofresult = searchItem(q)
      productsArray = objofresult.showProducctArray
      sizes = objofresult.uniquesize
      colors = objofresult.uniquecolor
      showIntoHtml(productsArray.slice(0, 12))
      showcolor(colors)
      showsize(sizes)
      showproductno()
      pagenumberwithlength.textContent = `showing ${0}-${(12)} of ${productsArray.length} products`

    }
    else {
      let largedata = Object.values(searchdata)[0]
      for (const element of Object.values(searchdata)) {
        if (largedata < element) {
          largedata = element
        }
      }
      let largeindex = Object.values(searchdata).indexOf(largedata)
     
   
      let valueArray = Object.entries(searchdata)[largeindex]
    

      let objofresult = searchItem(valueArray[0])
      productsArray = objofresult.showProducctArray
      sizes = objofresult.uniquesize
      colors = objofresult.uniquecolor
      // console.log(productsArray, colors)
      if (productsArray.length >= 12) {
        showIntoHtml(productsArray.slice(0, 12))
        showproductno()
        pagenumberwithlength.textContent = `showing ${0}-${(12)} of ${productsArray.length} products`
        showcolor(colors)
        showsize(sizes)

      }
      else {
        showIntoHtml(productsArray.slice(0, 12))
        showproductno()
        pagenumberwithlength.textContent = `showing ${0}-${(12)} of ${productsArray.length} products`
        showcolor(colors)
        showsize(sizes)

      }

      // showIntoHtml(productsArray.slice(0, 12))
      // // showcolor(colors)
      // // showsize(sizes)
    }
    hideLoader();
  }, 800);
});

function handleonclickcolor() {
  let show_active = document.querySelectorAll(".show_active")
  show_active.forEach(box => {
    box.addEventListener("click", () => {
      show_active.forEach(box1 => box1.classList.remove("color_active"))
      box.classList.add("color_active")
    })
  })

}

function handelsizeclick() {
  let sizeButtons = document.querySelectorAll("#size-buttons button");
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("size_active"));
      btn.classList.add("size_active");
    });
  });
}

function handlepageactive() {
  let pageNumber = document.querySelectorAll(".pageNumber");
  pageNumber.forEach(box1 => {
    if (box1.getAttribute("data-page") == pageindex) {
      box1.classList.add("active");
    } else {
      box1.classList.remove("active");
    }
  });
}