(function(module) {
  var homeController = {};
  // FETCHS ALL THE 'edu.json' DATA
  // Generic.fetchAll(localStorage.rawEducation, 'edu.json');
  // genericView.initIndexPage('#edu');

  homeController.index = function() {
    $('main > section').hide();
    $('#home').fadeIn('slow');
  };

  module.homeController = homeController;
})(window);
