import "./dashboard.styl";
import template from "./dashboard.html";
import { DashboardController as controller } from "./dashboard.controller";

export const dashboardDirective = () => {
  return {
    template,
    controller,
    controllerAs: "vm",
    scope: {},
    restrict: "E",
    replace: true
  };
};
