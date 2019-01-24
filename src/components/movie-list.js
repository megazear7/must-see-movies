import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MovieList extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>2018</h2>
        <p>some list of movies...</p>
      </section>
      <section>
        <h2>2017</h2>
        <p>some list of movies...</p>
      </section>
      <section>
        <h2>2016</h2>
        <p>some list of movies...</p>
      </section>
    `;
  }
}

window.customElements.define('movie-list', MovieList);
