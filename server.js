#!/bin/env node
//  OpenShift sample Node application
//var express = require('express');

var jerk = require( 'jerk' )

var irc_options =
  { server: 'chat.freenode.net'
  , nick: 'topbot'
  , channels: [ '#sudoroom', '#botzoo' ]
  , port: 8001
  }

var sudobot = jerk( function( j ) {
  j.watch_for( 'soup', function( message ) {
    message.say( message.user + ': soup is good food!' )
  })

  j.watch_for( /^(.+) are silly$/, function( message ) {
    message.say( message.user + ': ' + message.match_data[1] + ' are NOT SILLY. Don\'t joke!' )
  })

  j.watch_for( /^<3$/, function( message ) {
    message.say( message.user + ': ' + ' <3' )
  })

  j.watch_for( /^say (.+)$/, function( message ) {
    if(message.source[1] !== "#"){
      message.msg( message.user + ': you got it!' )
      sudobot.say( '#sudoroom', message.match_data[1] )
    }
  })

  j.watch_for( /^yarr$/, function( message ) {
    message.say( message.user + ': ' + 'Arrr Matey!' )
  })

}).connect( irc_options )
