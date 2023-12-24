
(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.names = names;
helloSpeaker.speak = function(names) {
  console.log(speakWord + " " + names);
}
window.helloSpeaker = helloSpeaker;
})(window);
