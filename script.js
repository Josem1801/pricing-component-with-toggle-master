function changePrice(){
    const check = document.getElementById('change-price').checked;
    const priceBasic = document.getElementById('price-basic');
    const pricePro = document.getElementById('price-professional');
    const priceMaster = document.getElementById('price-master');
    if(check === false){
        priceBasic.innerHTML = "199.99";
        pricePro.innerHTML = "249.99";
        priceMaster.innerHTML= "399.99";   
    }else if(check === true) {
        priceBasic.innerHTML = "19.99";
        pricePro.innerHTML = "24.99";
        priceMaster.innerHTML= "39.99";
    }
}
