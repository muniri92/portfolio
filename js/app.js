var project = [];
var education = [];

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

//////////////////////////////////////////////

function Education (edu) {
  this.id = edu.id;
  this.location = edu.location;
  this.degree = edu.degree;
  this.body = edu.body;
  this.date = edu.date;
};

Education.prototype.toHtml = function() {
  var template = Handlebars.compile($('#edu_template').text());
  return template(this);
};

rawEducation.forEach(function(e) {
  education.push(new Education(e));
});

education.forEach(function(a) {
  $('#edu').append(a.toHtml());
});

//////////////////////////////////////////////
