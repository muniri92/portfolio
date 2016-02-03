var project = [];

function Project (opts) {
  this.title = opts.title;
  this.image = 'img/' + opts.image;
  this.gitRepo = opts.gitRepo;
  this.url = opts.url;
  this.body = opts.body;
};

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('img').attr('src', this.image);
  $newProject.find('#project_name').text(this.title);
  $newProject.find('#git_Repo a').attr('href', this.gitRepo);
  $newProject.find('#website a').attr('href', this.url);
  $newProject.find('.site_body').html(this.body);
  $newProject.append('<hr>');
  return $newProject;
};

rawProject.forEach(function(e) {
  project.push(new Project(e));
});

project.forEach(function(a) {
  $('#project').append(a.toHtml());
});
