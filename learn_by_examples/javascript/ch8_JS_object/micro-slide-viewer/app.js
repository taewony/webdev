// app.js

// 1. 상태 (State) 정의
let currentIndex = 0;

// 2. DOM 요소 선택
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');
const totalSlides = slides.length;

// 3. 뷰 업데이트 함수 (핵심 로직)
// 이 함수는 currentIndex 값에 따라 화면을 다시 그리는 역할만 합니다.
function updateView() {
    // 모든 슬라이드에서 active 클래스 제거
    slides.forEach(slide => slide.classList.remove('active'));
    
    // 현재 인덱스의 슬라이드에만 active 클래스 추가
    slides[currentIndex].classList.add('active');
    
    // 페이지 표시기 업데이트
    pageIndicator.textContent = `${currentIndex + 1} / ${totalSlides}`;
    
    // 버튼 상태(비활성화 여부) 업데이트
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
}

// 4. 이벤트 리스너 (사용자 행동 처리)
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

// 5. 초기 설정 (초기 뷰 렌더링)
updateView();