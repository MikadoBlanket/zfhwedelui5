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
                 // read msg from i18n model
                 const oBundle = this.getView().getModel("i18n").getResourceBundle();
                 const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                 const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
                 // show message
                 MessageToast.show(sMsg);
            },

            onOpenDialog() {
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                   name: "zfhwedel.zfhwedelui5.view.fragments.HelloDialog"
                });
       
                this.pDialog.then((oDialog) => oDialog.open());
             },

            onCloseDialog() {
                // note: We don't need to chain to the pDialog promise, since this event handler
                // is only called from within the loaded dialog itself.
                this.byId("helloDialog").close();
            },

            showDetails: function(oEvent) {
                // Get selected element
                const oItem = oEvent.getSource()
                // Get Router from Component.js
                const oRouter = this.getOwnerComponent().getRouter();
                // Nav to detail page (Use name of route)
                   oRouter.navTo("SalesDocDetail", {
                   salesDocPath: window.encodeURIComponent(oItem.getBindingContext("salesDocs").getPath().substr(1))
                });
            }
        });
    });
