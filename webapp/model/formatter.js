sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},
	
			BUTTONCOLORFF : function (Salary)
			{
				return (Salary > 80000) ? "Accept" : "Reject";
			},
			
			SALCOLRFF : function (Salary)
			{
				return  (Salary > 80000) ? "Success" : "Error";
			},
			
			STATUSFF : function (Salary)
			{
				if (Salary > 80000)
				{
					return "Exp Worker";
				}
				else
				{
					return "Fresher Wroker";
				}
			}

		};

	}
);