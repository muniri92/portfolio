(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax ({
      url: 'https://api.github.com/users/muniri92/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken }
    }).done(function(data, status, xhr) {
      repos.all = data;
      callback();
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
