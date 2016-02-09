
function Project (opts) {
  this.id = opts.id;
  this.title = opts.title;
  this.image = 'img/' + opts.image;
  this.gitRepo = opts.gitRepo;
  this.url = opts.url;
  this.body = opts.body;
  this.startDate = opts.startDate;
};

Project.all = [];
Education.all = [];

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project_template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
  this.publishStatus = this.startDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

Project.loadAll = function(rawProject) {
  rawProject.sort(function(a,b) {
    return (new Date(b.startDate)) - (new Date(a.startDate));
  });

  rawProject.forEach(function(e) {
    Project.all.push(new Project(e));
  });
};

Project.fetchAll = function() {
  if (localStorage.rawProject) {
    $.ajax({
      type: 'HEAD',
      url: 'data/project.json',
      success: function(data, message, xhr) {
        Project.loadAll(JSON.parse(localStorage.rawProject));
      }
    });
    Project.loadAll(JSON.parse(localStorage.rawProject));
    projectView.initIndexPage();
  } else {

    $.getJSON('data/project.json', function(data) {
      localStorage.setItem('rawProject', JSON.stringify(data));
    });
    $.ajax({
      type: 'HEAD',
      url: 'data/project.json',
      success: function(data, message, xhr) {
        Project.loadAll(JSON.parse(localStorage.rawProject));
      }
    });
    Project.loadAll(JSON.parse(localStorage.rawProject));
    projectView.initIndexPage();
  }
};

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

Education.loadAll = function(rawEducation) {
  rawEducation.forEach(function(e) {
    Education.all.push(new Education(e));
  });
};

Education.fetchAll = function() {
  if (localStorage.rawEducation) {
    $.ajax({
      type: 'HEAD',
      url: 'data/edu.json',
      success: function(data, message, xhr) {
        Education.loadAll(JSON.parse(localStorage.rawEducation));
      }
    });
    Education.loadAll(JSON.parse(localStorage.rawEducation));
    educationView.initIndexPage();
  } else {
    $.getJSON('data/edu.json', function(data) {
      localStorage.setItem('rawEducation', JSON.stringify(data));
    });
    $.ajax({
      type: 'HEAD',
      url: 'data/edu.json',
      success: function(data, message, xhr) {
        Education.loadAll(JSON.parse(localStorage.rawEducation));
      }
    });
    Education.loadAll(JSON.parse(localStorage.rawEducation));
    educationView.initIndexPage();
  }
};

//////////////////////////////////////////////
