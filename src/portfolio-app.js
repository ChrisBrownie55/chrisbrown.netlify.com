import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PortfolioApp extends PolymerElement {
  static get template() {
    return html`
      
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'portfolio-app'
      }
    };
  }
}

window.customElements.define('portfolio-app', PortfolioApp);
