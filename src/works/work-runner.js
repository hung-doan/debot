var ymlParser = require("../helpers/yml-parser");
var scriptWorkComponent = require("./components/scripts/script-component");

function run(configFilePath) {
    var config = ymlParser.deserialize(configFilePath);
    scriptWorkComponent.run(config);
}

exports = {
    "run" : run
};