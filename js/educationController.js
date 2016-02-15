(function(module) {
  var educationController = {};

  educationController.index = function() {
    Education.fetchAll();

    $('main > section').hide();
    $('#resume').show();
  };

  module.educationController = educationController;
})(window);
