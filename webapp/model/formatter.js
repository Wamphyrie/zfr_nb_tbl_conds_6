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
			},
			
			IMAGEFF : function (Salary)
			{
				return (Salary > 80000) ? "/purple.JPG" : "/orange.JPG";
			},
			
			CHKBOXFF : function (Salary)
			{
				return (Salary > 80000) ? true : false;
			},
			
			SWITCHFF : function (Salary)
			{
				return (Salary > 80000) ? true : false;
			},
			
			RTNGINDFF : function (Salary)
			{
				return (Salary > 80000) ? 4 : 2;
			},
			
			PROGINDFF : function (Salary)
			{
				return (Salary > 80000) ? 80 : 40;
			},
			
			SLIDERFF : function (Salary) 
			{
				return (Salary > 80000) ? 80 : 40;
			},
			
			CURRFF : function (Country)
			{
				switch(Country)
				{
					case "INDIA" : return "IND";
					case "US"	 : return "USD";
					case "UK"	 : return "UKP";
					default 	 : return "N/A";
				}
			},
			
			ANNUALFF : function (Salary)
			{
				return (Salary * 12);	
			}

		};

	}
);