## Layout과 Base의 역할 및 개발 의식 흐름에 따른 DSL 적용 가이드

### 1. `Layout {}`과 `Base{}`의 의미와 역할

**`Layout` 블록**

- **역할**: 컴포넌트의 **구조적 속성**(박스 모델, 위치, 크기, 여백, 정렬, 배치)을 정의합니다.
- **적용 대상**: 컴포넌트의 루트 요소(예: `.card`, `.alert`)
- **포함 속성 예시**: `width`, `maxWidth`, `padding`, `margin`, `display`, `position`, `border`, `boxShadow`, `transition` 등 시각적 테마보다는 **컴포넌트의 뼈대**를 결정하는 값들.
- **특징**: 변형(Variant)에서 레이아웃까지 변경할 필요가 없다면 `Layout`은 변형에 영향받지 않는 **공통 구조**를 유지합니다.

**`Base` 블록**

- **역할**: 컴포넌트의 **시각적 테마**(색상, 폰트, 배경, 테두리 스타일)를 정의합니다.
- **적용 대상**: 루트 요소 및 내부 요소들의 기본 스타일.
- **포함 속성 예시**: `color`, `backgroundColor`, `borderColor`, `fontFamily`, `fontWeight` 등 테마와 관련된 속성.
- **특징**: 변형에서 `Base`의 속성만 오버라이드하여 테마를 쉽게 전환할 수 있습니다.

**왜 분리하는가?**

- **구조와 테마의 분리** : 레이아웃은 컴포넌트의 동작과 배치에 관여하고, 테마는 시각적 변형을 담당합니다.
- **유지보수성** : 변형을 추가할 때 `Base` 속성만 재정의하면 되므로 중복 코드가 줄어듭니다.
- **일관성** : 모든 컴포넌트가 동일한 패턴을 따르면 코드 생성기가 일관된 CSS를 생성할 수 있습니다.

> 예: Alert 컴포넌트에서 `Base`는 기본 배경/테두리/글자색을 정의하고, `success` 변형에서는 이 값들만 변경합니다. 레이아웃(padding, borderRadius 등)은 `Layout`에 고정되어 변형에서도 동일하게 유지됩니다.

---

### 2. 개발자 의식 흐름에 따른 DSL 적용 단계

개발자는 보통 **“HTML 구조 → 컴포넌트 뼈대 → 세부 스타일 → 변형”** 순서로 사고합니다. 아래는 이 흐름을 DSL에 매핑한 가이드입니다.

#### **STEP 1: HTML 구조 구상**

컴포넌트를 구성할 HTML 태그와 클래스명을 먼저 결정합니다.  
예를 들어, Card 컴포넌트는 다음과 같은 구조를 가집니다:

```html
<div class="card">
  <h2>제목</h2>
  <p>내용</p>
  <a class="button">버튼</a>
</div>
```

이 구조가 DSL의 `Elements` 블록에서 정의될 내부 요소들입니다.

#### **STEP 2: 컴포넌트 루트의 레이아웃 결정 (`Layout`)**

루트 요소(`.card`)의 박스 모델과 배치 속성을 먼저 설정합니다.

- 이 컴포넌트는 너비를 얼마나 가질까? (`maxWidth: 320px`)
- 안쪽 여백은? (`padding: 1.5rem`)
- 그림자는? (`boxShadow: ...`)
- hover 효과는? (`&:hover { transform: ... }`)

```css
Layout {
  maxWidth: 320px
  padding: 1.5rem
  margin: 1rem 0
  background: white
  borderRadius: 12px
  boxShadow: 0 4px 10px rgba(0,0,0,0.1)
  transition: transform 0.2s

  &:hover {
    transform: translateY(-4px);
  }
}
```

#### **STEP 3: 내부 요소들의 시각적 스타일 정의 (`Elements` + 내부 `Base`)**

이제 내부 요소들(`h2`, `p`, `.button`)에 스타일을 적용합니다.

- 각 요소의 기본 폰트 크기, 색상, 여백 등을 지정합니다.
- 이 단계에서는 테마와 관련된 속성(색상)도 포함하되, 변형에서 쉽게 바꿀 수 있도록 `color` 같은 값은 나중에 `Base`로 분리할 수도 있습니다.

```css
Elements {
  Title h2 {
    fontSize: 1.5rem
    margin: 0 0 0.75rem 0
    color: #1e3c5c   // 테마 색상 (Base로 옮길 수 있음)
    fontWeight: 600
  }

  Body p {
    fontSize: 1rem
    lineHeight: 1.5
    color: #2d3e50   // 테마 색상
    marginBottom: 1.2rem
  }

  Button ".button" {
    display: inline-block
    padding: 0.5rem 1rem
    borderRadius: 6px
    fontWeight: 500
    background: #3498db   // 테마 색상
    color: white
    // ...
  }
}
```

