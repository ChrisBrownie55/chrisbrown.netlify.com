import { LitElement, html } from '@polymer/lit-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status';

import ScrollModule from '../node_modules/smooth-scroll-module/src/scroll-module'

const scroller = new ScrollModule()

class SmoothScroll extends LitElement {
  constructor() {
    super()
    afterNextRender(this, () => {
      // as of 2018, only supported in Firefox Desktop and both Safaris
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      this.addEventListener('click', this.smoothScroll.bind(this))
    })
  }

  async smoothScroll() {
    const element = document.querySelector(this.getAttribute('target'))
    if (!element) { return }

    console.log('scrolling...')
    await scroller.scrollTo(element, this.prefersReducedMotion)
    console.log('done scrolling, focusing...')
    requestAnimationFrame(() => element.focus())
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