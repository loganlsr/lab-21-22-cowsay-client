'use strict';

//require webpack assets
require('./scss/main.scss');

//npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

//app modules

//angular modules
const demoApp = angular.module('demoApp', []);

//angular constructions
demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moooooo';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow');
    return '\n' + cowsay.say({text: input || 'Cow says moooooooooooo!'});
  };

  cowsayCtrl.helloClick = function(){
    $log.debug('cowsayCtrl.updateCow');

  };
}
