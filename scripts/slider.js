/*
document.addEventListener('DOMContentLoaded', function() {

    const sliderTrack = document.querySelectorAll('.slider-track');
    const sliderTrackWidth = document.querySelector('.slider-track').clientWidth;
    const btnPrev = document.querySelectorAll('.slider-btnPrev');
    const btnNext = document.querySelectorAll('.slider-btnNext');
    let offset = 0;
    
    for(let i = 0; i < btnNext.length; i++){
        btnNext[i].addEventListener('click', function(e) {
            e.preventDefault();

            let parth = btnNext[i].getAttribute('data-parth');
            let sliderItem = document.querySelector(`[data-target="${parth}"]`);
            offset += sliderItem.clientWidth;
            if(offset > sliderTrackWidth - sliderItem.clientWidth){
                offset = 0
            }
            sliderTrack[i].style.left = -offset + 'px';
        })
    }

    for(let i = 0; i < btnNext.length; i++){
        btnPrev[i].addEventListener('click', function(e) {
            e.preventDefault();

            let parth = btnPrev[i].getAttribute('data-parth');
            let sliderItem = document.querySelector(`[data-target="${parth}"]`);
            offset -= sliderItem.clientWidth;
            if(offset < 0){
                offset = 0
            }
            sliderTrack[i].style.left = -offset + 'px';
        })
    }
    
})
*/