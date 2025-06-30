sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "in/aryan/task/project1/formatter/StatusFormatter"
], function (Controller, Filter, FilterOperator, Sorter, StatusFormatter) {
    "use strict";

    return Controller.extend("in.aryan.task.project1.controller.Main", {
        formatter: StatusFormatter,

        onInit: function () {
            // No special init required for OData
        },

        onSearch: function (oEvent) {
            const sQuery = oEvent.getSource().getValue();
            const oTable = this.byId("productTable"); // find karta hai cntrl with id product table from view
            const oBinding = oTable.getBinding("items"); // from the table, get the binding of items

            if (sQuery && sQuery.length > 0) {
                const oFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
                oBinding.filter([oFilter]);
            } else {
                oBinding.filter([]);
            }
        },

        onSortChange: function (oEvent) {
            const sSelectedKey = oEvent.getSource().getSelectedKey();
            const oTable = this.byId("productTable");
            const oBinding = oTable.getBinding("items");

            const oSorter = new Sorter(sSelectedKey, false);
            oBinding.sort(oSorter);
        },

        onItemPress: function (oEvent) {
            const oItem = oEvent.getParameter("listItem");
            if (oItem) {
                const oCtx = oItem.getBindingContext(); // item clicked so karo binding with data
                if (oCtx) {
                    const sProductId = oCtx.getProperty("ProductID");  //if the binding context milgya, get the ProductID
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
