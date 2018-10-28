import { LitElement, html } from '@polymer/lit-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js'

class FlipCard extends LitElement {
  constructor() {
    super()
    afterNextRender(this, () => this.removeAttribute('unresolved'))
  }

  static get properties() {
    return {
      years: Number,
      name: String,
      flipped: {
        type: Boolean,
        value: false
      }
    }
  }

  toggle() {
    this.flipped = !this.flipped
  }

  render() {
    return html`
      <figure class='content' role='switch' tabindex='0'
        @click=${this.toggle.bind(this)}
        @keyup=${event => {
        if (event.key === ' ') {
          this.toggle()
        }
      }}
        @keydown=${event => {
        if (event.key === ' ') {
          event.preventDefault()
        }
      }}
        ?flipped=${this.flipped}
        .aria-checked=${this.flipped}
      >
        <slot>
          <!-- SVG goes in default slot -->
        </slot>
        <figcaption class='content-back'>
          <p>
            <span class='years'>
              ${this.years}
            </span>
            <sup>yrs</sup>
          </p>
        </figcaption>
      </figure>
      <p for='checkbox' class='name'>
        ${this.name}
      </p>

      <style>
        :host {
          position: relative;

          display: flex;
          flex-direction: column;

          width: 100%;
          height: 100%;
          margin: 0;
        }

        .content {
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;

          width: calc(9rem - 3rem);
          height: calc(11rem - 5rem);
          padding: 1.5rem;
          margin: 0;

          background-color: #2a2a2a;

          border-radius: 2px;

          --translateY: 0;
          transform: translateY(var(--translateY));

          transform-style: preserve-3d;
          transition: transform 0.3s, box-shadow 0.3s;
          will-change: transform;

          cursor: pointer;
        }

        .content[flipped] {
          transform: rotateY(180deg) translateY(var(--translateY));
        }

        .content:active,
        .content:focus {
          --translateY: -0.1rem;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }

        .content:focus {
          outline: none;
        }

        @media (hover: hover) {
          .content:hover {
            --translateY: -0.1rem;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
          }
        }

        slot {
          display: block;

          width: 100%;

          backface-visibility: hidden;
          z-index: 1;
        }

        .content-back {
          position: absolute;
          top: 50%;
          left: 50%;

          display: inline-block;
          width: calc(100% - 1rem);
          padding-right: 1rem;

          color: #fff;

          font-size: 3rem;
          font-family: Roboto, var(--default-fonts);
          font-weight: bold;
          text-align: center;

          transform: rotateY(180deg) translate(50%, -50%);
          backface-visibility: hidden;
          z-index: 1;
        }

        .content-back sup {
          position: absolute;
          font-size: 1rem;
          transform: translate(0.25rem, -0.125rem);
        }

        .name {
          margin: 0.25rem auto 0;
          font-family: Roboto, var(--default-fonts);
        }

        @media print {
          .content-back {
            display: none;
          }
        }
      </style>
    `
  }
}

window.customElements.define('flip-card', FlipCard)