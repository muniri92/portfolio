(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('main > section').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
