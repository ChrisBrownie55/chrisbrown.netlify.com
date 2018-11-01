import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
import { unsafeHTML } from "../node_modules/lit-html/directives/unsafe-html.js";

class ImgCard extends LitElement {
  static get properties() {
    return {
      src: String,
      alt: String,
      description: String,
      href: String
    };
  }

  render() {
    return html`
      <img class='image' src=${this.src} alt=${this.alt} />
      <div class='content'>
        <p class='description'>
          ${unsafeHTML(this.description)}
        </p>
        <a class='explore-link' href=${this.href}>Explore</a>
      </div>

      <style>
        :host {
          position: relative;

          grid-column: span 1;
          grid-row: span 1;
          overflow: hidden;

          border-radius: 4px;
        }

        :host(:last-child) {
          grid-column: span 2;
          grid-row: span 1;
        }

        .image {
          width: 100%;
          height: 100%;

          transition: filter 0.2s;

          object-fit: cover;
        }
        :host(:hover) .image {
          filter: brightness(50%);
        }

        .content {
          --slide-padding: 1rem;

          position: absolute;
          left: 0;
          top: 0;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          width: calc(100% - calc(var(--slide-padding) * 2));
          height: calc(100% - calc(var(--slide-padding) * 2));
          padding: var(--slide-padding);

          background-color: rgba(0, 0, 0, 0.5);

          opacity: 0;
          transition: opacity 0.25s;
        }
        :host(:hover) .content {
          opacity: 1;
        }
        :host(:last-child) .content {
          --slide-padding: 1.5rem;
        }

        .description {
          max-width: 23rem;
          margin: 0;

          color: #fafafa;

          font-family: var(--default-fonts);
          font-size: 0.8rem;
        }
        .description > ul {
          margin-top: 0.15rem;
          padding-left: 1.5rem;
        }

        .explore-link {
          width: fit-content;
          padding: 0.25rem 0.65rem;
          margin-right: auto;

          color: #fafafa;

          font-family: var(--default-fonts);
          text-decoration: none;

          border: solid 1px var(--theme-primary);
          border-radius: 2px;

          transition: background-color 0.175s, color 0.175s;
        }

        .explore-link:hover {
          color: #222;
          background-color: var(--theme-primary);
        }
      </style>
    `;
  }

}

window.customElements.define('img-card', ImgCard);