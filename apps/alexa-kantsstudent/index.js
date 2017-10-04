module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
const verifier = require('alexa-verifier');
var app = new alexa.app('kantsstudent');
const questions=[
  "how would you define human beings perception of objects from a philosophical point/>",
  "You mean time and space",
  "So you say, people are genetically programmed to develop without having to rely on experience. If humans see the things through these tools of understanding, how would they have knowledge of the real world",
  "Then it brings solipsism. The self is the only reality.",
  "So, people see the world from a spectacle and this spectacle can not be removed since they are part of the visual equipment. People will receive signals from outside through the apparatus which will distort the signals naturally. But then how humans can know there is really something that is sending signals ?",
  "Got it. But last thing, for ages people believed that the earth was the center of the universe till Copernicus had replaced it. Would it mean that the source code is changing?",
  "Thanks for the philosophy lesson. Bye!"
]
const answers=[
  "I would explain it with Kants transcendental idealism Things can be explained through prioris which are independent of all particular experiences",
  "Yes but not only Its true humans understand phenomenas in its relationship to time and space since they can not imagine a world which has more than three dimensions or they can not understand nonsequantial time also they have a way to look at things which is called intuitions It can be thought as tools of understanding Kant called them Concepts and Categories which are priori that they come before any experience and they shape the experiences",
  "They cant Kant splits the world as phenomenal which the things appear to senses after mediation through tools of understanding and noumenal which is known as The thing in itself the thing as it really is distinct from how it appears to humans",
  "Well It can be said there is a collective subjectivism These collective intuitions in its developed state present a system of reasoning in the context of which it can be said an individual is using proper reason or not",
  "Its true that humans have ideas about things which dont assure that there are sources out there which cause these ideas But science can help people about it Its proven that human ears are incapable of receiving high-pitched sounds and human eyes can not see UV or infrared colours But not to forget they are all in phenomenal world",
  "Yes humanbeings understand the phenomenal world in a more sophisticated way with discoveries which enhance the reasoning apparatus they have It is also worth to remember that people like Copernicus have not delivered the last word and noumenal world still can not be known"
]

app.launch(function(request, response) {
    response.say(questions[0]).reprompt().shouldEndSession(false);
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};


app.intent('First', {
    "slots": {},
    "utterances": [
      answers[0]
    ]
}, function(request, response) {
    response.say(questions[1]).reprompt().shouldEndSession(false);
});
app.intent('Second', {
    "slots": {},
    "utterances": [
      answers[1]
    ]
}, function(request, response) {
  response.say(questions[2]).reprompt().shouldEndSession(false);

});
app.intent('Third', {
    "slots": {},
    "utterances": [
      answers[2]
    ]
}, function(request, response) {
  response.say(questions[3]).reprompt().shouldEndSession(false);

});
app.intent('Forth', {
    "slots": {},
    "utterances": [
      answers[3]
    ]
}, function(request, response) {
  response.say(questions[4]).reprompt().shouldEndSession(false);

});
app.intent('Fifth', {
    "slots": {},
    "utterances": [
      answers[4]
    ]
}, function(request, response) {
  response.say(questions[5]).reprompt().shouldEndSession(false);


});
app.intent('Sixth', {
    "slots": {},
    "utterances": [
      answers[5]
    ]
}, function(request, response) {
  response.say(questions[6]).reprompt().shouldEndSession(true);

});


module.exports = app;
