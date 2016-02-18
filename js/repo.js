(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get ('https://api.github.com/users/muniri92/repos?per_page=5&sort=updated', function(data, message, xhr) {
      repos.all = data;
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
