sap.ui.define([
    "sap/ui/core/UIComponent",
    "in/aryan/task/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("in.aryan.task.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() { //life cycle func
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});