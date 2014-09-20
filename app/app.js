'use strict';

var uiBase = angular.module('uiBase', [
    'ui.router',
    'ui.bootstrap'
]);

uiBase.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('info', {
        url: '/info',
        views: {
            content: {
                templateUrl: '/components/info/index.html',
                controller: 'InfoController'
            }
        }
    }).state('template', {
        url: '/template',
        views: {
            content: {
                templateUrl: '/components/_template/index.html',
                controller: 'TemplateController'
            }
        }
    });

    $urlRouterProvider.otherwise('/info');
});