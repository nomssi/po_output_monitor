jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"poom/test/integration/NavigationJourneyPhone",
		"poom/test/integration/NotFoundJourneyPhone",
		"poom/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

