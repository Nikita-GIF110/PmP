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
            console.log(modalBtns[i]);
            let parth = modalBtns[i].getAttribute('data-parth');
            console.log(parth);
            let modal = document.querySelectorAll(`[data-target="${parth}"]`);
            for(let i = 0; i < modal.length; i++){
                modal[i].classList.add('active');
            }
            e.preventDefault();
        }); 
    }
    for(let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function(e) {
            for(let i = 0; i < modalOverlay.length; i++){
                modalOverlay[i].classList.remove('active');
            }
            e.preventDefault();
        })
    }
    for(let i = 0; i < modalOverlay.length; i++) {
        modalOverlay[i].addEventListener('click', function(e) {
        if(e.target == modalOverlay[i]) {
            modalOverlay[i].classList.remove('active');        
        }
        })
    }
    
    const tabButton = document.querySelectorAll('.blockBtn');
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

    for(let i = 0; i < blockItem.length; i++){
        blockItem[i].addEventListener('click', function(e) {
            e.preventDefault();
            blockItem[i].classList.toggle('active')
        })
    }
    // for(let i = 0; i < blockItem.length; i++){
    //     blockItem[i].addEventListener('click', function(e) {
    //         // e.preventDefault();
    //         blockItem[i].classList.remove('active')
    //     })
    // }
    
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

    if(document.querySelector('.sliderCatalog')){
        new Swiper ('.sliderCatalog', {
            navigation: {
                prevEl: '.slider-btnPrev',
                nextEl: '.slider-btnNext'
            },
    
            slidesPerView: 4.5,
            spaceBetween: 40,
            slidesPerGroup: 1,
            freeMode: true,
            breakpoints: {
                300: {
                    slidesPerView: 'auto'
                },
                768: {
                    slidesPerView: 'auto'
                },
                1024: {
                    slidesPerView: 'auto'
                }
            }
        });
    }

    if(document.querySelector('.productCardSlider')){
        new Swiper ('.productCardSlider', {
            navigation: {
                prevEl: '.productCardSlider-btn-prev',
                nextEl: '.productCardSlider-btn-next'
            },
    
            slidesPerView: 1,
            loop: true,
            slidesPerGroup: 1,
            freeMode: false,
            breakpoints: {
                300: {
                    slidesPerView: 'auto'
                },
                768: {
                    slidesPerView: 'auto'
                },
                1024: {
                    slidesPerView: 'auto'
                }
            }
        });
    }

    if(document.querySelector('.afterSlider')){
        new Swiper ('.afterSlider', {
            navigation: {
                prevEl: '.afterSlider-btn-prev',
                nextEl: '.afterSlider-btn-next'
            },
            slidesPerGroup: 1,
            freeMode: false,
            breakpoints: {
                300: {
                    slidesPerView: 'auto'
                },
                992: {
                    slidesPerView: 'auto',
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    }
    
});