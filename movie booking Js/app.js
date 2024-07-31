angular.module('ticketBookingApp', [])
  .controller('bookingController', function($scope) {
    $scope.bookings = [];

    $scope.bookTicket = function() {
      $scope.bookings.push({
        name: $scope.newBooking.name,
        numTickets: $scope.newBooking.numTickets,
        movie: $scope.newBooking.movie
      });
      $scope.newBooking = {}; // Clear input fields after booking
    };
  });
