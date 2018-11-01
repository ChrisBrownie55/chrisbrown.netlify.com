import { LitElement, html } from '@polymer/lit-element'
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status'


import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior'

class ThemeButton extends mixinBehaviors([PaperButtonBehavior], LitElement) {
  constructor() {
    super()

    afterNextRender(this, () => this.removeAttribute('unresolved'))
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

          transition: padding 0.2s, color 0.2s, background-color 0.2s, box-shadow 0.2s;
          will-change: padding, color, background-color, box-shadow;
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

      <slot></slot>
    `
  }
}

window.customElements.define('theme-button', ThemeButton)