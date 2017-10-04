module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('X');


app.launch(function(request, response) {
    response.say('Wilkommen!').reprompt('Bitte?').shouldEndSession(false);
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};


app.intent('Y', {
    "slots": {
      "" : ""
    },
    "utterances": [
      ""
    ]
}, function(request, response) {


});

module.exports = app;
