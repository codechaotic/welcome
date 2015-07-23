(function() {
  
  module.exports = function * (next) {
    this.data = {
      a: 1,
      b: 2,
      c: ['cat','dog','fish']
    }
    yield next
  }
})();
