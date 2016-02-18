(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#contacts'); // Best practice: Cache the DOM query if it's used more than once.
    $about.find('ul').empty();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo['clone_url'] + '">' + repo['name'] + '</a>');
  };

  repoView.index = function() {
    ui();
    $('#contacts ul').append(
      repos.with('git_url').map(render)
    );
  };

  module.repoView = repoView;
})(window);
