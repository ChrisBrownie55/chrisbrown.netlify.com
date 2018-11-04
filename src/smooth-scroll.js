import { LitElement, html } from '@polymer/lit-element'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status';

import ScrollModule from 'smooth-scroll-module/src/scroll-module'
import { traverseDownUntil } from '../js/utils';

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

    const focusableElement = traverseDownUntil(node => {
      if (node.disabled) {
        return false
      }

      const tabIndex = parseInt(node.getAttribute('tabindex'))
      if (tabIndex < 0) {
        return false
      } else if (!isNaN(tabIndex)) {
        return true
      }

      switch (node.tagName) {
        case 'INPUT':
        case 'BUTTON':
        case 'IFRAME':
          return true
        case 'A':
        case 'AREA':
          return !!node.getAttribute('href')
        default:
          return false
      }
    }, element)

    if (focusableElement) {
      // disabled could be undefined, hence, the strict check for true
      focusableElement.focus()
    } else {
      console.log(focusableElement)
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