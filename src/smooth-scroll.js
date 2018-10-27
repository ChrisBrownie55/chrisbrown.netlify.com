import { PolymerElement, html } from '@polymer/polymer'
import ScrollModule from '../node_modules/smooth-scroll-module/src/scroll-module'

const scroller = new ScrollModule()

class SmoothScroll extends PolymerElement {
  constructor() {
    super()
    this.addEventListener('click', this.smoothScroll.bind(this))
  }

  smoothScroll() {
    const element = document.querySelector(this.getAttribute('target'))
    if (!element) { return }

    scroller.scrollTo(element)
  }

  static get template() {
    return html`
      <style>
        :host {
          display: contents;
        }
      </style>

      <slot></slot>
    `
  }
}

window.customElements.define('smooth-scroll', SmoothScroll)