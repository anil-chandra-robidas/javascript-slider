const review = [
    {
        imgurl : 'images/1.jpg',
        name   : 'shahruk khan',
        position: 'actor',
        description: 'Shah Rukh Khan also known by the initialism SRK, is an Indian actor, film producer, and television personality who works in Hindi films.'
    },

    {
        imgurl : 'images/2.jpg',
        name   : 'juhi chawla',
        position: 'actor',
        description: 'Juhi Chawla (born 13 November 1967) is an Indian actress, film producer and entrepreneur. After winning the 1984 Miss India beauty pageant, she established '
    },

    {
        imgurl : 'images/3.jpg',
        name   : 'lara dutta',
        position: 'actor',
        description: 'Lara Dutta (born 16 April 1978) is an Indian actress, entrepreneur and the winner of the Miss Universe 2000 pageant. She was previously crowned as Miss'
    }

];


"use strict";

const arlen = ( review.length ) - 1;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

var  currentReview = 0;

const addData = () => {
    var ReviewImage = document.querySelector('.review-content img');
    ReviewImage.getAttribute('src');
    ReviewImage.setAttribute('src', `${review[currentReview].imgurl}`);
    
    document.querySelector('.review-content h4').textContent = review[currentReview].name;
    document.querySelector('.review-content h5').textContent = review[currentReview].position;
    document.querySelector('.review-content p').textContent = review[currentReview].description;

}

addData();

prevBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const id = e.target.id;
    changeContent(id);
});

nextBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const id = e.target.id;
    changeContent(id);
});

randomBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const id = e.target.id;
    changeContentRandom(id);
});

const changeContent = (id) => {

    if ( id < 0) {
        
        currentReview = (currentReview > 0) ? currentReview-1 : arlen;
        addData(currentReview);
    }
    else {

        currentReview = ( currentReview < arlen ) ? currentReview+1 : 0;
         addData(currentReview);
    }
}

const changeContentRandom = () => {
    
   currentReview = (currentReview > 0) ? Math.floor( Math.random() * arlen ) + 1 : Math.floor( Math.random() * arlen );

    addData(currentReview)
    
}


