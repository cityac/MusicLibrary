import { dashboardDirective } from "./dashboard.directive";
import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngAnimate from "angular-animate";

export const dashboard = angular
  .module("dashboard", [uiRouter, ngAnimate])
  .config(function($stateProvider) {
    $stateProvider.state("library", {
      url: "/library",
      template: "<dashboard></dashboard>"
    });
  })
  .directive("dashboard", dashboardDirective);