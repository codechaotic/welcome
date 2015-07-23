(function() {

  module.exports = function *(next) {
    this.body = JSON.stringify(this.data)
  }

})();
