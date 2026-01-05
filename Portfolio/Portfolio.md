# 개인 포트폴리오 웹사이트 제작 계획 (Portfolio Website Plan)

## 1. 개요 (Overview)
이 문서는 **"Bakery를 운영하며, 고양이를 기르고, Cat Blog를 운영하는 개인"**의 포트폴리오 웹사이트를 구축하기 위한 설계 및 개발 가이드입니다. 기존에 학습하고 실습했던 `layout`, `DOM_interaction`, `SPA` 폴더의 리소스와 코드를 통합하여 하나의 완성된 웹사이트를 구성합니다.

## 2. 사이트 구조 (Site Structure)

사이트는 상단 고정 네비게이션 바(Navigation Bar)를 통해 각 섹션으로 이동할 수 있는 **Single Page(단일 페이지)** 또는 **Multi Page(다중 페이지)** 형태로 구성할 수 있으나, 여기서는 사용자 경험을 고려하여 **Single Page Scroll** 방식과 **개별 프로젝트 상세 페이지**를 혼합한 구성을 제안합니다.

### 메인 네비게이션 메뉴 (Navigation Menu)
*   **Home**: 자기소개 및 포트폴리오 메인 (Landing Page)
*   **MyCats**: 집에서 기르는 고양이 소개 (DOM Interaction 활용)
*   **CatBlog**: 운영 중인 고양이 블로그 (SPA 활용)
*   **Bakery**: 운영 중인 베이커리 소개 (Layout 활용)
*   **About**: 개인 소개 및 연락처

---

## 3. 섹션별 상세 내용 및 통합 계획

### 3.1 공통 레이아웃 (Layout Template)
*   **Navigation Bar**: 페이지 최상단에 고정 (`position: sticky` or `fixed`).
    *   메뉴 아이템: `Home`, `MyCats`, `CatBlog`, `Bakery`, `About`
    *   스타일: `layout/css/style.css`의 스타일을 기반으로 전체 테마 통일.
*   **Footer**: 저작권 정보 및 SNS 링크 (`layout/index.html`의 footer 참고).

### 3.2 Home (메인 섹션)
*   **구성**: 인상적인 히어로 이미지와 간단한 환영 메시지.
*   **리소스**: `layout/images` 내의 이미지 활용 또는 개인 프로필 이미지.
*   **기능**: 각 섹션으로 이동하는 요약 버튼 제공.

### 3.3 MyCats (고양이 갤러리 - DOM Interaction)
*   **기능**: 버튼을 클릭하면 고양이 사진이 동적으로 변경되는 갤러리.
*   **통합 방법**: `@DOM_interaction/index.html`의 스크립트 로직을 가져와서 구현.
    *   **HTML**: 이미지 표시 영역 및 "Show Next Cat" 버튼 배치.
    *   **JS**: `document.createElement`, `appendChild`, `textContent` 등을 사용하여 이미지와 설명 텍스트 동적 제어.
*   **리소스**: `@DOM_interaction/images/` 폴더의 `cat7.png`, `cat8.png`, `cat9.png` 사용.

### 3.4 CatBlog (고양이 블로그 - SPA)
*   **기능**: 블로그 포스트 목록을 보여주고, 제목 클릭 시 내용이 펼쳐지는 아코디언 UI.
*   **통합 방법**: `@SPA/index.html`의 구조와 기능을 섹션으로 이식.
    *   **HTML**: `<article class="post-home">` 구조 그대로 사용.
    *   **CSS**: `.post-content { display: none; }` 및 `.active` 클래스 스타일 적용.
    *   **JS**: `title.addEventListener('click')` 이벤트 리스너를 통해 `.active` 클래스 토글 기능 구현.
*   **리소스**: `@SPA/images/` 폴더의 고양이 이미지들 활용.

### 3.5 Bakery (베이커리 소개 - Layout)
*   **기능**: 베이커리 메뉴 및 매장 정보 소개.
*   **통합 방법**: `@layout/index.html`의 `menu-section`과 `contact` 섹션 디자인 활용.
    *   **HTML**: `<table>`을 이용한 깔끔한 메뉴 리스트 구현.
    *   **CSS**: `css/style.css`의 테이블 스타일 및 폰트(`Dancing Script`) 적용.
*   **리소스**: `@layout/images/`의 빵 이미지(`bread1.jpg` 등) 및 파비콘 활용.

### 3.6 About (연락처 및 소개)
*   **구성**: 간단한 이력, 기술 스택, 연락처 폼.
*   **통합 방법**: `@layout/index.html`의 Footer 영역을 확장하여 상세 연락처 섹션으로 구성.

---

## 4. 기술 스택 및 파일 구조 (Tech Stack & File Structure)

### 4.1 기술 스택
*   **HTML5**: 시맨틱 태그 활용 (`<nav>`, `<section>`, `<article>`).
*   **CSS3**: Flexbox/Grid 레이아웃, 반응형 디자인 (`@media`), CSS Animation.
*   **JavaScript (ES6+)**: DOM 조작, 이벤트 핸들링.

### 4.2 예상 폴더 구조 (Proposed Directory Structure)
```
Portfolio/
├── index.html          # 전체 통합 메인 페이지
├── css/
│   └── style.css       # 전체 통합 스타일시트
├── js/
│   └── script.js       # 네비게이션, 갤러리, 아코디언 기능 통합 스크립트
└── images/             # 각 프로젝트에서 취합한 이미지 폴더
    ├── mycats/         # DOM_interaction 이미지
    ├── blog/           # SPA 이미지
    └── bakery/         # Layout 이미지
```

## 5. 개발 단계 (Development Steps)

1.  **폴더 및 파일 생성**: `Portfolio` 폴더 내 기본 구조 생성.
2.  **리소스 통합**: 각 폴더의 이미지를 `Portfolio/images`로 복사 및 정리.
3.  **HTML 골격 작성**: `nav`와 각 `section`을 포함한 `index.html` 작성.
4.  **스타일 통합**: 각 프로젝트의 CSS를 분석하여 충돌하지 않게 클래스명 조정(네임스페이스 활용 등) 후 `style.css` 병합.
5.  **스크립트 기능 구현**:
    *   MyCats 섹션의 이미지 슬라이더 기능 이식.
    *   CatBlog 섹션의 아코디언 기능 이식.
    *   네비게이션 스크롤 이동 기능 구현.
6.  **테스트 및 디버깅**: 전체 페이지 동작 확인 및 스타일 수정.
