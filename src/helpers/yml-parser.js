var yaml = require('js-yaml');
var fs   = require('fs');

function deserialize(filePath) {
    var doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    return doc;
}

exports = {
    "deserialize": deserialize
};