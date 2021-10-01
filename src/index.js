import ReactDOM from 'react-dom';
import React from 'react';

const App = () => {
    return (
        <div>
            <p>Summary Section</p>
            <p>Hourly Weather</p>
            <p>Daily Weather</p>
            <p>Misc</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));