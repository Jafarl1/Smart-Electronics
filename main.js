
let d = document

let products = [
    {
        id: 1,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5300 ₽",
        price: "4890 ",
        class: 1,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "hits"
    },
    {
        id: 2,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 2,
        rating: 4,
        count: 1,
        stock: 5,
        chapter: "hits"
    },
    {
        id: 3,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance S-Pro 320",
        exprice: "",
        price: "13960 ",
        class: 3,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "hits"
    },
    {
        id: 4,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Wheel P1 Жёлтый граффити",
        exprice: "6500 ₽",
        price: "5999 ",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "hits"
    },
    {
        id: 5,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 1,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "news"
    },
    {
        id: 6,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 2,
        rating: 4,
        count: 1,
        stock: 5,
        chapter: "news"
    },
    {
        id: 7,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance",
        exprice: "",
        price: "13960 ",
        class: 3,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "news"
    },
    {
        id: 8,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "news"
    },
    {
        id: 9,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 1,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "segways"
    },
    {
        id: 10,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 2,
        rating: 4,
        count: 1,
        stock: 5,
        chapter: "segways"
    },
    {
        id: 11,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance",
        exprice: "",
        price: "13960 ",
        class: 3,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "segways"
    },
    {
        id: 12,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "segways"
    },
    {
        id: 13,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 1,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "monowheels"
    },
    {
        id: 14,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 2,
        rating: 4,
        count: 1,
        stock: 5,
        chapter: "monowheels"
    },
    {
        id: 15,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance",
        exprice: "",
        price: "13960 ",
        class: 3,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "monowheels"
    },
    {
        id: 16,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "monowheels"
    },
    {
        id: 17,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 1,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "cycles"
    },
    {
        id: 18,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 2,
        rating: 4,
        count: 1,
        stock: 5,
        chapter: "cycles"
    },
    {
        id: 19,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance",
        exprice: "",
        price: "13960 ",
        class: 3,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "cycles"
    },
    {
        id: 20,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5400 ₽",
        price: "4990 ",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "cycles"
    }
]
let cartArr = []
let product = d.querySelectorAll(".product") 


// <==== Products on page ====>

let hitsBody = d.querySelector(".hits-block-body")
let newsBody = d.querySelector(".news-block-body")
let segwaysBody = d.querySelector(".segways-block-body")
let monowheelsBody = d.querySelector(".monowheels-block-body")
let cyclesBody = d.querySelector(".cycles-block-body")

