import { LitElement, css, html, } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('dt-heading')
export class DTHeading extends LitElement {
  @property()
  headingText = 'This is a simple heading'

  render() {
    return html`
      <h1 class="heading-inner">
        <slot name="heading">${this.headingText}</slot>
      </h1>
    `
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      font-size: 32px;
      letter-spacing: 2px;
      font-weight: bold;
      text-transform: uppercase
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-heading': DTHeading
  }
}

// Using a specific element wrapper
// <h1 class="heading-inner">${this.headingText}</h1>

// Using a slot within an element wrapper
// <h1 class="heading-inner">
//   <slot name="heading">${this.headingText}</slot>
// </h1>
