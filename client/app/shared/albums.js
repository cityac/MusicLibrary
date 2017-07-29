import _ from "lodash";

const albums = ($http, API, $q) => {
  let allAlbums = [];
  let id = 0;

  const get = () => {
    return $http.get(`${API.url}/albums`).then(({ data }) => {
      allAlbums = data.map(album => {
        album.slug = album.title.replace(/\s+/g, "-");
        return album;
      });
    });
  };

  const getOne = query => {
    const album = _.find(allAlbums, query);

    if (album) {
      return $q.when(album);
    } else {
      let url = `${API.url}/albums`;

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
    return allAlbums;
  };

  const create = data => {
    return $http({
      data,
      url: `${API.url}/albums`,
      method: "POST"
    });
  };

  return { get, getOne, getState, create };
};

albums.$inject = ["$http", "API", "$q"];

export { albums };