products.forEach(prod => {
    if (prod.chapter == "hits"){
        hitsBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name} D${prod.id}
                </p>
                <div class="rating">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/review.svg" alt="review" class="review-icon">
                    <span> (17)</span>
                </div>
                <div class="price-rate">
                    <div class="price">
                        <p class="striked">
                            ${prod.exprice}
                        </p>
                        <p class="real">
                            ${prod.price}₽
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
                        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
                    </div>
                </div>
                <div class="buy">
                    <button class="buy-btn">
                        Купить в 1 клик
                    </button>
                    <button class="tocart" onclick="addToCart(${prod.id})">
                        <img src="icons/cart/cart-white.svg" alt="">
                    </button>
                </div>
            </div>
        `
    }
})
products.forEach( prod => {
    if (prod.chapter == "news"){
        newsBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name} D${prod.id}
                </p>
                <div class="rating">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/review.svg" alt="review" class="review-icon">
                    <span> (17)</span>
                </div>
                <div class="price-rate">
                    <div class="price">
                        <p class="striked">
                            ${prod.exprice}
                        </p>
                        <p class="real">
                            ${prod.price}₽
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
                        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
                    </div>
                </div>
                <div class="buy">
                    <button class="buy-btn">
                        Купить в 1 клик
                    </button>
                    <button class="tocart" onclick="addToCart(${prod.id})">
                        <img src="icons/cart/cart-white.svg" alt="">
                    </button>
                </div>
            </div>
        `
    }
})
products.forEach( prod => {
    if (prod.chapter == "segways"){
        segwaysBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name} D${prod.id}
                </p>
                <div class="rating">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/review.svg" alt="review" class="review-icon">
                    <span> (17)</span>
                </div>
                <div class="price-rate">
                    <div class="price">
                        <p class="striked">
                            ${prod.exprice}
                        </p>
                        <p class="real">
                            ${prod.price}₽
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
                        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
                    </div>
                </div>
                <div class="buy">
                    <button class="buy-btn">
                        Купить в 1 клик
                    </button>
                    <button class="tocart" onclick="addToCart(${prod.id})">
                        <img src="icons/cart/cart-white.svg" alt="">
                    </button>
                </div>
            </div>
        `
    }
})
products.forEach( prod => {
    if (prod.chapter == "monowheels"){
        monowheelsBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name} D${prod.id}
                </p>
                <div class="rating">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/review.svg" alt="review" class="review-icon">
                    <span> (17)</span>
                </div>
                <div class="price-rate">
                    <div class="price">
                        <p class="striked">
                            ${prod.exprice}
                        </p>
                        <p class="real">
                            ${prod.price}₽
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
                        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
                    </div>
                </div>
                <div class="buy">
                    <button class="buy-btn">
                        Купить в 1 клик
                    </button>
                    <button class="tocart" onclick="addToCart(${prod.id})">
                        <img src="icons/cart/cart-white.svg" alt="">
                    </button>
                </div>
            </div>
        `
    }
})
products.forEach( prod => {
    if (prod.chapter == "cycles"){
        cyclesBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name} D${prod.id}
                </p>
                <div class="rating">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/star full.svg" alt="rate">
                    <img src="icons/review.svg" alt="review" class="review-icon">
                    <span> (17)</span>
                </div>
                <div class="price-rate">
                    <div class="price">
                        <p class="striked">
                            ${prod.exprice}
                        </p>
                        <p class="real">
                            ${prod.price}₽
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
                        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
                    </div>
                </div>
                <div class="buy">
                    <button class="buy-btn">
                        Купить в 1 клик
                    </button>
                    <button class="tocart" onclick="addToCart(${prod.id})">
                        <img src="icons/cart/cart-white.svg" alt="">
                    </button>
                </div>
            </div>
        `
    }
})


// <==== Header after scroll ====> 

let header = d.querySelector(".header")

document.addEventListener("scroll", () => {
    let fromTop = window.scrollY
    
    if (fromTop > 150){
        header.classList.add("fixed-top")
        header.classList.remove("hidden")
    }
    else if (fromTop < 150 && fromTop > 80) {
        header.classList.remove("fixed-top")
        header.classList.add("hidden")
    }
    else{
        header.classList.remove("hidden")
        header.classList.remove("fixed-top")
    }
})


// <==== Seach ====>

let searchBtn = d.getElementById("search-btn")
let searchPage = d.getElementById("searchpage")
let closeSearchBtn = d.getElementById("closesearch")

searchBtn.addEventListener("click", () => {
    searchPage.classList.add("show-search-page")
})
closeSearchBtn.addEventListener("click", () => {
    searchPage.classList.remove("show-search-page")
})


// <==== Sign and Register ====>

let signBtn = d.getElementById("sign")
let closeSign = d.getElementById("close-sign")
let popUp = d.querySelector(".popUp")

signBtn.addEventListener("click", () => {
    popUp.classList.add("show-popup")
})
closeSign.addEventListener("click", () => {
    popUp.classList.remove("show-popup")
})

let regPopUp = d.querySelector(".reg-popUp") 
let closeReg = d.getElementById("reg-close-sign")
let letRegister = d.getElementById("letregister")
let registered = d.getElementById("registered")

letRegister.addEventListener("click", () => {
    regPopUp.classList.add("show-popup")
    popUp.classList.remove("show-popup")
})
closeReg.addEventListener("click", () => {
    regPopUp.classList.remove("show-popup")
})
registered.addEventListener("click", () => {
    regPopUp.classList.remove("show-popup")
    popUp.classList.add("show-popup")
})


// <==== Passdowrd visibility ====>

let vsblty = d.querySelector(".vsblty")
let passInput = d.getElementById("password")

let vsbltyReg = d.querySelector(".reg-vsblty")
let passInputReg = d.getElementById("reg-password")

vsblty.addEventListener("click", () => {
    if (passInput.getAttribute("type") == "password"){
        passInput.setAttribute("type", "text")
        vsblty.classList.add("off")
    }
    else {
        passInput.setAttribute("type", "password")
        vsblty.classList.remove("off")
    }
    lockBg()
})
const lockBg = () => {
    if (passInput.value !== ""){
        passInput.classList.remove("bg-img")
    }
    else{   
        passInput.classList.add("bg-img")
    }
}
vsbltyReg.addEventListener("click", () => {
    if (passInputReg.getAttribute("type") == "password"){
        passInputReg.setAttribute("type", "text")
        vsbltyReg.classList.add("off")
    }
    else {
        passInputReg.setAttribute("type", "password")
        vsbltyReg.classList.remove("off")
    }
    lockBg()
})
const lockBgReg = () => {
    if (passInputReg.value !== ""){
        passInputReg.classList.remove("bg-img")
    }
    else{   
        passInputReg.classList.add("bg-img")
    }
}
window.addEventListener("click", () => {
    lockBg()
    lockBgReg()
})


// <===== Mini menu =====> 

let homeBtnMini = d.getElementById("home-mini")

let catalogBtnMini = d.getElementById("catalog-mini")
let searchBtnMini = d.getElementById("search-mini")
let moreBtnMini = d.getElementById("more-mini")

let catalogPageM = d.querySelector(".catalog-page")
let searchPageM = d.querySelector(".search-page-mini")
let morePageM = d.querySelector(".more-page")

let closeCatalogPageBtn = d.getElementById("close-catalog")
let closeSearchPageBtn = d.getElementById("close-search-mini")
let closeMorePageBtn = d.getElementById("close-more-mini")

catalogBtnMini.addEventListener("click", () => {
   
    catalogPageM.classList.toggle("show-page")
    morePageM.classList.remove("show-page")
    searchPageM.classList.remove("show-page")
})
closeCatalogPageBtn.addEventListener("click", () => {
    catalogPageM.classList.remove("show-page")
})

searchBtnMini.addEventListener("click", () => {
    
    searchPageM.classList.toggle("show-page")
    morePageM.classList.remove("show-page")
    catalogPageM.classList.remove("show-page")
})
closeSearchPageBtn.addEventListener("click", () => {
    searchPageM.classList.remove("show-page")
})

moreBtnMini.addEventListener("click", () => {
    
    morePageM.classList.toggle("show-page")
    catalogPageM.classList.remove("show-page")
    searchPageM.classList.remove("show-page")
})
closeMorePageBtn.addEventListener("click", () => {
    morePageM.classList.remove("show-page")
})


// <==== Buttons on products ====>

const addToCart = (id) => {
    let prod = products.find((a) => a.id === id)
    let check = cartArr.some((a) => a.id === prod.id)

    if (check){
        increaseProd(prod.id)
    }
    else{
        cartArr.push(prod)
    }    
    toLocal()
}

const toLocal = () => {
    localStorage.setItem("cartLocal", JSON.stringify(cartArr))
}

const increaseProd = (id) => {
    let prod = cartArr.find((a)=> a.id === id)
    if (prod.count < prod.stock){
        prod.count++
    }
    else{
        alert("Данной модели больше не осталось")
    }
}

let addToCartBtn = d.querySelectorAll(".tocart")
let likeIt = d.querySelectorAll(".likeit")

addToCartBtn.forEach( (a) => {
    a.addEventListener("click", () => {
        console.log(a);
        a.innerHTML = `
       <img src="icons/cart/cart=in card_added.svg" alt="added to cart">
       `
    })
})
  
likeIt.forEach( (e) => {
    e.addEventListener("click", () => {
      e.parentElement.innerHTML = `
        <img src="icons/like/like=like in card_ added.svg" alt="like" class="likeit" style="border-radius: 4px; cursor: pointer;">
        <img src="icons/compare/compare=compare in card.svg" alt="compare" style="border-radius: 4px; cursor: pointer">
      `  
    })
})

