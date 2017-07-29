import "./admin.styl";
import template from "./admin.html";
import { AdminController as controller } from "./admin.controller";

export const adminDirective = () => {
  return {
    template,
    controller,
    controllerAs: "vm",
    bindToController: true,
    restrict: "E",
    replace: true
  };
};
