import "./album.styl";
import template from "./album.html";
import { AlbumController as controller } from "./album.controller";

export const albumDirective = () => {
  return {
    template,
    controller,
    controllerAs: "vm",
    scope: {
      album: "="
    },
    bindToController: true,
    restrict: "E",
    replace: true
  };
};
