(function() {
  'use strict';

  angular
    .module( 'app.core')
    .factory('dataservice', Dataservice)

  function Dataservice() {
    var comments = [
      { body: "How about that weather though?" },
      { body: "Sooo click the button?" },
      { body: "I love that none of these are actually comments" }
    ]

    function getRecentComments(n) {
      return comments
    }
  }

})();
