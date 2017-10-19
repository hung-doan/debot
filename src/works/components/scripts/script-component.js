
function run(config){
    var script;
    for(script of config.scripts )
    {
        console.log(script);
    }
}

exports = {
    "run" : run
};