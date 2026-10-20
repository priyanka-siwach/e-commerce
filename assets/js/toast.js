

toast_btn.addEventListener("click", () => {
    sucess_modal.classList.add("active")
    setTimeout(() => {
        sucess_modal.classList.remove("active")
    }, 5000)
})
let cross_mark = document.getElementById("cross_mark")
cross_mark.addEventListener("click", () => {
    sucess_modal.classList.remove("active")
})