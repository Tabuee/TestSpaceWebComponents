const fs = require('fs');

const posthtml = require('posthtml');
const include = require('posthtml-include');
const inline = require('posthtml-inline-assets');

const html = fs.readFileSync('src/test.html');

posthtml([include({encoding: 'utf8'}), inline()])
    .process(html)
    .then((result) => {
        fs.writeFileSync('./dist/index.html', result.html);
    });
