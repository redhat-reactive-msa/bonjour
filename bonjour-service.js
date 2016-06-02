var EventBus = require('vertx3-eventbus-client');
var config = require('app-config');


console.log("Event bus bridge location: " + config.eventbus.bridge);
var eb = new EventBus(config.eventbus.bridge);

eb.onopen = function () {
    eb.registerHandler("bonjour", function (err, msg) {
        msg.reply({
            "bonjour" : "Bonjour " + msg.body
        });
    });

    eb.registerHandler("bonjour/chain", function (err, msg) {
        msg.reply({
            "bonjour" : "Bonjour " + msg.body
        });
    });

    eb.registerHandler("bonjour/health", function (err, msg) {
        msg.reply("I'm ok");
    });
};
