page MyComponent {

  /* === State Schema (Lit: static properties) === */
  state {
    greeting: string
    planet: string
  }

  /* === State Defaults (Lit: constructor) === */
  init {
    greeting = "Hello"
    planet   = "World"
  }

  /* === Component Scoped Style (Lit: static styles) === */
  style {

    host {
      display: inline-block
      padding: 10px
      margin: 10px
      font-size: 32px
      background: silver
    }

    .planet {
      display: inline-block
      transition: transform 0.2s ease, color 0.2s ease
    }

    .planet:hover {
      color: red
      scale: 1.1
      cursor: pointer
    }
  }

  /* === Template Structure (Lit: render()) === */
  template {

    span on click -> togglePlanet {
      text { greeting }
      span class="planet" {
        text { planet }
      }
    }
  }

  /* === Behavior (Lit: methods) === */
  behavior togglePlanet {

    when click {
      if planet == "World" {
        planet = "Mars"
      } else {
        planet = "World"
      }
    }
  }
}