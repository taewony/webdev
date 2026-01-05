# DOM Manipulation (DOM 조작) 학습 가이드

## 1. DOM이란?
**DOM (Document Object Model)**은 웹 페이지(HTML)를 자바스크립트가 이해하고 조작할 수 있는 **객체(Object)** 구조로 표현한 것입니다. 브라우저는 HTML 코드를 해석하여 DOM 트리를 만들고, 자바스크립트는 이 DOM 트리에 접근하여 페이지의 내용, 구조, 스타일을 동적으로 변경할 수 있습니다.

## 2. 핵심 기능 요약

### 2.1 요소 선택하기 (Selecting Elements)
HTML 요소를 조작하려면 먼저 해당 요소를 찾아야 합니다.
- **`document.getElementById('id')`**: 주어진 ID 속성을 가진 요소를 찾습니다. (가장 빠름)
- **`document.querySelector('css-selector')`**: CSS 선택자와 일치하는 **첫 번째** 요소를 찾습니다.
- **`document.querySelectorAll('css-selector')`**: CSS 선택자와 일치하는 **모든** 요소를 찾아 NodeList(배열과 유사)로 반환합니다.

### 2.2 요소 생성 및 추가 (Creating & Adding Nodes)
HTML에 처음부터 존재하지 않던 요소를 자바스크립트로 만들어 화면에 붙일 수 있습니다.
- **`document.createElement('tagName')`**: 새로운 HTML 요소를 메모리 상에 생성합니다. (예: `document.createElement('img')`)
- **`parentElement.appendChild(childElement)`**: 생성한 요소를 특정 부모 요소의 마지막 자식으로 DOM 트리에 추가하여 화면에 표시되게 합니다.

### 2.3 내용 변경하기 (Manipulating Content)
- **`element.textContent`**: 요소 내부의 **텍스트**만 가져오거나 변경합니다. HTML 태그를 넣어도 텍스트 그대로 출력됩니다. (보안상 안전)
- **`element.innerHTML`**: 요소 내부의 **HTML 구조** 전체를 가져오거나 변경합니다. 태그를 포함한 문자열을 넣으면 실제 HTML 요소로 렌더링됩니다.

### 2.4 속성 및 스타일 제어 (Attributes & Styles)
- **속성 변경**: `element.src`, `element.href`, `element.id` 등 속성에 직접 접근하여 값을 바꿀 수 있습니다.
- **스타일 변경**: `element.style.property`를 사용하여 인라인 스타일을 적용할 수 있습니다. (예: `element.style.marginTop = '10px'`)

### 2.5 이벤트 핸들링 (Event Handling)
사용자의 동작(클릭, 키보드 입력, 마우스 이동 등)을 감지하고 코드를 실행합니다.
- **`element.addEventListener('event_name', function)`**: 특정 이벤트가 발생했을 때 실행할 함수를 등록합니다.
  - 예: `button.addEventListener('click', () => { ... })`

---

## 3. 실습 코드 분석 (`index.html`)

작성된 `index.html`은 위의 개념들을 종합적으로 활용하고 있습니다.

```javascript
// 1. 요소 선택
const container = document.getElementById('cat-container');
const button = document.getElementById('cat-btn');

// 2. 이벤트 리스너 등록 (클릭 감지)
button.addEventListener('click', () => {
    let img = document.getElementById('cat-image');
    let info = document.getElementById('cat-info');

    // 3. 요소가 없을 때만 동적으로 생성 및 추가
    if (!img) {
        img = document.createElement('img'); // <img> 태그 생성
        img.id = 'cat-image';
        container.appendChild(img); // container 안에 추가

        info = document.createElement('div'); // <div> 태그 생성
        info.id = 'cat-info';
        container.appendChild(info);
    }

    // 4. 속성 변경 (이미지 소스 교체)
    img.src = `images/${images[currentIndex]}`;

    // 5. 내용 변경 (innerHTML vs textContent)
    // innerHTML: <strong> 태그를 적용하기 위해 사용
    info.innerHTML = `<strong>Current Image:</strong> <span id="filename"></span>`;
    
    // textContent: 파일명 텍스트를 안전하게 넣기 위해 사용
    const filenameSpan = document.getElementById('filename');
    filenameSpan.textContent = images[currentIndex];

    // 다음 인덱스로 이동 (순환)
    currentIndex = (currentIndex + 1) % images.length;
});
```
