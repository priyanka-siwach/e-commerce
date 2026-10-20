let profilepic = document.getElementById("profilepic");
let profilediv = document.getElementById("my_profile");
let crossbtn = document.getElementById("crossSignup");
let signup_form = document.getElementById("signup_form");
let loginup_form = document.getElementById("loginup_form");
let loginusername = document.getElementById("loginusername");
let button = document.querySelector("#log_btn button");
let log_btn = document.getElementById("log_btn");
let loader = document.getElementById("loader");
let sucess_modal = document.getElementById("sucess_modal")
let root = document.documentElement
let check = document.querySelector(".check")
let success = document.getElementById("success")
let mess_saved = document.getElementById("mess_saved")

let cross_mark = document.getElementById("cross_mark")
cross_mark.addEventListener("click", () => {
  sucess_modal.classList.remove("active")
})

let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  if (productSearch.style.display === "none") {
    productSearch.style.display = "flex"
  }
  else {
    productSearch.style.display = "none"
  }
});

function showtoastmessage(result, message, delay) {
  if (result == "success") {
    root.style.setProperty("--toast-color", "#40f467")
    success.textContent = "success"
    mess_saved.textContent = message
    check.classList.remove("fa-xmark")
    check.classList.add("fa-circle-check")
  }
  else {
    root.style.setProperty("--toast-color", "red")
    success.textContent = "error"
    mess_saved.textContent = message
    check.classList.add("fa-xmark")
    check.classList.remove("fa-circle-check")

  }
  if (delay > 0) {
    setTimeout(() => {
      sucess_modal.classList.add("active")
    }, delay)
  }

  else {
    sucess_modal.classList.add("active")
  }
  setTimeout(() => {
    sucess_modal.classList.remove("active")
  }, 5000)
}

function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

window.addEventListener("load", () => {
  showLoader();
  setTimeout(hideLoader, 1500);
});

function logout() {
  let email = localStorage.getItem("currentUser");
  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (email && user[email]) {
    user[email].islogin = false;
    user[email].lastlogout = new Date().getTime();
    localStorage.setItem("user", JSON.stringify(user));
  }

  localStorage.removeItem("currentUser");
  showtoastmessage("success", "logout successfuly")
}

profilepic.addEventListener("click", (e) => {
  e.stopPropagation();
  profilediv.style.visibility =
    profilediv.style.visibility === "visible" ? "hidden" : "visible";
  profilediv.style.opacity =
    profilediv.style.opacity === "1" ? "0" : "1";
});

crossbtn.addEventListener("click", () => {
  profilediv.style.visibility = "hidden";
  profilediv.style.opacity = "0";
});

let signup = document.getElementById("signup");
let signupbox = document.getElementById("my_profile2");
let crossSignup = document.querySelector(".crossbtn");
signup.addEventListener("click", (e) => {
  e.stopPropagation();
  if (log_btn.getAttribute("data-action") === "login") {
    signupbox.style.visibility = "visible";
    signupbox.style.opacity = "1";
    signupbox.style.pointerEvents = "auto";
  } else {
    logout();
    updateuser();
  }
});

crossSignup.addEventListener("click", () => {
  signupbox.style.visibility = "hidden";
  signupbox.style.opacity = "0";
  signupbox.style.pointerEvents = "none"; 
});

function updateuser(fullname = undefined) {
  // console.log("updateuser, fullname:", fullname);
  if (fullname !== undefined) {
    loginusername.textContent = "Hello " + fullname;
    button.textContent = "logout";
    log_btn.setAttribute("data-action", "logout");
  } else {
    loginusername.textContent = "Hello User";
    button.textContent = "login";
    log_btn.setAttribute("data-action", "login");
  }
}

