const SubscribeFormTemplate = () => (
    <div class="SubscribeForm">
        <form>
            LastName: <input class="firstName" placeholder="firstName" type="text" value="this.state.firstName"
                             onChange={this.handleChange.bind(this, 'firstName')}/><br/>
            FirstName: <input class="lastName" placeholder="lastName" type="text" value="this.state.lastName"
                              onChange={this.handleChange.bind(this, 'lastName')}/><br/>
            E-Mail: <input class="email" placeholder="email" type="text" value="this.state.email"
                           onChange={this.handleChange.bind(this, 'email')}/><br/>
            <button disabled>Subscribe Already!</button>
        </form>
    </div>
);

export default SubscribeFormTemplate;

