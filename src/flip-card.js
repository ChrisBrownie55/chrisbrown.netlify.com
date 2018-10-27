import { PolymerElement, html } from '@polymer/polymer'

class FlipCard extends PolymerElement {
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

  static get template() {
    return html`
      <input id='checkbox' class='checkbox' type='checkbox' role='switch' checked='{{flipped}}' aria-checked='[[flipped]]' />
      <figure class='content'>
        <slot>
          <!-- SVG goes in default slot -->
        </slot>
        <figcaption class='content-back'>
          <p>
            <span class='years'>
              [[years]]
            </span>
            <sup>yrs</sup>
          </p>
        </figcaption>
      </figure>
      <label for='checkbox' class='name'>
        [[name]]
      </label>

      <style>
        :host {
          position: relative;

          display: flex;
          flex-direction: column;

          width: 100%;
          height: 100%;
          margin: 0;
        }

        .checkbox {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: calc(100% - 2rem);
          margin: 0;

          opacity: 0;
          cursor: pointer;
          z-index: 2;
        }

        .checkbox:active {
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        .checkbox:checked+.content {
          transform: rotateY(180deg) translateY(var(--translateY));
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
        }

        .checkbox:active+.content,
        .checkbox:focus+.content {
          --translateY: -0.1rem;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }

        @media (hover: hover) {
          .checkbox:hover+.content {
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
      </style>
    `
  }
}

window.customElements.define('flip-card', FlipCard)