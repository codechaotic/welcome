(function() {

  //@autoexport
  module.exports.config = {
    mongo_url:          process.env.MONGO_URL,
    port:               process.env.PORT,
    public_dir:         'public'
  }

})();
