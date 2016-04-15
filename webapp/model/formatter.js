sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},

		fnDateFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}
			var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ style: "medium" });
			return oDateFormat.format(oValue);
		},
		
		fnDateTimeFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({ pattern: "yyyy/MM/dd" });
			return oDateFormat.format(oValue);
		}
	};

});