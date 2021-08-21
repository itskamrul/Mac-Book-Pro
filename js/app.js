// memory price button
const memoryBtn8 = document.getElementById('memory-8');
const memoryBtn16 = document.getElementById('memory-16');
// storage price button
const storageBtn256 = document.getElementById('storage-256')
const storageBtn512 = document.getElementById('storage-512')
const storageBtn1Tb = document.getElementById('storage-1tb')
// delivery charge button
const freeDelivery = document.getElementById('free');
const expressDelivery = document.getElementById('express');

const regularPrice = document.getElementById('regular-price');
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const promoPrice = document.getElementById('promo-price');


//price calculate
function priceTotal(){
    const regularPriceAmount = parseInt(regularPrice.innerText);
    const extraMemoryAmount = parseInt(extraMemory.innerText);
    const extraStorageAmount = parseInt(extraStorage.innerText);
    const deliveryChargeAmount = parseInt(deliveryCharge.innerText);
    const totalPriceAmount = regularPriceAmount + extraMemoryAmount + extraStorageAmount + deliveryChargeAmount;
    return totalPriceAmount
};

//update price
function updatePrice(){
    const totalCalculate = priceTotal();
    totalPrice.innerText = totalCalculate;
    promoPrice.innerText = totalCalculate;
}
// memory button event
memoryBtn8.addEventListener('click', function (){
    extraMemory.innerText = 0;
    updatePrice();
});

memoryBtn16.addEventListener('click', function (){
    extraMemory.innerText = 180;
    updatePrice();
});

// storage button event
storageBtn256.addEventListener('click', function (){
    extraStorage.innerText = 0;
    updatePrice();
});

storageBtn512.addEventListener('click', function (){
    extraStorage.innerText = 100;
    updatePrice();
});

storageBtn1Tb.addEventListener('click', function (){
    extraStorage.innerText = 180;
    updatePrice();
});

// delivery charge button event
freeDelivery.addEventListener('click', function (){
    deliveryCharge.innerText = 0;
    updatePrice();
});

expressDelivery.addEventListener('click', function (){
    deliveryCharge.innerText = 20;
    updatePrice();
});

// promo code handler
document.getElementById('promo-btn').addEventListener('click', function (){
    const getTotalPrice = priceTotal();
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    if (promoInputValue == 'stevekaku'){
        const promoDiscount = getTotalPrice / 5;
        const discount = getTotalPrice - promoDiscount;
        promoPrice.innerText = discount;

    }
    else{
        promoPrice.innerText = getTotalPrice
    };
    promoInput.value = '';
});