const twig = require('twig');
const fs = require('fs');
const path = require('path');

const templateString = fs.readFileSync(path.join(__dirname, '/src/SubscribeForm/SubscribeFormTemplate.twig')).toString();
var html = twig
    .twig({
        allowInlineIncludes: true,
        data: templateString
    });

let htmlString = html.render(
    {
        firstName_args: ' value="this.state.firstName" onChange={this.handleChange.bind(this, \'firstName\')}',
        lastName_args: ' value="this.state.lastName" onChange={this.handleChange.bind(this, \'lastName\')}',
        email_args: ' value="this.state.email" onChange={this.handleChange.bind(this, \'email\')}'
    }
);

let str = `
const SubscribeFormTemplate = () => ( ` + htmlString + ` );

export default SubscribeFormTemplate;

`;

fs.writeFileSync(path.join(__dirname, '/src/SubscribeForm/SubscribeFormTemplate.tsx'), str);
