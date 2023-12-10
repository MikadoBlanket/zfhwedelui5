sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zfhwedel.zfhwedelui5.controller.Main", {
            onInit: function () {

            },

            onShowHello: function () {
                MessageToast.show("Hello World")
            }
        });
    });
