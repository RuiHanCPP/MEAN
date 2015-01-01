'use strict';

var customersApp = angular.module('customers');


// Customers controller
customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers', '$modal', '$log',
	function($scope, $stateParams, Authentication, Customers, $modal, $log) {

		this.authentication = Authentication;
		// Find a list of Customers
		this.customers = Customers.query();

		// open a modal window to create a single customer record
		this.modalCreate = function (size) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/customers/views/create-customer.client.view.html',
				controller: function ($scope, $modalInstance) {
					$scope.ok = function ($valid) {

						if ($valid) {
							$modalInstance.close();
						}

					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},

				size: size,
			});

			modalInstance.result.then(function (selectedItem) {
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		// open a modal window to update a single customer record
		this.modalUpdate = function (size, selectedCustomer) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/customers/views/edit-customer.client.view.html',
				controller: function ($scope, $modalInstance, customer) {
					$scope.customer = customer;
					$scope.ok = function ($valid) {

						if ($valid) {
							$modalInstance.close($scope.customer);
						}

					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},

				size: size,
				resolve: {
					customer: function () {
						return selectedCustomer;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}
]);


// Customers controller
customersApp.controller('CustomersCreateController', ['$scope', 'Customers',
	function($scope, Customers) {

		// Create new Customer
		this.create = function() {
			// Create new Customer object
			var customer = new Customers ({
				firstName: this.firstName,
				surname: this.surname,
				suburb: this.suburb,
				country: this.country,
				industry: this.industry,
				email: this.email,
				phone: this.phone,
				referred: this.referred,
				channel: this.channel
			});

			// Redirect after save
			customer.$save(function(response) {

				// Clear form fields
				$scope.fistName = '';
				$scope.surname = '';
				$scope.suburb = '';
				$scope.country = '';
				$scope.industry = '';
				$scope.email = '';
				$scope.phone = '';
				$scope.referred = '';
				$scope.channel = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);


// Customers controller
customersApp.controller('CustomersUpdateController', ['$scope', 'Customers',
	function($scope, Customers) {

		// Update existing Customer
		this.update = function(updateCustomer) {
			var customer = updateCustomer;

			customer.$update(function() {

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

	}
]);

customersApp.directive('customerList', [function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/customers/views/customer-list-template.html',
		link: function(scope, element, attrs) {

		}
	};
}]);
        //
        //

        //
		//// Remove existing Customer
		//$scope.remove = function(customer) {
		//	if ( customer ) {
		//		customer.$remove();
        //
		//		for (var i in $scope.customers) {
		//			if ($scope.customers [i] === customer) {
		//				$scope.customers.splice(i, 1);
		//			}
		//		}
		//	} else {
		//		$scope.customer.$remove(function() {
		//			$location.path('customers');
		//		});
		//	}
		//};
        //

        //
        //
		//// Find existing Customer
		//$scope.findOne = function() {
		//	$scope.customer = Customers.get({
		//		customerId: $stateParams.customerId
		//	});
		//};
