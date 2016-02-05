var projectView = {};

// SWITCHING BETWEEN ABOUT AND PROJECT TAB
projectView.handleMainNav = function() {
  $('.main_nav').on('click', 'li', function() {
    $('.tab_content').hide();
    $('#' + $(this).data('link') + '').show();
    console.log($(this).data('link'));
  });
  $('.main_nav .tab:first').click();
};
projectView.handleMainNav();

//
// projectView.setTeasers = function() {
//   $('.project-body *:nth-of-type(n+2)').hide();
//   $('.read-on').on('click', function(e) {
//     e.preventDefault();
//     $(this).siblings('section').children().show();
//     $(this).hide();
//   });
// };
// projectView.setTeasers();
