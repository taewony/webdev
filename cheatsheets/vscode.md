## VS Code에서 웹 프로그래밍할 때 유용한 단축키 모음

VS Code는 강력한 에디터로, 단축키를 잘 활용하면 생산성을 크게 높일 수 있습니다. 아래에 웹 개발(HTML, CSS, JavaScript, React 등) 작업 시 자주 사용하는 단축키를 카테고리별로 정리했습니다.  
💡 **참고**: Windows/Linux 기준이며, macOS에서는 `Ctrl` → `Cmd`, `Alt` → `Option`으로 바꿔 사용하면 됩니다.

---

### 1. 기본 파일 및 편집 관련

| 기능 | 단축키 (Windows/Linux) | 설명 |
|------|------------------------|------|
| 새 파일 | `Ctrl + N` | 새 파일을 엽니다. |
| 파일 저장 | `Ctrl + S` | 현재 파일을 저장합니다. |
| 모두 저장 | `Ctrl + K S` | 열려 있는 모든 파일을 저장합니다. |
| 탭 닫기 | `Ctrl + W` | 현재 편집 중인 탭을 닫습니다. |
| 닫은 탭 다시 열기 | `Ctrl + Shift + T` | 실수로 닫은 탭을 복원합니다. |
| 설정 열기 | `Ctrl + ,` | 사용자 설정 UI를 엽니다. |
| 명령 팔레트 | `Ctrl + Shift + P` | 모든 VS Code 명령을 검색하고 실행합니다. |
| 빠른 파일 열기 | `Ctrl + P` | 파일 이름을 입력하여 빠르게 파일을 엽니다. |

---

### 2. 편집 및 포맷팅

| 기능 | 단축키 | 설명 |
|------|--------|------|
| 한 줄 주석 토글 | `Ctrl + /` | 현재 줄 또는 선택 영역을 주석/해제합니다. |
| 블록 주석 토글 | `Shift + Alt + A` | 여러 줄을 블록 주석 처리합니다. |
| 들여쓰기 / 내어쓰기 | `Ctrl + ]` / `Ctrl + [` | 선택한 줄을 들여쓰거나 내어씁니다. |
| 줄 이동 | `Alt + ↑` / `Alt + ↓` | 현재 줄을 위/아래로 이동합니다. |
| 줄 복사 | `Shift + Alt + ↑` / `Shift + Alt + ↓` | 현재 줄을 위/아래로 복사합니다. |
| 줄 삭제 | `Ctrl + Shift + K` | 현재 줄을 삭제합니다. |
| 아래에 줄 삽입 | `Ctrl + Enter` | 현재 줄 아래에 빈 줄을 추가합니다. |
| 위에 줄 삽입 | `Ctrl + Shift + Enter` | 현재 줄 위에 빈 줄을 추가합니다. |
| 문서 포맷 | `Shift + Alt + F` | 문서 전체를 자동 정렬합니다. |
| 선택 영역 포맷 | `Ctrl + K Ctrl + F` | 선택한 부분만 정렬합니다. |
| 단어 감싸기 토글 | `Alt + Z` | 긴 줄을 자동 줄바꿈합니다. |

---

### 3. 코드 탐색

| 기능 | 단축키 | 설명 |
|------|--------|------|
| 정의로 이동 | `F12` | 함수/변수의 정의 위치로 이동합니다. |
| 정의 미리보기 | `Alt + F12` | 정의를 작은 창으로 미리 봅니다. |
| 모든 참조 찾기 | `Shift + F12` | 심볼이 사용된 모든 위치를 표시합니다. |
| 파일 내 검색 | `Ctrl + F` | 현재 파일에서 텍스트를 찾습니다. |
| 파일 내 바꾸기 | `Ctrl + H` | 현재 파일에서 텍스트를 찾아 바꿉니다. |
| 폴더 내 검색 | `Ctrl + Shift + F` | 전체 프로젝트에서 텍스트를 검색합니다. |
| 폴더 내 바꾸기 | `Ctrl + Shift + H` | 전체 프로젝트에서 찾아 바꿉니다. |
| 다음 오류/경고로 이동 | `F8` | 진단 정보(오류/경고)를 순서대로 이동합니다. |
| 뒤로 / 앞으로 | `Alt + ←` / `Alt + →` | 이전/다음 커서 위치로 이동합니다. |

