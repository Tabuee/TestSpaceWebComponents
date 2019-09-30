const twig = require('twig');
const fs = require('fs');
const path = require('path');

const templateString = fs.readFileSync(path.join(__dirname, '/src/index.twig')).toString();
var html = twig
    .twig({
        allowInlineIncludes: true,
        data: templateString
    });

fs.writeFileSync(path.join(__dirname, '/dist/index.html'), html.render({}));
