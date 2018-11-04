import { LitElement, html } from '@polymer/lit-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status';

import ScrollModule from 'smooth-scroll-module/src/scroll-module'

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

    await scroller.scrollTo(element, this.prefersReducedMotion)
    const focusableElement = element.querySelector(`
      *:not([tabindex='-1'])[tabindex],
      input,
      a[href],
      area[href]
      button,
      iframe
    `)
    if (focusableElement && focusableElement.disabled !== true) {
      // disabled could be undefined, hence, the strict check for true
      focusableElement.focus()
    } else {
      console.log(focusableElement, focusableElement.disabled)
    }
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