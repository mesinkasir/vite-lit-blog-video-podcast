import { LitElement, html } from 'lit';
import './styles.css';
import './widget/start/fitur.js';
import './widget/footer.js';
import './widget/head.js';

class Start extends LitElement {
  render() {
    return html`
    <head-start></head-start>
    <data-fitur></data-fitur>
    <footer-copy></footer-copy>
    `;
  }
}
customElements.define('my-start', Start);
