sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("mind2mdepuswiss.controller.Basecontroller", {

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});

});