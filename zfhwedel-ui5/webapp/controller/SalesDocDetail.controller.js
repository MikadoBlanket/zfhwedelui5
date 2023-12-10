sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.SalesDocDetail", {
        onInit: function () {
            // Do some init stuff
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("SalesDocDetail").attachPatternMatched(this.onObjectMatched, this);
        },
        onObjectMatched(oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").salesDocPath),
				model: "salesDocs"
			});
		}

    });
});