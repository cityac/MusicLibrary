import { albumDirective } from "./album.directive";
import angular from "angular";
import uiRouter from "@uirouter/angularjs";

export const album = angular
  .module("album", [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state("album", {
      url: "/album/:slug",
      // setup attr to accept post from controller
      template: '<album album="album"></album>',
      // one off controller for resolving
      controller: function($scope, album) {
        // bind to scope to pass into component
        $scope.album = album;
      },

      resolve: {
        album: function(Albums, Movies, $stateParams) {
          // get the cpost based on title
          // in url
          let { slug } = $stateParams;
          let title = slug.replace(/\-+/g, " ");
          return Albums.getOne({ title });
        }
      }
    });
  })
  .directive("album", albumDirective);
