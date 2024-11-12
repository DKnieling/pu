/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mind2_mde_pu_swiss/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
