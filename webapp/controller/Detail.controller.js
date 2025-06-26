sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("in.aryan.task.project1.controller.Detail", {
    onInit: function () {
      this.getOwnerComponent().getRouter()
        .getRoute("RouteDetail")
        .attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      const sProductId = oEvent.getParameter("arguments").productId;
      this.getView().bindElement({
        path: "/Products(" + sProductId + ")"
      });
    },

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteMain", {
        layout: "OneColumn"
      });
    }
  });
});
