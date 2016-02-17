(function(module) {
  var educationController = {};

  // FETCHS ALL THE 'edu.json' DATA
  Generic.fetchAll(localStorage.rawEducation, 'edu.json');
  genericView.initIndexPage('#edu');

  educationController.index = function() {
    $('main > section').hide();
    $('#resume').fadeIn('slow');
  };

  module.educationController = educationController;
})(window);
