export let showLoader = ()=>{
    const loader = document.createElement('div');
    loader.classList.add('loader','animate__animated','animate__fadeIn');
    loader.innerHTML=`
    <div class="d-flex vh-100 justify-content-center align-items-center fixed-top bg-light">
        <div class="spinner-border text-primary data-loader" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `;
    document.body.append(loader)
};
export let removeLoader = ()=>{
    const loader = document.querySelector('.loader');
    loader.classList.replace('animate__fadeIn','animate__fadeOut');
    loader.addEventListener('animationend',()=>loader.remove())

};

