(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#contact'); // Best practice: Cache the DOM query if it's used more than once.
    $about.find('ul').empty();
  //   $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo['clone_url'] + '">' + repo['name'] + '</a>');
  };

  repoView.index = function() {
    ui();
    $('#projects ul').append(
      repos.with('git_url').map(render)
    );
  };

  module.repoView = repoView;
})(window);
