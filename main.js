import './style.scss'
import {removeLoader, showLoader} from "./js/loader.js";


let products = [];
showLoader();
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        products=json;
        products.forEach(function (product){
            let carts = document.querySelector('.product-row');
            let productDiv = document.createElement('div');
            productDiv.classList.add('col-12','col-md-6','col-lg-4');
            productDiv.innerHTML=`
            <div class="card product-card mx-auto" style="width: 18rem;">
                  <div class="card-body d-flex flex-column">
                      <div class="mb-3">
                         <img src="${product.image}" class="product-img" alt="...">
                      </div>
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <p class="card-text small">${product.description.substring(0,90)}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <p class="fw-bold mb-0">$<span>${product.price}</span></p>
                        <button href="#" class="btn btn-outline-primary add-cart-btn">
                            <i class="bi bi-cart-plus pe-none"></i> Add to cart
                        </button>
                    </div>
                  </div>
            </div>
            `;
            carts.append(productDiv)
        })
        removeLoader();
    });
// event delegation
let CartBtn = document.querySelector('.cart-btn');
let cartPosition = CartBtn.getBoundingClientRect();
let productRow = document.querySelector('.product-row');
productRow.addEventListener('click',e=>{
    if(e.target.classList.contains('add-cart-btn')){
        let productCard = e.target.closest('.product-card');
        let positionCard = productCard.getBoundingClientRect();
        let currentImg = productCard.querySelector('.product-img');
        let newImg = new Image();
        newImg.src = currentImg.src;
        newImg.style.position='fixed';
        newImg.style.transition='0.9s';
        newImg.style.top=positionCard.top + 'px';
        newImg.style.left=positionCard.left + 'px';
        newImg.style.height="30px";
        newImg.style.zIndex=2000;
        document.body.append(newImg);
        setTimeout(()=>{
            newImg.style.top=cartPosition.top + 'px';
            newImg.style.left=cartPosition.left + 'px';
            newImg.style.height='0px'
            newImg.style.transform='rotate(360deg)';
        },15);
        setTimeout(_=>{
            CartBtn.classList.add('animate__tada');
        },400);
        CartBtn.addEventListener('animationend',()=>CartBtn.classList.remove('animate__tada'))
    }
})

