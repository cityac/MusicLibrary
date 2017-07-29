import { dashboard } from "./dashboard";
import { dashboardDirective } from "./dashboard.directive";
import template from "./dashboard.html";
import { DashboardController } from "./dashboard.controller";

describe("Dashboard", () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(dashboard.name));
  beforeEach(
    inject(_$rootScope_ => {
      $rootScope = _$rootScope_;
      makeController = injectables => {
        return new DashboardController(injectables);
      };
    })
  );

  describe("module", () => {
    it("should have an appropriate name", () => {
      expect(dashboard.name).to.equal("blog");
    });
  });

  describe("directive", () => {
    let ddo;
    beforeEach(() => {
      ddo = dashboardDirective();
    });

    it("should have the right template", () => {
      expect(ddo.template).to.equal(template);
    });

    it("should have the right controller", () => {
      expect(ddo.controller).to.equal(DashboardController);
    });

    it("should have an isolate scope", () => {
      expect(ddo.scope).to.be.an("object");
    });

    it("should use controllerAs", () => {
      expect(ddo.controllerAs).to.be.a("string");
    });
  });

  describe("controller", () => {
    it("should have blog posts", () => {
      const controller = makeController();
      expect(controller.albums).to.be.an("array");
      expect(controller.albums[0]).to.have.property("author");
      expect(controller.albums[0]).to.have.property("title");
    });
  });

  describe("template", () => {});
});
