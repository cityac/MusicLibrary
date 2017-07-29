import _ from "lodash";

const movies = ($http, API, $q) => {
  let allMovies = [];
  let id = 0;

  const get = query => {
    let url = `${API.url}/movies`;
    if (query && query.albumId) {
      url += `?albumId=${query.albumId}`;
    }
    return $http.get(url).then(({ data }) => {
      allMovies = data.map(movie => {
        movie.slug = movie.title.replace(/\s+/g, "-");
        return movie;
      });
    });
  };

  const getOne = query => {
    const movie = _.find(allMovies, query);

    if (movie) {
      return $q.when(movie);
    } else {
      let url = `${API.url}/movies`;

      if (query.id) {
        url += `${query.id}`;
      } else if (query.title) {
        url += `?title=${query.title}`;
      }

      return $http.get(url).then(({ data }) => {
        return data[0];
      });
    }
  };

  const getState = () => {
    return allMovies;
  };

  const create = data => {
    return $http({
      data,
      url: `${API.url}/movies`,
      method: "POST"
    });
  };

  return { get, getOne, getState, create };
};

movies.$inject = ["$http", "API", "$q"];

export { movies };
