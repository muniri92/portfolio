(function(module) {
  var genericView = {};

  // SWITCHING BETWEEN ABOUT AND PROJECT TAB
  genericView.handleMainNav = function() {
    $('.main_nav').on('click', 'li', function() {
      $('.tab_content').hide();
      $('#' + $(this).data('link') + '').show();
      console.log($(this).data('link'));
    });
    $('.main_nav .tab:first').click();
  };

  // Appends the right section
  genericView.initIndexPage = function(init) {
    console.log(init);
    Generic.all.forEach(function(a) {
      $(init).append(a.toHtml());
    });
    if (init === '#project') {
      genericView.handleMainNav();
    }
  };

  module.genericView = genericView;
})(window);
