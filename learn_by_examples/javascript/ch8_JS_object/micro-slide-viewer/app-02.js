// app.js

// 1. DOM 요소 선택
const slideContainer = document.getElementById('slideContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

// 상태 변수
let currentIndex = 0;
let totalSlides = presentationData.length;
// 동적으로 생성된 슬라이드 DOM 요소들을 담을 배열
let slideElements = []; 

// 2. 렌더링 함수 (데이터 -> DOM 생성)
function renderDeck() {
    presentationData.forEach((data) => {
        // <section class="slide"> 생성
        const slideEl = document.createElement('section');
        slideEl.classList.add('slide');

        // 제목 <h1> 생성
        const titleEl = document.createElement('h1');
        titleEl.textContent = data.title;
        slideEl.appendChild(titleEl);

        // type에 따른 본문 내용 분기 처리
        if (data.type === 'text') {
            const contentEl = document.createElement('p');
            contentEl.textContent = data.content;
            slideEl.appendChild(contentEl);
        } else if (data.type === 'list') {
            const ulEl = document.createElement('ul');
            // CSS에서 ul에 대한 스타일링(예: text-align: left)이 필요할 수 있습니다.
            data.items.forEach(itemText => {
                const liEl = document.createElement('li');
                liEl.textContent = itemText;
                ulEl.appendChild(liEl);
            });
            slideEl.appendChild(ulEl);
        }

        // 완성된 슬라이드를 컨테이너에 추가하고, 관리용 배열에도 저장
        slideContainer.appendChild(slideEl);
        slideElements.push(slideEl);
    });
}

// 3. 뷰 업데이트 함수 (상태 전환) - 이전과 거의 동일
function updateView() {
    slideElements.forEach(slide => slide.classList.remove('active'));
    slideElements[currentIndex].classList.add('active');
    
    pageIndicator.textContent = `${currentIndex + 1} / ${totalSlides}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
}

// 4. 이벤트 리스너
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateView();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateView();
    }
});

// 5. 애플리케이션 초기화
renderDeck(); // 1. 데이터를 바탕으로 DOM 요소들을 생성하여 화면에 붙임
updateView(); // 2. 첫 번째 슬라이드를 활성화하고 버튼 상태 초기화