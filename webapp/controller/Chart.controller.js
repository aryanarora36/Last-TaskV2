sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("in.aryan.task.project1.controller.Chart", {
    onInit: function () {
      const oViz = this.getView().byId("idVizFrame");
      const oModel = this.getOwnerComponent().getModel(); 
      oViz.setModel(oModel); //Assigns the model to the VizFrame data show kar sake.
    },

    onNavBack: function () {
      const oHistory = History.getInstance();
      const sPreviousHash = oHistory.getPreviousHash(); //check user kaha se aaya hain
      if (sPreviousHash !== undefined) { //If the user came from another page, go back.
        history.go(-1); //Go back 1 step in browser history 
      } else {
        this.getOwnerComponent().getRouter().navTo("RouteMain", {}, true); //If there's no previous page to go back to, just send the user to the main view.
      }
    }
  });
});
