import {excerpt} from "./utlities.js";

export const createProduct = ({title,image,description,price})=>{
    let productDiv = document.createElement('div');
    productDiv.classList.add('col-12','col-md-6','col-lg-4');
    productDiv.innerHTML=`
            <div class="card product-card mx-auto" style="width: 18rem;">
                  <div class="card-body d-flex flex-column">
                      <div class="mb-3">
                         <img src="${image}" class="product-img" alt="...">
                      </div>
                    <h5 class="card-title text-truncate">${title}</h5>
                    <p class="card-text small">${excerpt(description)}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <p class="fw-bold mb-0">$<span>${price}</span></p>
                        <button href="#" class="btn btn-outline-primary add-cart-btn">
                            <i class="bi bi-cart-plus pe-none"></i> Add to cart
                        </button>
                    </div>
                  </div>
            </div>
            `;

    return productDiv
}