---

### 4. 다중 커서 및 선택

| 기능 | 단축키 | 설명 |
|------|--------|------|
| 다중 커서 추가 | `Alt + Click` | 클릭한 곳마다 커서를 생성합니다. |
| 위/아래에 커서 추가 | `Ctrl + Alt + ↑` / `Ctrl + Alt + ↓` | 여러 줄에 동시에 커서를 만듭니다. |
| 동일한 단어 선택 | `Ctrl + D` | 현재 단어와 일치하는 다음 항목을 선택합니다. |
| 모든 일치 항목 선택 | `Ctrl + Shift + L` | 현재 선택된 단어와 일치하는 모든 항목을 선택합니다. |
| 선택 영역 확장/축소 | `Shift + Alt + →` / `←` | 스마트하게 선택 영역을 넓히거나 좁힙니다. |
| 커서 실행 취소 | `Ctrl + U` | 마지막 커서 동작을 취소합니다. |

---

### 5. 통합 터미널 및 실행

| 기능 | 단축키 | 설명 |
|------|--------|------|
| 터미널 열기/닫기 | `` Ctrl + ` `` | 통합 터미널을 토글합니다. |
| 새 터미널 생성 | `Ctrl + Shift + ` ` | 새로운 터미널을 엽니다. |
| 터미널 간 이동 | `Ctrl + PageUp` / `PageDown` | 여러 터미널 탭을 전환합니다. |
| 터미널 클리어 | 터미널에서 `clear` 명령 또는 `Ctrl + L` | 터미널 화면을 지웁니다. |

---

### 6. 디버깅

| 기능 | 단축키 | 설명 |
|------|--------|------|
| 디버깅 시작 | `F5` | 디버그 모드를 시작합니다. |
| 디버깅 중지 | `Shift + F5` | 디버깅을 중단합니다. |
| 중단점 토글 | `F9` | 현재 줄에 중단점을 설정/해제합니다. |
| 한 단계씩 실행 | `F10` (Step Over) | 다음 줄로 이동(함수 내부로 들어가지 않음) |
| 함수 내부로 들어가기 | `F11` (Step Into) | 함수 내부로 들어가서 한 단계씩 실행 |
| 함수 빠져나오기 | `Shift + F11` (Step Out) | 현재 함수를 끝까지 실행하고 호출 지점으로 복귀 |
| 계속 실행 | `F5` (디버깅 중) | 다음 중단점까지 실행을 계속합니다. |

---

### 7. 웹 개발 특화 기능 & Emmet

VS Code는 HTML/CSS 작성 시 **Emmet**을 내장하고 있습니다.

