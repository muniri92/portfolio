var project = [];

function Project (opts) {
  this.id = opts.id;
  this.title = opts.title;
  this.image = 'img/' + opts.image;
  this.gitRepo = opts.gitRepo;
  this.url = opts.url;
  this.body = opts.body;
  this.startDate = opts.startDate;
};

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project_template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
  this.publishStatus = this.startDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

rawProject.sort(function(a,b) {
  return (new Date(b.startDate)) - (new Date(a.startDate));
});

rawProject.forEach(function(e) {
  project.push(new Project(e));
});

project.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
