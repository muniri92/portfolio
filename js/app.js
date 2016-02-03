var projects = [];

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
  $newProject.find('div.img').html('<img src="' + this.image + '">');
  $newProject.find('header > h1').text(this.title);
  $newProject.find('#ghRepo a').attr('href', this.gitRepo);
  $newProject.find('#website').html('<a href= "' + this.url + '">Project Link</a>');
  $newProject.find('.site-body').html(this.body);
  $newProject.append('<hr>');
  return $newProject;
};

rawProject.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