| 기능 | 단축키 | 설명 |
|------|--------|------|
| Emmet 약어 확장 | `Tab` (또는 `Enter`) | 예: `div.container` 입력 후 `Tab` → `<div class="container"></div>` |
| HTML 태그 감싸기 | `Ctrl + Shift + P` → `Emmet: Wrap with Abbreviation` | 선택 영역을 Emmet 약어로 감쌉니다. |
| 일치하는 태그로 이동 | `Ctrl + Shift + ]` / `[` | HTML에서 여는/닫는 태그 쌍으로 이동합니다. |
| Markdown 미리보기 | `Ctrl + Shift + V` | 마크다운 파일을 미리 봅니다. |
| 사이드바 토글 | `Ctrl + B` | 탐색기 사이드바를 표시하거나 숨깁니다. |
| 편집기 분할 | `Ctrl + \` | 현재 편집기를 좌우로 분할합니다. |
| 편집기 그룹 간 이동 | `Ctrl + 1`, `Ctrl + 2` ... | 분할된 에디터 간에 포커스를 이동합니다. |

---

### 8. 추가 팁

- **단축키 커스터마이징**: `Ctrl + K Ctrl + S`를 누르면 단축키 설정 화면이 열리며, 자신에게 맞게 변경할 수 있습니다.
- **확장(Extension) 단축키**: 자주 사용하는 확장(예: Live Server, Prettier, ESLint)도 각자의 단축키를 제공하니 확인해보세요. (Live Server: `Alt + L, Alt + O` 등)
- **Zen 모드**: `Ctrl + K Z`를 누르면 방해 요소를 없애고 코딩에만 집중할 수 있는 전체화면 모드로 전환됩니다. (ESC 두 번으로 종료)

---

VS Code의 강력한 자동 완성 기능 중 핵심은 **Emmet**입니다. Emmet은 HTML, CSS를 매우 빠르게 작성할 수 있도록 도와주는 플러그인으로, VS Code에 기본 내장되어 있습니다.  
`!` + `Tab`으로 HTML5 기본 구조가 생성되고, `link` + `Tab`으로 CSS 링크 태그가 생성되는 것이 대표적인 예입니다. 아래에 Emmet과 IntelliSense를 활용한 자동 완성 가이드를 상세히 정리했습니다.

---

## 1. Emmet 기본 사용법

Emmet은 **약어(abbreviation)**를 입력한 후 `Tab` 키(또는 `Enter`)를 눌러 확장합니다.  
약어는 CSS 선택자와 유사한 문법을 사용합니다.

### HTML 예시

| 약어 | 결과 (Tab 키) | 설명 |
|------|---------------|------|
| `!` | HTML5 기본 문서 구조 | `<!DOCTYPE html>` 부터 `</html>`까지 전체 골격 생성 |
| `html:5` | `!`와 동일 | HTML5 문서 구조 |
| `link` | `<link rel="stylesheet" href="">` | CSS 파일 연결 태그 |
| `link:favicon` | `<link rel="icon" type="image/x-icon" href="">` | 파비콘 연결 |
| `script` | `<script src=""></script>` | 자바스크립트 파일 연결 |
| `meta:utf` | `<meta charset="UTF-8">` | 문자 인코딩 설정 |
| `meta:vp` | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | 뷰포트 설정 |
| `div` | `<div></div>` | div 태그 생성 |
| `div.container` | `<div class="container"></div>` | 클래스가 있는 div |
| `div#header` | `<div id="header"></div>` | 아이디가 있는 div |
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` | 3개의 li를 가진 ul |
| `a[href="https://"]` | `<a href="https://"></a>` | 속성 포함 태그 |
| `lorem` | "Lorem ipsum..." 샘플 텍스트 | 더미 텍스트 생성 (숫자와 함께 사용 가능: `lorem10` → 10단어) |

### CSS 예시

CSS에서도 Emmet을 사용할 수 있습니다. 속성의 약어를 입력하면 자동 완성됩니다.

| 약어 | 결과 |
|------|------|
`m10` | `margin: 10px;`
`p20-30` | `padding: 20px 30px;`
`w100p` | `width: 100%;`
`c#fff` | `color: #fff;`
`bgc` | `background-color: #fff;` (색상은 직접 선택)
`df` | `display: flex;`
`jc-c` | `justify-content: center;`
`ai-c` | `align-items: center;`
`fz16` | `font-size: 16px;`
`bdrs5` | `border-radius: 5px;`
`bxsh` | `box-shadow: ;`

> 💡 CSS 약어는 속성 이름의 앞 글자를 따거나, 자주 사용되는 축약형을 사용합니다. 모든 약어를 외울 필요 없이, 입력 중에 IntelliSense 목록이 나타나므로 선택하면 됩니다.

---

## 2. Emmet 확장 기능

- **Wrap with Abbreviation** : 이미 작성한 HTML 태그를 다른 태그로 감싸고 싶을 때 사용합니다.  
  - 방법: 감쌀 영역 선택 → `Ctrl + Shift + P` → `Emmet: Wrap with Abbreviation` 입력 → 원하는 약어(예: `div.wrapper`) 입력 → `Enter`
