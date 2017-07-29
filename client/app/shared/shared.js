import { api } from "./api";
import { albums } from "./albums";
import { movies } from "./movies";
import { auth } from "./auth";
import { users } from "./users";
import ngJwt from "angular-jwt";
import angular from "angular";

export const shared = angular
  .module("shared", [ngJwt])
  .constant("API", api)
  .factory("Albums", albums)
  .factory("Movies", movies)
  .factory("Auth", auth)
  .factory("Users", users)
  .config(($httpProvider, jwtInterceptorProvider) => {
    jwtInterceptorProvider.tokenGetter = () => {
      return localStorage.getItem("musiclibrary-token");
    };

    $httpProvider.interceptors.push("jwtInterceptor");
  })
  .run(($transitions, Auth, Users) => {
      var match = {
          to: function(state) {
              return state.name !== "auth";
          }
      }
      $transitions.onStart( match, function(trans) {
          var $state = trans.router.stateService;
          if(!Auth.isAuth())
              return $state.target('auth');
          else {
              //Users.visit(Auth.userToken());
          }

      });

      $transitions.onStart( {to: 'auth'}, function(trans) {
          var $state = trans.router.stateService;
          if(Auth.isAuth())
              return $state.target('library');

      });


  });
