/*global QUnit*/

sap.ui.define([
	"mind2_mde_pu_swiss/controller/Werksselect.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Werksselect Controller");

	QUnit.test("I should test the Werksselect controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
