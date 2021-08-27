document.addEventListener('DOMContentLoaded', function() {

    const stockInfoClose = document.querySelector('.stockInfo a');
    const stockInfo = document.querySelector('.stockInfo');
    
    stockInfoClose.addEventListener('click', function(e) {
        e.preventDefault();
        stockInfo.style.display = "none";
    })

    const burgerBtn = document.querySelector('.mMenu_btn');
    const mMenu = document.querySelector('.mMenu');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mMenu.classList.toggle('active');
        if(burgerBtn.classList.contains('active')){
            body.style.overflow = "hidden";
        }else{
            body.style.overflow = "auto";
        }
        
    });

    const modalBtns = document.querySelectorAll(".modalShow");
    const modalOverlay = document.querySelectorAll(".modalWindow");
    const modalClose = document.querySelectorAll(".modalClose");

    for(let i = 0; i < modalBtns.length; i++) {
        modalBtns[i].addEventListener('click', function(e) {
            let parth = modalBtns[i].getAttribute('data-parth');
            let modal = document.querySelectorAll(`[data-target="${parth}"]`);
            console.log(modal);
            for(let i = 0; i < modal.length; i++){
                modal[i].classList.add('active');
            }
            e.preventDefault();
        }); 
    }
    for(let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function() {
            for(let i = 0; i < modalOverlay.length; i++){
                modalOverlay[i].classList.remove('active');
            }
        })
    }
    for(let i = 0; i < modalOverlay.length; i++) {
        modalOverlay[i].addEventListener('click', function(e) {
        if(e.target == modalOverlay[i]) {
            modalOverlay[i].classList.remove('active');        
        }
        })
    }
    
    const tabButton = document.querySelectorAll('.personalArea_content_block_item_button');
    tabButton.forEach(function(item){
        let currentBtn = item;
        currentBtn.addEventListener('click', function(){
            let currentBtnAtrr = currentBtn.getAttribute('data-parth');
            let block = document.querySelector(`[data-target="${currentBtnAtrr}"]`);
            document.querySelectorAll('[data-target]').forEach(function(el){
                el.classList.remove('active');
            })         
            block.classList.add('active');
        })
    })

    const btnShow = document.querySelectorAll('.btnShow');
    const btnHidde = document.querySelectorAll('.btnHidde');
    const blockItem = document.querySelectorAll('.personalArea_content_orders_item');

    for(let i = 0; i < btnShow.length; i++){
        btnShow[i].addEventListener('click', function(e) {
            e.preventDefault();
            blockItem[i].classList.add('active')
        })
    }
    for(let i = 0; i < btnHidde.length; i++){
        btnHidde[i].addEventListener('click', function(e) {
            e.preventDefault();
            blockItem[i].classList.remove('active')
        })
    }
    
    const inNum = document.querySelector('.in-num');
    const minus = document.querySelector('.minus');
    const plus = document.querySelector('.plus'); 

    if(inNum){
        minus.addEventListener('click', function() {
            inNum.value--;
            if(inNum.value <= 0){
                inNum.value = 0; 
            }
        });
        plus.addEventListener('click', function() {
            inNum.value++;
        });
    };

    
});