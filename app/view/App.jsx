import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../../style/app.scss');

class App extends Component {
    render() {
        return(
            <div>Hello World!</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('render-target'));
