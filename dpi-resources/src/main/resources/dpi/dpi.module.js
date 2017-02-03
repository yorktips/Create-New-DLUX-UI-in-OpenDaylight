define(['angularAMD', 'app/routingConfig', 'app/core/core.services','Restangular', 'common/config/env.module'], function(ng) {

  var dpi = angular.module('app.dpi', ['ui.router.state','app.core','restangular', 'config']);

  dpi.config(function($stateProvider, $translateProvider, NavHelperProvider) {

    NavHelperProvider.addControllerUrl('app/dpi/dpi.controller');
    NavHelperProvider.addToMenu('dpi', {
      "link": "#/dpi",
      "title": "DPI",
      "active": "main.dpi",
      "icon": "icon-link",
      "page": {
        "title": "DPI",
        "description": "WHISTLER DPI"
      }
    });

    var access = routingConfig.accessLevels;
    $stateProvider.state('main.dpi', {
      url: 'dpi',
      access: access.public,
      views : {
        'content' : {
          templateUrl: 'src/app/dpi/dpi.tpl.html',
          controller: 'dpiTestController'
        }
      }
    });

  });

  return dpi;
});







