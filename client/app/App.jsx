import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

require('../style/app.scss');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source_type_selected: false,
            source_type: 'N/A'
        };
    }
    render() {
        return(
            <div>
              {/*HEADER*/}
              <header>
                <h1>Production Advice from The Pros</h1>
              </header>

              {/*SEARCH BAR*/}
              <section id="search">
                <input type="text" placeholder="Search by Artist Name or Genre"></input>
              </section>

              {/*NAV BAR*/}
              <section id="navigation">
                <a href="" className="navigation-link navigation-link-selected">Articles</a>
                <a href="" className="navigation-link">Videos</a>
                <a href="" className="navigation-link">Forum/Social Media Posts</a>
              </section>

              {/*RESULTS*/}
              <section>
                {
                  this.state.type_selected ?
                    <span>Results will display here.</span> :
                      <table></table>
                }
              </section>

              {/*SORT*/}
              <section>
                <label htmlFor="sort-select">Sort by: </label>
                <select id="sort-select">
                  <option>Artist Name</option>
                  <option>Genre</option>
                </select>
              </section>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('render-target'));
