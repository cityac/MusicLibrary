// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
import "normalize.css";
import { appDirective } from "./app.directive";

import angular from "angular";

import uiRouter from "@uirouter/angularjs";
// because we exported a named variable
// without using default keyword
// we must import it with the brackets
import { dashboard } from "./components/dashboard/dashboard";
import { common } from "./components/common/common";
import { album } from "./components/album/album";
import { shared } from "./shared/shared";
import { admin } from "./components/admin/admin";
import { auth } from "./components/auth/auth";

angular
  .module("app", [

    uiRouter,
    dashboard.name,
    common.name,
    album.name,
    shared.name,
    auth.name,
    admin.name
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/auth");
  })
  .directive("app", appDirective);
