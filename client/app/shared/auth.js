import _ from "lodash";
import uuid from "uuid";

const tag = "musiclibrary-token";

const saveToken = token => {
  window.localStorage.setItem(tag, token);
};

const auth = ($http, API, $q, $rootScope, Users) => {
  let user = {};

  const signin = query => {
    let url = `${API.url}/users`;
    if (query) {
      url += `?username=${query.username}`;
    }
    return $http.get(url).then(({ data }) => {
      user = data[0];

      if (!user || user.password !== query.password)
        return $q.reject({ message: "Wrong credentials" });
      else {
        saveToken(user.token);
        Users.visit(user.token);
        $rootScope.$broadcast("authChanged");
      }
    });
  };

  const signup = data => {
    data.token = "token_user_" + data.username;
    data.id = uuid.v4();
    data.lastVisit = new Date().toString();
    return $http(
    {
      data,
      method: "POST",
      url: `${API.url}/users`
    }).then(({ data }) => {
      saveToken(data.token);
      $rootScope.$broadcast("authChanged");
    });
  };

  const getUser = query => {
    return user;
  };

  const isAuth = () => {
    return !!window.localStorage.getItem("musiclibrary-token");
  };
  const userToken = () => {
    return window.localStorage.getItem("musiclibrary-token");
  };

  const logout = () => {
    window.localStorage.removeItem("musiclibrary-token");
    $rootScope.$broadcast("authChanged");
  };
  return { signin, signup, getUser, isAuth, logout, userToken };
};

auth.$inject = ["$http", "API", "$q", "$rootScope", "Users"];

export { auth };
