let CartBtn = document.querySelector('.cart-btn');
let cartPosition = CartBtn.getBoundingClientRect();
export const addToCart = (e)=>{
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