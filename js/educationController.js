(function(module) {
  var educationController = {};

  // FETCHS ALL THE 'edu.json' DATA
  Generic.fetchAll(localStorage.rawEducation, 'rawEducation','edu.json');
  genericView.initIndexPage('#edu', '#edu_template');

  educationController.index = function() {
    $('main > section').hide();
    $('.fadeInLeft').fadeIn();
  };

  module.educationController = educationController;
})(window);