- **Go to Matching Pair** : `Ctrl + Shift + ]` 또는 `[`로 여는/닫는 태그 쌍으로 이동합니다.
- **Remove Tag** : 태그를 제거하고 내용만 남깁니다. (`Ctrl + Shift + P` → `Emmet: Remove Tag`)

---

## 3. IntelliSense (자동 완성)

Emmet 외에도 VS Code는 언어에 맞는 IntelliSense를 제공합니다.

- **HTML** : 태그 이름, 속성, 이벤트 핸들러 등을 추천합니다.
- **CSS** : 속성 이름, 값, 색상 미리보기, 단위 등을 추천합니다.
- **JavaScript/TypeScript** : 변수, 함수, 모듈 import 등을 자동 완성해줍니다.
- **React (JSX)** : JSX 문법에서도 Emmet을 사용할 수 있습니다. (설정 필요할 수 있음)

**JSX에서 Emmet 사용하기**  
VS Code는 기본적으로 JSX에서 Emmet을 활성화하지 않을 수 있습니다. 다음 설정을 추가하면 활성화됩니다.

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
}
```

이후 JSX 파일에서 `div.container` + `Tab` 하면 `<div className="container">`로 변환됩니다. (React에서는 `class` 대신 `className`을 사용하도록 자동 변환됨)

---

## 4. 사용자 정의 스니펫 (Snippets)

VS Code에서는 Emmet 외에도 자신만의 코드 조각을 만들 수 있습니다.

- **파일** → **기본 설정** → **사용자 스니펫 구성** (또는 `Ctrl + Shift + P` → `Snippets: Configure User Snippets`)
- 언어(예: html.json, javascript.json)를 선택하고 다음과 같이 정의합니다.

```json
"React Functional Component": {
    "prefix": "rfc",
    "body": [
        "import React from 'react';",
        "",
        "const ${1:ComponentName} = () => {",
        "  return (",
        "    <div>${2}</div>",
        "  );",
        "};",
        "",
        "export default ${1:ComponentName};"
    ],
    "description": "React Functional Component"
}
```

이제 `rfc` + `Tab`으로 함수형 컴포넌트 템플릿을 삽입할 수 있습니다.

---

## 5. 자주 사용하는 Emmet 약어 모음 (웹 개발)

| 목적 | 약어 | 결과 |
|------|------|------|
| HTML5 문서 골격 | `!` 또는 `html:5` | 전체 구조 |
| CSS 링크 | `link:css` | `<link rel="stylesheet" href="style.css">` |
| JS 링크 | `script:src` | `<script src=""></script>` |
| 이미지 | `img` | `<img src="" alt="">` |
| 입력 양식 | `form` | `<form action=""></form>` |
| 목록 | `ul>li.item$*3` | `<ul><li class="item1"></li><li class="item2"></li><li class="item3"></li></ul>` |
| 표 | `table>tr>td*3` | `<table><tr><td></td><td></td><td></td></tr></table>` |
| CSS 미디어쿼리 | `@media` | `@media () { }` |

---

## 6. 팁: 추천 확장 프로그램

- **Prettier** : 코드 포맷터. 저장 시 자동 정렬 가능.
- **Live Server** : 로컬 서버를 띄우고 실시간으로 HTML/CSS 변경사항을 확인.
- **ES7+ React/Redux/React-Native snippets** : React 관련 스니펫 모음.
- **Auto Rename Tag** : 여는 태그 수정 시 닫는 태그도 자동 변경.

---

Emmet과 IntelliSense를 잘 활용하면 HTML/CSS 작성 속도가 비약적으로 향상됩니다. 처음에는 몇 가지 약어만 익히고, 점차 자주 쓰는 패턴을 추가해보세요.  
필요할 때마다 명령 팔레트(`Ctrl+Shift+P`)에서 `Emmet:` 관련 명령을 검색해도 유용합니다.