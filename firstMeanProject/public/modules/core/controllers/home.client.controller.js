'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: "glyphicon-user",
				color: "btn-success",
				total: "20,408",
				description:  "Total customer"
			},
			{
				icon: "glyphicon-calendar",
				color: "btn-primary",
				total: "8,382",
				description:  "Upcoming events"
			},
			{
				icon: "glyphicon-edit",
				color: "btn-success",
				total: "527",
				description:  "New customer in 24h"
			},
			{
				icon: "glyphicon-record",
				color: "btn-info",
				total: "85,000",
				description:  "Emails sent"
			},
			{
				icon: "glyphicon-eye-open",
				color: "btn-warning",
				total: "268",
				description:  "Follow up required"
			},
			{
				icon: "glyphicon-flag",
				color: "btn-danger",
				total: "348",
				description:  "Referrals to moderate"
			}	
		];

	}
]);