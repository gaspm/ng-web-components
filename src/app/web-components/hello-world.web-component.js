class HelloWorldWebComponent extends HTMLElement {

  constructor() {
    super();
    this._message= 'Hello World, from Web Component!';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .container {
          border: 1px solid #000;
          padding: 1rem;
        }
      </style>
      <div class="container">
        <h2>${this._message}</h2>
      </div>
    `;
  }
}
// Custom element registry
customElements.define('wc-hello-world', HelloWorldWebComponent);
