/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {

    function routes($routeProvider: ng.route.IRouteProvider){
    }

    routes.$inject = ["$routeProvider"]

    angular
        .module("HaveIBeenPwned")
        .config(routes);
}