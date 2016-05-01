sap.ui.define([
	"sap/ui/core/format/DateFormat"
], function(DateFormat) {
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

		fnDateAgoFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}		    
			var oDateFormat = DateFormat.getDateInstance({
				style: "medium",
				strictParsing: true,
				relative: true
			});
			return oDateFormat.format(oValue);
	    },

		fnDeliveryDateFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}		    
			var oDateFormat = DateFormat.getDateInstance({ style: "medium" });
			return oDateFormat.format(oValue);
		},

		fnDateFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}
			var oDateFormat = DateFormat.getDateInstance({
				style: "short",
				strictParsing: true,
				relative: true
			});
			return oDateFormat.format(oValue);
		},

		fnDateTimeFormatter: function(oValue) {
			if (oValue === undefined || oValue === "") {
				return "";
			}
			var oDateFormat = DateFormat.getDateTimeInstance({
				pattern: "yyyy/MM/dd"
			});
			return oDateFormat.format(oValue);
		}

	};

});