import { LitElement, html } from '@polymer/lit-element'
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js'
import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior'

class FlatButton extends mixinBehaviors([PaperButtonBehavior], LitElement) {
  render() {
    return html`
      <slot></slot>

      <style>
        :host {
          position: relative;
          overflow: hidden;

          width: fit-content;
          padding: 0.3rem 0.45rem;

          background-color: transparent;
          color: var(--dark-text);

          border: none;
          border-radius: 2px;

          font-size: 0.8rem;
          font-weight: 700;
          font-family: Montserrat, var(--default-fonts);
          text-transform: uppercase;

          transition: color 0.2s, background-color 0.2s;
          will-change: color, background-color;
          cursor: pointer;
        }

        :host([round]) {
          padding-left: 0.5rem;
          padding-right: 0.5rem;

          border-radius: 13px;
        }

        :host([light]) {
          color: var(--light-text);
        }

        :host(:active) {
          /* rgb(254, 215, 102) is var(--theme-primary) */
          background-color: rgba(0, 0, 0, 0.15);
        }

        :host([light]:active) {
          background-color: rgba(255, 255, 255, 0.15);
        }

        @media(hover: hover) {
          :host(:hover) {
            background-color: rgba(0, 0, 0, 0.15);
          }

          :host([light]:hover) {
            background-color: rgba(255, 255, 255, 0.15);
          }
        }

        :host(:focus) {
          outline: none;
          background-color: rgba(0, 0, 0, 0.15)
        }

        :host([light]:focus) {
          background-color: rgba(255, 255, 255, 0.15);
        }
      </style>
    `
  }
}

window.customElements.define('flat-button', FlatButton)