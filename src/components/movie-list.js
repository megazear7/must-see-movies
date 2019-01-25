import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

/* --- Redux Imports --- */
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { increment, decrement } from '../actions/counter.js';

import counter from '../reducers/counter.js';
store.addReducers({
  counter
});
/* -------------------- */

/* --- Element Imports --- */
import './counter-element.js';
/* ----------------------- */

class MovieList extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _clicks: { type: Number },
      _value: { type: Number }
    };
  }

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
          display: flex;
          line-height: 50px;
          padding: 5px;
          border-bottom: 1px solid #ccc;
          text-decoration: none;
          color: var(--app-dark-text-color);
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

        counter-element {
          display: block;
        }

        .circle {
          margin: 0;
          width: 64px;
        }

        .right-column {
          margin-left: 15px;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <h2>2018</h2>
        <ul>
          <li>
            <div class="circle">${this._value}</div>
            <div class="right-column">
              <span>Avengers: Infinity War</span>
              <counter-element
                value="${this._value}"
                clicks="${this._clicks}"
                @counter-incremented="${this._counterIncremented}"
                @counter-decremented="${this._counterDecremented}">
              </counter-element>
            </div>
          </li>
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

  _counterIncremented() {
    store.dispatch(increment());
  }

  _counterDecremented() {
    store.dispatch(decrement());
  }

  stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}

window.customElements.define('movie-list', MovieList);
