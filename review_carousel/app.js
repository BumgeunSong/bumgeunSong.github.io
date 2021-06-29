const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// select items
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const img = document.querySelector('#person-img');
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

let currentItem = 0;

function goNext () {
    if (currentItem < reviews.length - 1) {
        currentItem += 1;
    } else {
        currentItem = 0;
    }
    console.log(currentItem);
    changeContent(currentItem);
}

function goPrev () {
    if (currentItem > 0) {
        currentItem -= 1;
    } else {
        currentItem = reviews.length - 1;
    }
    console.log(currentItem);
    changeContent(currentItem);
}

function goRandom () {
    currentItem = Math.floor(Math.random() * 4)
    changeContent(currentItem);
}

function changeContent (currentItem) {
    img.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
}

window.addEventListener("DOMContentLoaded", function() {
    changeContent(currentItem);
})
//event argument를 넘기고 싶지 않다면, function을 열어서 바로 함수를 실행.

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
randomBtn.addEventListener('click', goRandom);