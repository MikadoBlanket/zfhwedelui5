sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("zfhwedel.zfhwedelui5.controller.Main", {
            onInit: function () {
                 // set data model on view
                 const oData = {
                    recipient: {
                        name: "World"
                    }
                }
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onShowHello: function () {
                MessageToast.show("Hello World")
            }
        });
    });
