var c = require('irc-colors');

var constants = require('../constants');
var utils = require('../utils');
var logging = require('../config/logger');

//all command manual
module.exports= function getHelp(bot, from, to, msgSplit, callback) {

    callback( c.underline.red('Commands:') + '\n'+
        c.red('!bark           ')  +  ': I will bark \n' +
        c.red('!define <word>  ')  +  ': I will find the meaning of the word for you. \n' +
        c.red('!help           ')  +  ': I will list all the things I can do) \n' +
        c.red('!quote          ')  +  ': I will tell you a random quote. \n' +
        c.red('!ping           ')  +  ': I will play ping pong with you \n' +
        c.red('!wp <topic>     ')  +  ': I will get wikipedia topic intro. \n' +
        c.red('!weather <city> ')  +  ': I will find the temperature of your city. \n');
}
