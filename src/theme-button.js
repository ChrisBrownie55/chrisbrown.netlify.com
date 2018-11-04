import { LitElement, html } from '@polymer/lit-element'
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class'

import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior'
import ButtonType from '../mixins/button-type'

class ThemeButton extends ButtonType(mixinBehaviors([PaperButtonBehavior], LitElement)) {
  constructor() {
    super()

    this.type = 'button'
    this.noink = true
  }

  render() {
    return html`
      <style>
        :host {
          position: relative;
          overflow: hidden;

          display: block;

          width: fit-content;
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