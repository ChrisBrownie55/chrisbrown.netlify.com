import { LitElement, html } from '@polymer/lit-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status';

import ScrollModule from '../node_modules/smooth-scroll-module/src/scroll-module'

const scroller = new ScrollModule()

class SmoothScroll extends LitElement {
  constructor() {
    super()
    afterNextRender(this, () => {
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches
      this.addEventListener('click', this.smoothScroll.bind(this))
    })
  }

  async smoothScroll() {
    const element = document.querySelector(this.getAttribute('target'))
    if (!element) { return }

    await scroller.scrollTo(element, this.prefersReducedMotion)
    element.focus()
  }

  render() {
    return html`
      <style>
        :host {
          display: contents;
        }

        @supports not (display: contents) {
          :host {
            display: flex;
          }
        }
      </style>

      <slot></slot>
    `
  }
}

window.customElements.define('smooth-scroll', SmoothScroll)