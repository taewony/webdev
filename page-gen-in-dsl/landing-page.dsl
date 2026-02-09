page LandingPage {

  layout {

    header#siteHeader {
      h1 { text "My Product" }
    }

    main {

      section#hero.hero-container {

        h2.hero-title {
          text "Build Faster with GPU-Powered AI"
        }

        div.card-row {

          article.card {
            h3 { text "Fast" }
            p { text "Optimized kernels and pipelines" }
          }

          article.card {
            h3 { text "Scalable" }
            p { text "From laptop to multi-GPU clusters" }
          }

          article.card {
            h3 { text "Reliable" }
            p { text "Formal specs and runtime checks" }
          }

        }
      }
    }

    footer#siteFooter {
      text "© 2026 SPAK Lab"
    }

  }

  style {

    header { padding: 24px; background: #111; color: white; }

    .hero-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 64px 24px;
      text-align: center;
    }

    .hero-title {
      font-size: 2.2rem;
      margin-bottom: 32px;
    }

    .card-row {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    .card {
      flex: 1;
      border: 1px solid #ddd;
      padding: 16px;
      border-radius: 12px;
      background: #fafafa;
    }

    footer {
      margin-top: 64px;
      padding: 24px;
      background: #f0f0f0;
      text-align: center;
    }

  }
}
