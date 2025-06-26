sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("in.aryan.task.project1.controller.Chart", {
    onInit: function () {
      const oViz = this.getView().byId("idVizFrame");
      const oModel = this.getOwnerComponent().getModel();
      oViz.setModel(oModel);
    },

    onNavBack: function () {
      const oHistory = History.getInstance();
      const sPreviousHash = oHistory.getPreviousHash();
      if (sPreviousHash !== undefined) {
        history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("RouteMain", {}, true);
      }
    }
  });
});
