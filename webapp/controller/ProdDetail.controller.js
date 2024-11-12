sap.ui.define([
	"mind2mdepuswiss/controller/Basecontroller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	"sap/ui/core/HTML",
    "sap/f/Card",
    "sap/f/cards/Header"

], function (Controller, MessageToast, History, Fragment, HTML, Card, Header) {
	"use strict";

	return Controller.extend("mind2mdepuswiss.controller.ProdDetail", {

		onInit: function () {
          var oRouter = this.getRouter();
          oRouter.getRoute("ProdDetail").attachMatched(this._onRouteMatched, this);
          
        },

        formatDate: function (date) {
            debugger;
			var d = new Date(date);
			var day = ('0' + d.getDate()).slice(-2);
			var month = ('0' + (d.getMonth() + 1)).slice(-2);
			var year = d.getFullYear();
			return `${day}/${month}/${year}`;
		},

        _onRouteMatched: function (oEvent) {
            debugger;
			var oView = this.getView();
			var oArguments = oEvent.getParameter("arguments");
            var sPath = "/" + oArguments.Path;
            oView.bindElement({path: sPath});
        }
    });
});