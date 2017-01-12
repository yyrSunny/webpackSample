/**
 * Created by yuyr on 2017/1/12.
 */
var config = require('./config.json');
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};