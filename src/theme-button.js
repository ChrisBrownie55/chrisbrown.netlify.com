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

          transition: padding 0.2s, color 0.2s, background-color 0.2s;
          will-change: padding, color, background-color;
          cursor: pointer;
        }

        :host(::after) {
          content: '';

          position: absolute;
          top: calc(100% + 4px);
          left: 50%;

          width: 0;
          height: 2px;
          border-radius: 14px;

          background-color: rgba(254, 215, 102, 0.8);

          transform: translateX(-50%);
          transition: width 0.2s;
        }

        :host(:active) {
          padding: 0.85rem 2.75rem;

          color: var(--dark-text);
          background-color: var(--theme-primary);

          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        @media (hover: hover) {
          :host(:hover) {
            padding: 0.85rem 2.75rem;

            color: var(--dark-text);
            background-color: var(--theme-primary);
          }
        }

        :host(:focus) {
          outline: none;
        }

        :host(:focus:not(:active)::after) {
          width: 80%;
        }
      </style>

      <slot></slot>
    `
  }
}

window.customElements.define('theme-button', ThemeButton)