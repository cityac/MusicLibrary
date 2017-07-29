import _ from "lodash";
import utils from "../../shared/utils.js";
// importing images using the file loader in webpack
// catpic will be the path to the emitted photo

class DashboardController {
  constructor(Albums, API) {
    this.message = "Your favorite albums";
    this.Albums = Albums;
    this.API = API;
    this.getAlbums();
    this.search = "";
  }

  getAlbums() {
    this.Albums.get().then(() => {
      this.albums = this.Albums.getState();
    });
  }
  getThumbnailSource(thumbnailId) {
    return this.API.thumbnailApi.format(thumbnailId);
  }
}

DashboardController.$inject = ["Albums", "API"];

export { DashboardController };
