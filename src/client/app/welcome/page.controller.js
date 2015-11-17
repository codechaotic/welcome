(function() {
  'use strict';

  angular
    .module( 'app.page' )
    .controller('PageController', [
      'dataservice',
      PageController
    ] )

  function PageController(dataservice) {
    var vm = this
    this.comments = dataservice.recentComments(10)

  }

})();
