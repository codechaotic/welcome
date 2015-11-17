(function() {
  'use strict';

  angular
    .module( 'app.page' )
    .controller('CommentController', [
      'dataservice',
      CommentController
    ] )

  function CommentController(dataservice) {
    var vm = this
    this.comment = {}

    this.add = function() {
      vm.comment = {}
    }

    this.recentComments = function(n) {
      return [
        { body: "How about that weather though?" },
        { body: "Sooo click the button?" },
        { body: "I love that none of these are actually comments so far." }
      ]
    }

  }

})();