function saveuserdata(fullname, Email, Password) {

  let user = JSON.parse(localStorage.getItem("user")) || {};

  for (const key in user) {
    user[key].islogin = false;
    user[key].lastlogout = new Date().getTime();
  }

  user[Email] = {
    fullname,
    Email,
    Password,
    islogin: true,
    lastlogin: new Date().getTime(),
    lastlogout: false,
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("currentUser", Email);
  updateuser(fullname);
  showtoastmessage("success", "account created successfully", 500)
}

signup_form.addEventListener("click", (e) => e.stopPropagation());
loginup_form.addEventListener("click", (e) => e.stopPropagation());
signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  showLoader();

  let fullname = document.getElementById("Full_Name").value;
  let Email = document.getElementById("loginemail").value;
  let Password = document.getElementById("loginpassword").value;
 

  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (Email in user) {
    hideLoader();
  }

  setTimeout(() => {
    hideLoader();
    saveuserdata(fullname, Email, Password);
    signup_form.reset();
    let modal = document.getElementById("signUp_modal");
    if (modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  }, 1000);
});

function comparedate(loginemail, loginpassword) {
  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (user[loginemail] && loginpassword === user[loginemail].Password) {
    for (const key in user) {
      if (key !== loginemail && user[key].islogin) {
        user[key].islogin = false;
        user[key].lastlogout = new Date().getTime();
      }
    }

    user[loginemail].islogin = true;
    user[loginemail].lastlogin = new Date().getTime();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("currentUser", loginemail);
    updateuser(user[loginemail].fullname);
    showtoastmessage("success", "login successfuly",500)

   
    if(signupbox){
      signupbox.style.visibility = "hidden";
      signupbox.style.opacity = "0";
      signupbox.style.pointerEvents = "none";
    }

    return true;
  }
  showtoastmessage("error", "user not found",500)
  return false;
}

loginup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  showLoader();

  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;
  setTimeout(() => {
    hideLoader();
    loginup_form.reset();

    if (comparedate(Username, Password)) {
      // Already handled inside comparedate
    } else {
      console.log("login failed");
    }
  }, 1000);
});

document.querySelector(".acount_main").addEventListener("click", (e) => e.stopPropagation());
document.querySelector(".signup-box").addEventListener("click", (e) => e.stopPropagation());
document.querySelector(".signup-box2").addEventListener("click", (e) => e.stopPropagation());
if (signupbox) signupbox.addEventListener("click", (e) => e.stopPropagation());
if (signup_form) signup_form.addEventListener("click", (e) => e.stopPropagation());
if (loginup_form) loginup_form.addEventListener("click", (e) => e.stopPropagation());


document.addEventListener("click", () => {
  if (profilediv) {
    profilediv.style.visibility = "hidden";
    profilediv.style.opacity = "0";
  }
  if (signupbox) {
    signupbox.style.visibility = "hidden";
    signupbox.style.opacity = "0";
    signupbox.style.pointerEvents = "none";
  }
});

let loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let modal = document.getElementById("signUp_modal");
  if (modal) {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
  }

  if (signupbox) {
    signupbox.style.visibility = "hidden";
    signupbox.style.opacity = "0";
    signupbox.style.pointerEvents = "none";
  }
});

let closeSignupBtn = document.getElementById("closeSignup");
if (closeSignupBtn) {
  closeSignupBtn.addEventListener("click", () => {
    let modal = document.getElementById("signUp_modal");
    if (modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  });
}

let Signuplink = document.getElementById("Signuplink");
if (Signuplink) {
  Signuplink.addEventListener("click", (e) => {
    e.preventDefault();
    let modal = document.getElementById("signUp_modal");
    if (modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
    if (signupbox) {
      signupbox.style.visibility = "visible";
      signupbox.style.opacity = "1";
      signupbox.style.pointerEvents = "auto";
    }
  });
}

function checklogin() {
  let user = JSON.parse(localStorage.getItem('user'))
  for (const key in user) {
    if (user[key].islogin) {
      updateuser(key)
      return
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  checklogin()
  // gocart()
})

// function gocart(){
//   let cart_item=document.getElementById("cart_item")
//   add.addEventListener("click",()=>{
//   for (const key in main_sctn) {
//     if(main_sctn[key].islogin){
//       username=key
//     }
//   }
//   window.location.href="/pages/cart/index.html"
   
//   })
// }



