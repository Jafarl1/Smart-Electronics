
let d = document

let acc = d.getElementById("account")
let menu = d.getElementById("menu")
let searchBtnAcc = d.getElementById("search-btn-acc")
let searchPageAcc = d.getElementById("searchpage-acc")
let closeSearchBtnAcc = d.getElementById("closesearch-acc")



acc.addEventListener("click", () => {
    menu.classList.toggle("open-menu")
})
searchBtnAcc.addEventListener("click", () => {
    console.log(505);
    searchPageAcc.classList.add("show-search-page")
})
closeSearchBtnAcc.addEventListener("click", () => {
    searchPageAcc.classList.remove("show-search-page")
})


let products = [
    {
        id: 1,
        image: "images/image 18.png",
        name: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        exprice: "5300 ₽",
        price: "4890 ₽",
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
        price: "4990 ₽",
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
        price: "13960 ₽",
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
        price: "5999 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "13960 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "13960 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "13960 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "4990 ₽",
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
        price: "13960 ₽",
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
        price: "4990 ₽",
        class: 4,
        rating: 5,
        count: 1,
        stock: 5,
        chapter: "cycles"
    }
]
let cartArr = []
let product = d.querySelectorAll(".product")

let hitsBody = d.querySelector(".hits-block-body")
let newsBody = d.querySelector(".news-block-body")
let segwaysBody = d.querySelector(".segways-block-body")
let monowheelsBody = d.querySelector(".monowheels-block-body")
let cyclesBody = d.querySelector(".cycles-block-body")


products.forEach( prod => {
    if (prod.chapter == "hits"){
        hitsBody.innerHTML += `
            <div class="product product-${prod.class}" id="${prod.id}">
                <img src="images/image 18.png" alt="product">
                <span class="gray">
                    Сигвеи
                </span>
                <p>
                    ${prod.name}
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
                            ${prod.price}
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" style="border-radius: 4px; cursor: pointer;">
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
                    ${prod.name}
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
                            ${prod.price}
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" style="border-radius: 4px; cursor: pointer;">
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
                    ${prod.name}
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
                            ${prod.price}
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" style="border-radius: 4px; cursor: pointer;">
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
                    ${prod.name}
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
                            ${prod.price}
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" style="border-radius: 4px; cursor: pointer;">
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
                    ${prod.name}
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
                            ${prod.price}
                        </p>
                        <div class="discount">
                            <div class="percent">
                                <span>20%</span>
                            </div>
                            <span> — 1 000 ₽ </span>
                        </div>
                    </div>
                    <div class="rate">
                        <img src="icons/like/like=like in card.svg" alt="like" style="border-radius: 4px; cursor: pointer;">
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
