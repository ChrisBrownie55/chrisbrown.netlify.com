import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";
import { afterNextRender } from "../node_modules/@polymer/polymer/lib/utils/render-status.js";
import ScrollModule from "../node_modules/smooth-scroll-module/src/scroll-module.js";
const scroller = new ScrollModule();

class SmoothScroll extends LitElement {
  constructor() {
    super();
    afterNextRender(this, () => this.addEventListener('click', this.smoothScroll.bind(this)));
  }

  smoothScroll() {
    const element = document.querySelector(this.getAttribute('target'));

    if (!element) {
      return;
    }

    scroller.scrollTo(element);
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
    `;
  }

}

window.customElements.define('smooth-scroll', SmoothScroll);