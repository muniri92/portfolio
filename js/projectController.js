(function(module) {
  var projectController = {};

  // FETCHS ALL THE 'project.json' DATA
  Generic.fetchAll(localStorage.rawProject, 'project.json');
  genericView.initIndexPage('#project');

  projectController.index = function() {
    $('main > section').hide();
    $('#projects').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);
