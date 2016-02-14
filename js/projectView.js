(function(module) {
  var genericView = {};
  //
  // var projectView = {};
  // var educationView = {};

  // SWITCHING BETWEEN ABOUT AND PROJECT TAB
  genericView.handleMainNav = function() {
    $('.main_nav').on('click', 'li', function() {
      $('.tab_content').hide();
      $('#' + $(this).data('link') + '').show();
      console.log($(this).data('link'));
    });
    $('.main_nav .tab:first').click();
  };

  genericView.initIndexPage = function(url) {
    console.log(url);
    Generic.all.forEach(function(a){
      $(url).append(a.toHtml());
    });

    genericView.handleMainNav();
  };

  // projectView.initIndexPage = function() {
  //   Project.all.forEach(function(a){
  //     $('#project').append(a.toHtml());
  //   });
  //   projectView.handleMainNav();
  // };
  //
  // educationView.initIndexPage = function() {
  //   Education.all.forEach(function(a){
  //     $('#edu').append(a.toHtml());
  //   });
  // };

  // // CREATING THE 'READ ON' FUNCTION
  // projectView.setTeasers = function() {
  //   $('.project_body *:nth-of-type(n+2)').hide();
  //   $('.read_on').on('click', function(e) {
  //     e.preventDefault();
  //     $(this).sibling('div').children().show();
  //     $(this).hide();
  //   });
  // };

  // projectView.setTeasers = function() {
  //   $('.project_body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  //
  //   $('#project').on('click', 'a.read-on', function(e) {
  //     e.preventDefault();
  //     $(this).parent().find('*').fadeIn();
  //     $(this).hide();
  //   });
  // };
  // projectView.setTeasers();

  module.genericView = genericView;


  // module.projectView = projectView;
  // module.educationView = educationView;
})(window);
