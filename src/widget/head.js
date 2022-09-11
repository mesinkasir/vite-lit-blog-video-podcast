import { html, css, LitElement } from 'lit';
export class Head extends LitElement {
  static styles = css`
  head,h1 {
    text-align: center;
    color: white;
    font-size:20px;
  }
  h2 {font-size: 14px; padding: 3px;}
  a {
    color: rgb(37, 35, 35);
    text-decoration: none;
  }
`;

  static properties = {
    title: { type: String },
    description: { type: String },
    url: { type: String },
  };

  constructor() {
    super();
    (this.title = 'MESIN KASIR BARCODE'),
      (this.description =
        'Point of sale pos hardware perangkat kasir lengkap dengan mesin kasir all in one touchscreen barcode');
    this.url = '/';
  }

  render() {
    return html`
    <head><h1><a href="${this.url}">${this.title}</a></h1>
    <h2>${this.description}</h2>
    </head>
    `;
  }
}
customElements.define('head-start', Head);