#### **STEP 4: 테마를 `Base` 블록으로 추출 (선택사항)**

만약 컴포넌트에 여러 변형이 필요하다면, 테마 관련 속성을 `Base` 블록으로 모읍니다.  
Alert 컴포넌트의 예:

```css
Component Alert {
  Root ".alert"

  Layout {                // 공통 구조
    padding: 1rem
    borderRadius: 8px
    margin: 1rem 0
    fontWeight: 500
  }

  Base {                  // 기본 테마
    background: #f8d7da
    border: 1px solid #f5c6cb
    color: #721c24
  }

  Variant success {
    background: #d4edda   // Base 속성 오버라이드
    borderColor: #c3e6cb
    color: #155724
  }
}
```

#### **STEP 5: 변형(Variant) 추가**

컴포넌트의 특별한 상태(예: 강조, 성공, 경고)가 필요하면 `Variant` 블록을 추가합니다.

- 변형에서는 `Layout`은 그대로 두고, `Base`의 속성이나 일부 내부 요소의 스타일을 재정의합니다.
- Card의 `featured` 변형에서는 루트에 추가 클래스(`.featured`)를 적용하고, 왼쪽 테두리와 제목 색상을 변경합니다.

```css
Variant featured {
  borderLeft: 6px solid #e67e22   // 루트 스타일 추가
  background: #fff9f2             // 루트 배경 변경
  Title.color: #e67e22             // 내부 Title 요소 색상 변경
}
```

---

### 3. DSL 적용 시 주의사항 및 팁

- **일관성 유지**: 모든 컴포넌트가 동일한 블록 구조(`Root`, `Layout`, `Base`, `Elements`, `Variant`)를 따르도록 합니다.
- **`Layout` vs `Base`**: `Layout`에는 구조(크기, 여백, 정렬)를, `Base`에는 테마(색상, 폰트)를 할당하는 것이 바람직합니다. 하지만 작은 컴포넌트에서는 `Base` 없이 `Layout`에 모두 넣을 수도 있습니다. 중요한 것은 **팀 내 합의된 규칙**입니다.
- **CSS 생성 원리**: DSL은 실제 CSS로 컴파일될 때 각 선택자에 컴포넌트 루트 클래스를 접두어로 붙여 범위를 제한합니다.  
  예: `Title h2` → `.card h2`, `Title.color` 오버라이드 → `.card.featured h2 { color: ... }`

이러한 DSL은 개발자의 자연스러운 사고 과정(구조 → 레이아웃 → 세부 스타일 → 변형)을 반영하며, 동시에 컴포넌트 기반 CSS의 핵심 원칙(범위 제한, 테마 분리)을 코드로 명확히 표현할 수 있게 도와줍니다.

```
/**

- 컴포넌트 기반 CSS DSL (간결 형식)
- 일관성: 모든 컴포넌트는 Root, Layout, Elements, Variant 블록으로 구성
  */

Global {
    body {
        fontFamily: sans-serif
        background: #f5f5f5
        padding: 2rem
    }
}

Component Card {
    Root ".card"

    Layout {
    maxWidth: 320px
    padding: 1.5rem
    margin: 1rem 0
    background: white
    borderRadius: 12px
    boxShadow: 0 4px 10px rgba(0,0,0,0.1)
    transition: transform 0.2s

        &:hover {
        transform: translateY(-4px)
        }

    }

    Elements {
        Title h2 {
        fontSize: 1.5rem
        margin: 0 0 0.75rem 0
        color: #1e3c5c
        fontWeight: 600
        }

        Body p {
        fontSize: 1rem
        lineHeight: 1.5
        color: #2d3e50
        marginBottom: 1.2rem
        }

        Button ".button" {
        display: inline-block
        background: #3498db
        color: white
        textDecoration: none
        padding: 0.5rem 1rem
        borderRadius: 6px
        fontWeight: 500
        transition: background 0.2s
        border: none
        cursor: pointer

        &:hover {
            background: #2980b9
        }
    }

    }

    Variant featured {
    borderLeft: 6px solid #e67e22
    background: #fff9f2
    Title.color: #e67e22
    }
}

Component Alert {
    Root ".alert"

    Layout {
    padding: 1rem
    borderRadius: 8px
    margin: 1rem 0
    fontWeight: 500
    }

    Base {
    background: #f8d7da
    border: 1px solid #f5c6cb
    color: #721c24
    }

    Variant success {
    background: #d4edda
    borderColor: #c3e6cb
    color: #155724
    }
}

Component OutsideHeading {
    Root ".outside-heading"

    Layout {
        color: #6c757d
        fontSize: 2rem
    }
}
```
