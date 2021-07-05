
// Load Project

const projects = [
    {
        title: 'Google Clone',
        content: 'HTML/CSS만 사용해서 구글 메인 화면 구현',
        imgUrl: './img/google_clone.png',
        url: 'https://codepen.io/EddySong/pen/MWpByYx'
    },
    {
        title: 'Momentum Clone',
        content: '랜덤 배경화면, 현재 시간, 투두리스트, 랜덤 인용구, 날씨 보여주기',
        imgUrl: './img/momentum_clone.png',
        url: './project_momentum/index.html'
    },
    {
        title: 'KY Player',
        content: '키보드로 사용하는 이경영 성대모사 재생기',
        imgUrl: './img/ky-player.png',
        url: './project_player/index.html'
    },
    {
        title: 'Flex Panel',
        content: 'Flexbox를 사용한 귀멸의칼날 캐릭터 소개 페이지',
        imgUrl: './img/panel.png',
        url: './project_panel/index.html'
    },
    {
        title: 'Photo Carousel',
        content: '화살표와 닷으로 이미지 돌려보기',
        imgUrl: './img/carousel.png',
        url: './project_carousel/index.html'
    },
    {
        title: 'Mood Calendar',
        content: '현재 날짜를 표시하고 그날 기분을 기록할 수 있는 캘린더',
        imgUrl: './img/mood_calendar.png',
        url: './project_calendar/index.html'
    },
    {
        title: 'Search Bar',
        content: '도시 이름을 검색하면 결과를 미리 보여주는 서치 바',
        imgUrl: './img/search_bar.png',
        url: './project_search/index.html'
    },
    {
        title: 'Review Carousel',
        content: '리뷰를 돌려볼 수 있는 캐러셀',
        imgUrl: './img/review_carousel.png',
        url: './project_review/index.html'
    },
    {
        title: 'Disney Quote Modal',
        content: '디즈니 명대사를 모여주는 모달창',
        imgUrl: './img/disney_modal.png',
        url: './project_modal/index.html'
    },
]

let project = document.querySelector('section.row');

function createProject (item) {
    let card = document.createElement("div");
    card.classList.add('col-md-6', 'col-xl-4', 'card');

    let projectLink = document.createElement('a');
    projectLink.href = item.url;

    

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = item.imgUrl;
    img.alt = item.title;

    projectLink.appendChild(img);
    card.appendChild(projectLink);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');

    let title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = item.title;

    let content = document.createElement('p');
    content.classList.add('card-text');
    content.textContent = item.content;

    cardBody.appendChild(title);
    cardBody.appendChild(content);
    card.appendChild(cardBody);

    project.appendChild(card);
}

document.addEventListener('DOMContentLoaded', createAllProject);

function createAllProject () {
    projects.map(item => createProject(item));
}
