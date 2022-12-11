let optionsContainer = document.querySelector(".options-container");
let iconContainer = document.querySelector(".icon-container");
let iconSetting = document.querySelector(".setting-icon");
iconContainer.onclick = function() {
    optionsContainer.classList.toggle("show");
    iconSetting.classList.toggle("fa-spin");
}
let mainColors = document.querySelectorAll(".boxes-option ul li");
mainColors.forEach((color) => {
    color.addEventListener("click",() => {
        mainColors.forEach((color) => {
            color.classList.remove("active");
        })
        color.classList.add("active");
        document.documentElement.style.cssText = 
        `--main-color: ${color.dataset.color};`;
        window.localStorage.setItem("mainColor", `${color.dataset.color}`)
    })
    
})
if(window.localStorage.getItem("mainColor")){
    mainColors.forEach((color) => {
        if(color.dataset.color === localStorage.getItem("mainColor")){
            color.click();
        }
    })
}
let pageLanding = document.querySelector(".page-landing");
let bgRandom = document.querySelectorAll(".r-bg .chose button");
fsetRBG();
function fsetRBG() {
    let setRBG = setInterval(() => {
        let randomIndex = Math.trunc(Math.random()*5);
        pageLanding.style.cssText = 
        `background-image: url("../imgaes/image${randomIndex + 1}.jpg");`;
    }, 10000);
    clickCheck(setRBG);
}
function clickCheck(setRBG)  {
    bgRandom.forEach((choose) => {
        choose.addEventListener("click",() => {
            bgRandom.forEach((choose) => {
                choose.classList.remove("active");
            })
            choose.classList.add("active");
            localStorage.setItem("bgChoose", `${choose.dataset.boolean}`);
            if(choose.dataset.boolean === "no"){
                clearInterval(setRBG);
            }else{
                fsetRBG();
            }
        })
    })
}
if(localStorage.getItem("bgChoose")) {
    bgRandom.forEach((choose) => {
        if(choose.dataset.boolean === localStorage.getItem("bgChoose")){
            choose.click();
        }
    })
}
let currentProgress = document.querySelectorAll(".full-progress .current-progress");
window.onscroll = function() {
    if(scrollY > 930) {
        currentProgress.forEach((cPro) => {
            cPro.style.cssText = `width: ${cPro.dataset.progress};`;
        })
    }else{
        currentProgress.forEach((cPro) => {
            cPro.style.cssText = `width: 0%;`;
        })
    }
}
let galleryImgs = document.querySelectorAll(".gallery .img-holder img");
galleryImgs.forEach((img) => {
    img.onclick = function() {
        let overlay = document.createElement("div");
        overlay.classList.add("img-overlay");
        let divHolder = document.createElement("div");
        divHolder.classList.add("image");
        let h2ForDH = document.createElement("h2");
        h2ForDH.innerHTML = img.dataset.name;
        divHolder.appendChild(h2ForDH);
        let newImg = document.createElement("img");
        newImg.setAttribute("src", img.src);
        divHolder.appendChild(newImg);
        let hideBtn = document.createElement("button");
        hideBtn.innerHTML = "X";
        hideBtn.classList.add("hide");
        divHolder.appendChild(hideBtn);
        overlay.appendChild(divHolder);
        document.body.appendChild(overlay);
        removeImg(hideBtn, overlay);
    }
})
function removeImg(hideBtn, overlay) {
    hideBtn.addEventListener("click",() => {
        overlay.remove();
    })
}
let btnsBullets = document.querySelectorAll(`.options-container 
.boxes-option .bullets-visibility .chose button`);
let myBullets = document.querySelector("ul.bullets");
btnsBullets.forEach((btn) => {
    btn.onclick = function() {
        btnsBullets.forEach((btn) => {
            btn.classList.remove("active");
        })
        btn.classList.add("active");
        if(btn.dataset.chose === "yes") {
            myBullets.style.cssText = "display: block;"
        }else{
            myBullets.style.cssText = "display: none;"
        }
        localStorage.setItem("bullets Show", btn.dataset.chose);
    }
})
if(localStorage.getItem("bullets Show")) {
    btnsBullets.forEach((btn) => {
        if(btn.dataset.chose === localStorage.getItem("bullets Show")){
            btn.click();
        }
    })
}
let btnReset = document.querySelector(".boxes-option .btn-reset");
btnReset.onclick = function() {
    localStorage.clear();
    location.reload();
}
let menuBtn = document.querySelector(".page-landing .header i");
let ourTable = document.querySelector(".header i ul.menu");
menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("after");
    ourTable.classList.toggle("show");
})
window.addEventListener("click", function(e) {
    if(e.target.classList.contains("fa-solid") === false) {
        ourTable.classList.remove("show");
        menuBtn.classList.remove("after");
    }
})
