import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('dt-heading')
export class DTHeading extends LitElement {
  @property()
  headingText = 'This is a simple heading'

  render() {
    return html`
      <h1 class="read-the-docs">${this.headingText}</h1>
      <slot></slot>
    `
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .h1 {
      font-size: 32px;
      letter-spacing: 2px;
      font-weight: bold
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-heading': DTHeading
  }
}
