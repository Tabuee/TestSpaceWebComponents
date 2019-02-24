import * as React from 'react';
import * as ReactDOM from 'react-dom';

function ready(fn: () => void) {
    // @ts-ignore
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // @ts-ignore
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return `
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    `;
    }
}

ready(() => {

// @ts-ignore
    ReactDOM.render(React.createElement(NameForm, null), document.getElementById('root'));
});
