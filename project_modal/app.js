quotes = [
    {
        quote: 'Just keep swimming!',
        fromMovie: "Finding Nemo",
        imgUrl: './dory.jpeg'
    },
    {
        quote: 'Don’t worry, they’re fine. You can’t crush a soul here. That’s what life on Earth is for.',
        fromMovie: "Soul",
        imgUrl: './soul.jpeg'
    },
    {
        quote: 'You don’t lose hope, love. If you do, you lose everything.',
        fromMovie: "Beauty and the Beast",
        imgUrl: './potts.jpeg'
    },
    {
        quote: "Success doesn’t come for free. You have to do whatever it takes to seize your moment.",
        fromMovie: "Coco",
        imgUrl: "./coco.jpeg"
    }
]


const overay = document.querySelector('.modal-overay');
const modalBtn = document.querySelector('.modal-btn');

const modalImg = document.querySelector('.modal-img');
const modalQuote = document.querySelector('.modal-quote');
const modalMovie = document.querySelector('.modal-movie');

function openModal () {
    overay.classList.add('open-modal');
    shuffle();
}

function shuffle () {
    quoteNum = Math.floor(Math.random() * 4);
    modalImg.src = quotes[quoteNum].imgUrl;
    modalQuote.textContent = quotes[quoteNum].quote;
    modalMovie.textContent = `- ${quotes[quoteNum].fromMovie}`
}

const closeBtn = document.querySelector('.close-btn');

function closeModal () {
    overay.classList.remove('open-modal');
}

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);