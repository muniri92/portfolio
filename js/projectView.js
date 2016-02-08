var projectView = {};

// SWITCHING BETWEEN ABOUT AND PROJECT TAB
projectView.handleMainNav = function() {
  $('.main_nav').on('click', 'li', function() {
    $('.tab_content').hide();
    $('#' + $(this).data('link') + '').show();
  });
  $('.main_nav .tab:first').click();
};
projectView.handleMainNav();


// projectView.setTeasers = function() {
//   $('.project_body *:nth-of-type(n+2)').hide();
//   $('.read_on').on('click', function(e) {
//     e.preventDefault();
//     $(this).siblings('div').children().show();
//     $(this).hide();
//   });
// };
// projectView.setTeasers();
