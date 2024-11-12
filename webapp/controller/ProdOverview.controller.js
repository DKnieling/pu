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

	return Controller.extend("mind2mdepuswiss.controller.ProdOverview", {

		onInit: function () {
          var oRouter = this.getRouter();
          oRouter.getRoute("ProdOverview").attachMatched(this._onRouteMatched, this);

          setInterval(function() {
            this.onRefresh();  // Ruft die Datenladefunktion erneut auf
          }.bind(this), 300000);  // 300000 Millisekunden = 5 Minuten

        },

        onAfterRendering: function() {
          if (sap.ui.core.mvc.Controller.prototype.onAfterRendering) {
              sap.ui.core.mvc.Controller.prototype.onAfterRendering.apply(this, arguments);
          }
          var oInput = this.byId("ArbplInput");
          this.sleep(3).then(() => {
                      oInput.attachBrowserEvent("keydown", function(oEvent) {
                        if (oEvent.key === "Enter") {
                            this.onARBPLsuche();
                        }
                    }.bind(this));
          });    
      },

      sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      onARBPLsuche: function(){
        var aFilter = new Array();
        this.sArbpl = this.getView().byId("ArbplInput").getValue();
          var fFilter = new sap.ui.model.Filter({
            path: 'Arbpl',
            operator: sap.ui.model.FilterOperator.EQ,
            value1: this.sArbpl
        });
  
        aFilter.push(fFilter);
          var oItem = this.getView().byId("OverviewCards").getBinding("items").filter(aFilter); 
          console.log(oItems);
      },

      _onRouteMatched: function (oEvent) {
          var sPath = "/" + oEvent.getParameter("arguments").Path;
          this.getView().bindElement({path: sPath})
      },

      onRefresh: function(){
        var aFilter = new Array();
        this.sArbpl = this.getView().byId("ArbplInput").setValue("");
        var fFilter = new sap.ui.model.Filter({
          path: 'Arbpl',
          operator: sap.ui.model.FilterOperator.EQ,
          value1: ""
      });
      aFilter.push(fFilter);
      var oItem = this.getView().byId("OverviewCards").getBinding("items").filter(aFilter); 
      },

    onNavto: function(oWerks, oArbpl){
				this.getRouter().navTo("ProdDetail", {
					Werks: oWerks,
          Arbpl: oArbpl
				});
    },

    onPress: function(oEvent){
      var sPath = oEvent.getSource().getBindingContext().getPath().split("/")[1];
      	this.getRouter().navTo("ProdDetail", {
					Path: sPath
				});
    }
});
});