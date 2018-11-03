import { traverseUpUntil } from '../js/utils'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status'

export default superClass => class extends superClass {
  constructor() {
    super()
    this.type = 'button'

    afterNextRender(this, () => {
      this.addEventListener('click', this._handleClick.bind(this))
    })
  }

  connectedCallback(...args) {
    super.connectedCallback(...args)
    if (this.type === 'submit' || this.type === 'reset') {
      this._form = traverseUpUntil(node => node.tagName === 'IRON-FORM', this)
    }
  }

  _handleClick() {
    if (this._form) {
      switch (this.type) {
        case 'submit':
          this._form.submit()
          break
        case 'reset':
          this._form.reset()
          break
        default:
          break
      }
    }
  }
}