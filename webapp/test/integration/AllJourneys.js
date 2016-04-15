jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PurchaseOrdersSet in the list
// * All 3 PurchaseOrdersSet have at least one ToMessages

sap.ui.require([
	"sap/ui/test/Opa5",
	"poom/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"poom/test/integration/pages/App",
	"poom/test/integration/pages/Browser",
	"poom/test/integration/pages/Master",
	"poom/test/integration/pages/Detail",
	"poom/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "poom.view."
	});

	sap.ui.require([
		"poom/test/integration/MasterJourney",
		"poom/test/integration/NavigationJourney",
		"poom/test/integration/NotFoundJourney",
		"poom/test/integration/BusyJourney",
		"poom/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});