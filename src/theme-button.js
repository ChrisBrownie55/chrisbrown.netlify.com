import { LitElement, html } from '@polymer/lit-element'
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status'

import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior'
import { traverseUpUntil } from '../js/utils'

class ThemeButton extends mixinBehaviors([PaperButtonBehavior], LitElement) {
  constructor() {
    super()

    this.type = 'button'
    this.noink = true
    afterNextRender(this, () => {
      this.addEventListener('click', this.handleClick.bind(this))
      this.removeAttribute('unresolved')
    })
  }

  connectedCallback(...args) {
    super.connectedCallback(...args)
    if (['submit', 'reset'].includes(this.type)) {
      this.form = traverseUpUntil(node => node.tagName === 'IRON-FORM', this)
    }
  }

  static get properties() {
    return {
      type: String
    }
  }

  async handleClick(event) {
    if (this.form) {
      switch (this.type) {
        case 'submit':
          this.form.submit()
          break
        case 'reset':
          this.form.reset()
          break
        default:
          break
      }
    }
  }

  render() {
    return html`
      <style>
        :host {
          position: relative;
          overflow: hidden;

          padding: 0.85rem 1.75rem;

          background: none;
          color: var(--light-text);

          border: solid 2px var(--theme-primary);
          border-radius: 50px;

          font-size: 1rem;
          font-weight: 700;
          font-family: Montserrat, var(--default-fonts);
          text-transform: uppercase;

          transition: padding 0.2s, color 0.2s, background-color 0.2s, box-shadow 0.2s, var(--load-transition);
          will-change: padding, color, background-color, box-shadow, var(--load-will-change);
          cursor: pointer;
        }

        :host(:active),
        :host(:hover),
        :host(:focus) {
          padding: 0.85rem 2.75rem;

          color: var(--dark-text);
          background-color: var(--theme-primary);

          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        :host(:focus) {
          outline: none;
          box-shadow: 0px 0px 0px 4px rgba(102, 201, 254, 0.6);
        }
      </style>
      <slot>
      </slot>
    `
  }
}

window.customElements.define('theme-button', ThemeButton)