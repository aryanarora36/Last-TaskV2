sap.ui.define([], function () {
    "use strict";

    return {
        discontinuedStatus: function (bDiscontinued) {
            return bDiscontinued ? "Discontinued" : "Available";
        },
        discontinuedColor: function (bDiscontinued) {
            return bDiscontinued ? "Error" : "Success"; // Red or Green
        }
    };
});
