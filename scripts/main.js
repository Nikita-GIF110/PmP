document.addEventListener('DOMContentLoaded', function() {

    const burgerBtn = document.querySelector('.mMenu_btn');
    const mMenu = document.querySelector('.mMenu');

    burgerBtn.addEventListener('click', function() {
        mMenu.classList.toggle('active');
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
    
});