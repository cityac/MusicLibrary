import { adminDirective } from "./admin.directive";
import angular from "angular";
import uiRouter from "@uirouter/angularjs";

export const admin = angular
  .module("admin", [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state("admin", {
      url: "/admin",
      // setup attr to accept post from controller
      template: '<admin></admin>',
    });
  })
  .directive("admin", adminDirective);
