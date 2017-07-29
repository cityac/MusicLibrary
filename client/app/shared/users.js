import angular from "angular";
const users = ($http, API) => {
  let allUsers = [];

  const visit = query => {
    let url = `${API.url}/users` + `?token=${query}`;
    return $http.get(url).then(({ data }) => {
      let user = data[0];

      if (user) {
        user.lastVisit = new Date().toString();
        let patchedUser = {
          id: user.id,
          lastVisit: user.lastVisit
        };

        $http
          .put(`${API.url}/users/${user.id}`, user, {
            transformRequest: function(data, headers) {
              headers()["Content-Type"] = "application/json;charset=utf-8";
                return angular.toJson(data);
            }
          })
          .then(({ data }) => {
            console.log("last visit updated");
          });
      }
    });
  };

  const get = query => {
    let url = `${API.url}/users`;
    return $http.get(url).then(({ data }) => {
      allUsers = data;
    });
  };
  const getState = () => {
    return allUsers;
  };

  return { get, getState, visit };
};

users.$inject = ["$http", "API"];

export { users };
