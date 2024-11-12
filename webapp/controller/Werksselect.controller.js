sap.ui.define([
    "mind2mdepuswiss/controller/Basecontroller",
    "sap/m/MessageToast"
],
function (Controller) {
    "use strict";

    return Controller.extend("mind2mdepuswiss.controller.Werksselect", {
        onInit: function () {

        },

        onWerk: function(oEvent){
            var oList = this.getView().byId("werkSelect");
			var oSelectedItem = oList.getSelectedItem();
            console.log(oSelectedItem)

			if (oSelectedItem) {
				var sPath = oSelectedItem.getBindingContext().getPath().split("/")[1];
				this.getRouter().navTo("ProdOverview", {
					Path: sPath
				});
			} else {
				MessageToast.show("Bitte wählen Sie einen Eintrag aus der Liste.");
			}

        }
    });
});
