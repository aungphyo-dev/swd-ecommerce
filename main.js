import './style.scss'
import {removeLoader, showLoader} from "./js/loader.js";
import {createProduct} from "./js/product.js";
import {addToCart} from "./cart.js";


let products = [];
showLoader();
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        products=json;
        products.forEach(function (product){
            let carts = document.querySelector('.product-row');
            carts.append(createProduct(product))
        })
        removeLoader();
    });
// event delegation
let productRow = document.querySelector('.product-row');
productRow.addEventListener('click',e=>{
    if(e.target.classList.contains('add-cart-btn')) {
        addToCart(e)
    }
})

