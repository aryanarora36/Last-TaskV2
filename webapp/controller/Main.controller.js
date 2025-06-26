sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("in.aryan.task.project1.controller.Main", {
        onInit: function () {
            // No special init required for OData
        },

        onSearch: function (oEvent) {
            const sQuery = oEvent.getSource().getValue();
            const oTable = this.byId("productTable");
            const oBinding = oTable.getBinding("items");

            if (sQuery && sQuery.length > 0) {
                const oFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
                oBinding.filter([oFilter]);
            } else {
                oBinding.filter([]);
            }
        },

        onItemPress: function (oEvent) {
            const oItem = oEvent.getParameter("listItem");
            if (oItem) {
                const oCtx = oItem.getBindingContext();
                if (oCtx) {
                    const sProductId = oCtx.getProperty("ProductID");
                    this.getOwnerComponent().getRouter().navTo("RouteDetail", {
                        productId: sProductId
                    });
                } else {
                    sap.m.MessageToast.show("No binding context found for selected item.");
                }
            } else {
                sap.m.MessageToast.show("No item selected.");
            }
        },

        onShowChart: function () {
            this.getOwnerComponent().getRouter().navTo("RouteChart");
        }
    });
});
