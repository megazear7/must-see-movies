import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class MovieList extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        ul {
          max-width: 600px;
          list-style-type: none;
          margin: 0 auto;
          padding: 0;
        }

        li {
          line-height: 50px;
          padding-left: 5px;
          border-bottom: 1px solid #ccc;
          text-decoration: none;
          color: #000;
          display: block;
          transition: font-size 0.3s ease, background-color 0.3s ease;
        }

        li:last-child {
          border: none;
        }

        li:hover {
          font-size: 30px;
        }

        section:nth-of-type(even) li:hover {
          background: var(--app-section-odd-color);
        }

        section:nth-of-type(odd) li:hover {
          background: var(--app-section-even-color);
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>2018</h2>
        <ul>
          <li>Avengers: Infinity War</li>
          <li>Annihilation</li>
        </ul>
      </section>
      <section>
        <h2>2017</h2>
        <ul>
          <li>Wind River</li>
          <li>Dunkirk</li>
        </ul>
      </section>
      <section>
        <h2>2016</h2>
        <ul>
          <li>The Light Between Oceans</li>
          <li>Fences</li>
          <li>Hell or High Water</li>
          <li>Arrival</li>
          <li>Deepwater Horizon</li>
        </ul>
      </section>
      <section>
        <h2>2015</h2>
        <ul>
          <li>Everest</li>
          <li>Sicario</li>
          <li>Joy</li>
          <li>Bridge of Spies</li>
        </ul>
      </section>
      <section>
        <h2>2014</h2>
        <ul>
          <li>Interstellar</li>
          <li>American Sniper</li>
          <li>Dawn of the Planet of the Apes</li>
          <li>Godzilla</li>
          <li>Fury</li>
        </ul>
      </section>
      <section>
        <h2>2013</h2>
        <ul>
          <li>Gravity</li>
          <li>Secret Life of Walter Mitty</li>
          <li>Lone Survivor</li>
        </ul>
      </section>
      <section>
        <h2>2012</h2>
        <ul>
          <li>Zero Dark Thirty</li>
          <li>Lincoln</li>
          <li>The Dark Knight Rises</li>
          <li>Prometheus</li>
          <li>Lawless</li>
        </ul>
      </section>
    `;
  }
}

window.customElements.define('movie-list', MovieList);
