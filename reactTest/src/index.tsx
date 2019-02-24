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


class SubscribeForm extends React.Component {

    public state = {
        lastName: 'lastName',
        firstName: 'firstName',
        email: '',
        enabled: false
    };

    constructor(props: any) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(field, event) {
        let newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
        if (field === 'email') {
            if (event.target.value !== '') {
                this.state.enabled = true;
            } else {
                this.state.enabled = false;
            }
        }
    }

    public handleSubmit(event) {
        alert(`
        sending: 
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        email: ${this.state.email}
        `);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                FirstName:
                <input type="text" value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')}/><br/>
                LastName:
                <input type="text" value={this.state.lastName} onChange={this.handleChange.bind(this, 'lastName')}/><br/>
                Email:
                <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/><br/>

                <input type="submit" value="Submit" disabled={!this.state.enabled}/>
            </form>
        );
    }
}

ready(() => {
    setTimeout(()=>{
        ReactDOM.render(
            <SubscribeForm></SubscribeForm>,
            document.getElementById('root')
        );
    },5000);
});
