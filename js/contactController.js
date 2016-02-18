(function(module) {
  var contactController = {};

  // FETCHS ALL THE 'contact.json' DATA
  Generic.fetchAll(localStorage.rawContact, 'rawContact', 'contact.json');
  genericView.initIndexPage('#contact', '#contact_template');

  contactController.index = function() {
    $('main > section').hide();
    $('#contacts').fadeIn('slow');
    repos.requestRepos(repoView.index);
  };

  module.contactController = contactController;
})(window);
