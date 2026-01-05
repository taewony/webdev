# SPA (Single Page Application) 구성 및 동적 콘텐츠 제어 학습 가이드

## 1. SPA 개요
**SPA (Single Page Application)**는 하나의 HTML 페이지로 구성된 웹 애플리케이션을 의미합니다. 사용자가 페이지를 이동할 때마다 서버로부터 새로운 페이지를 받아오는 대신, 자바스크립트를 이용해 필요한 부분만 동적으로 업데이트하여 더 빠르고 부드러운 사용자 경험을 제공합니다.

이 프로젝트는 간단한 블로그 형태의 SPA 예시로, 게시글 목록을 보여주고 특정 동작에 따라 내용을 펼쳐 보여주는 기능을 포함하고 있습니다.

## 2. 프로젝트 파일 구성

*   **`index.html`**: 메인 페이지 구조를 담고 있는 HTML 파일입니다.
*   **`css/style.css`**: 페이지의 레이아웃과 디자인을 정의하는 CSS 파일입니다.
*   **`images/`**: 고양이 이미지, 파비콘, 배경 이미지 등 리소스 폴더입니다.
*   **`single.html`**: (참고용) 개별 게시글의 상세 페이지 구조 예시입니다.

## 3. 동적 콘텐츠 제어 (보이기/숨기기) 구현 원리

이 프로젝트의 핵심 기능은 **"게시글 제목을 클릭하면 내용이 펼쳐지는 아코디언(Accordion) UI"**입니다. 이를 구현하기 위해 HTML 구조 변경, CSS 클래스 활용, 자바스크립트 이벤트 처리가 유기적으로 연결됩니다.

### 3.1 HTML 구조 변경 (`index.html`)
각 게시글(`article.post-home`) 내부에서 제목(`h2`)을 제외한 나머지 상세 내용(이미지, 설명, 버튼)을 하나의 그룹으로 묶어 제어하기 쉽게 만듭니다.

```html
<article class="post-home">
    <div class="post-title">
        <h2><a href="#">게시글 제목</a></h2>
    </div>
    <!-- 상세 내용을 감싸는 wrapper div 추가 -->
    <div class="post-content">
        <div class="post-thumb">...</div>
        <p class="post-desc">...</p>
        <p class="btn">...</p>
    </div>
</article>
```

### 3.2 CSS 스타일링 (`css/style.css` & `index.html` 내 `<style>`)
기본 상태에서는 내용을 숨기고, 특정 클래스(`active`)가 추가되었을 때만 내용을 보여주도록 설정합니다.

```css
/* 기본 상태: 화면에서 숨김 */
.post-content {
    display: none;
}

/* active 클래스가 추가된 상태: 화면에 표시 */
.post-content.active {
    display: block;
    animation: fadeIn 0.5s; /* 부드러운 등장 효과 */
}

/* 등장 애니메이션 정의 */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* 클릭 가능하다는 것을 시각적으로 표현 */
.post-title h2 a {
    cursor: pointer;
}
```

### 3.3 자바스크립트 이벤트 처리 (`index.html` 내 `<script>`)
사용자가 제목을 클릭했을 때의 이벤트를 감지하고, 해당 게시글의 내용 영역에 `active` 클래스를 토글(추가/제거)합니다.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // 1. 모든 게시글 제목 링크 선택
    const titles = document.querySelectorAll('.post-title a');

    titles.forEach(title => {
        // 2. 각 제목에 클릭 이벤트 리스너 등록
        title.addEventListener('click', (e) => {
            e.preventDefault(); // 링크 이동 기본 동작 방지
            
            // 3. 클릭된 제목이 속한 부모 article 찾기 (closest 메서드 활용)
            const article = title.closest('.post-home');
            
            // 4. 해당 article 내부의 내용 영역(post-content) 찾기
            const content = article.querySelector('.post-content');
            
            // 5. active 클래스 토글 (있으면 제거, 없으면 추가)
            content.classList.toggle('active');
        });
    });
});
```

## 4. 학습 포인트
1.  **DOM 탐색**: `closest()`를 사용하여 자식 요소에서 부모 요소를 찾고, `querySelector()`로 다시 그 부모의 특정 자식을 찾는 방법을 익힙니다.
2.  **이벤트 처리**: `addEventListener`와 `e.preventDefault()`를 통해 사용자 인터랙션을 제어하는 방법을 배웁니다.
3.  **CSS 클래스 조작**: `classList.toggle()`을 사용하여 스타일을 동적으로 변경하여 UI 상태를 관리하는 패턴을 이해합니다.
