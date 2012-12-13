#!/bin/env node
var irc = require('irc');
var bot = new irc.Client('chat.freenode.net', 'sudobot', {
    channels: ['#sudoroom', '#botwar', '#botzoo'],
    port: 8001,
    debug: true
});

bot.addListener('message', function(from, to, message) {
   if(message.indexOf('yarr') > -1) {
        bot.say(to, 'Arrr Matey!');
   }
});

bot.addListener('message', function(from, to, message) {
    if(message.indexOf('<3') > -1) {
        bot.say(to, '<3');
    }
});

bot.addListener('message', function(from, to, message) {
    if(message == 'randomize') {
        bot.say(to, Math.round(Math.random() * 10));
    }
});

bot.addListener('pm', function (from, message) {
    if( message.slice(0,4) == 'say '){
        bot.say('#sudoroom', message.slice(4));
    }
    console.log(from + ' => ME: ' + message);
});
