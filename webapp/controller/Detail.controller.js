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
      const sProductId = oEvent.getParameter("arguments").productId; // Gets the product ID from the route parameters.
      this.getView().bindElement({
        path: "/Products(" + sProductId + ")" // view ko batata hai to show data from /Products(1) if sProductId = 1.
      });
    },

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("RouteMain", { //Navigates to the main view.
        layout: "OneColumn"
      });
    }
  });
});
