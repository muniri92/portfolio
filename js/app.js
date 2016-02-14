(function(module) {

  function Generic (opts) {
    for (var i in opts) {
      this[i] = opts[i];
    }
  };

  Generic.all = [];

  Generic.prototype.toHtml = function() {
    var template = Handlebars.compile($('#edu_template').text());
    return template(this);
    var templates = Handlebars.compile($('#project_template').text());
    return templates(this);
  };

  // Generic.prototype.toHtml = function() {
  //   this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
  //   this.publishStatus = this.startDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //   return template(this);
  // };

  Generic.loadAll = function(rawGeneric) {
    rawGeneric.forEach(function(e) {
      Generic.all.push(new Generic(e));
      // console.log(e);
    });
  };


  // Project.loadAll = function(rawProject) {
  //   rawProject.sort(function(a,b) {
  //     return (new Date(b.startDate)) - (new Date(a.startDate));
  //   });
  //   rawProject.forEach(function(e) {
  //     Project.all.push(new Project(e));
  //     console.log(Project.all);
  //   });
  // };

  genInitHelper = function(url) {
    console.log(url);
    if (url = 'edu.json') {
      genericView.initIndexPage('#edu');
    } else if (url = 'project.json') {
      genericView.initIndexPage('#project');
    }
    console.log(url);
  };

  Generic.fetchAll = function(url) {
    // console.log(url);
    if (localStorage.rawGeneric) {
      $.ajax({
        type: 'HEAD',
        url: 'data/' + url ,
        success: function(data, message, xhr) {
          Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          var eTag = xhr.getResponseHeader('eTag');
          // if (localStorage.eTag || eTag !== localStorage.eTag) {
          //   localStorage.eTag = eTag;
          // } else {
          // Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          console.log(localStorage.rawGeneric);
          // }
        }
      });
      Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      genInitHelper(url);
      console.log();
    } else {
      $.getJSON('data/' + url , function(data) {
        localStorage.setItem('rawGeneric', JSON.stringify(data));
      });

      // $.ajax({
      //   type: 'HEAD',
      //   url: 'data/' + url,
      //   success: function(data, message, xhr) {
      //     Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      //     // var eTag = xhr.getResponseHeader('eTag');
      //     // if (localStorage.eTag || eTag !== localStorage.eTag) {
      //     //   localStorage.eTag = eTag;
      //     // } else {
      //     // Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      //     genericView.initIndexPage('edu');
      //     // }
      //   }
      // });
      Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      genInitHelper(url);
      // console.log(rawGeneric);
    }
  };

  //
  //
  // Project.fetchAll = function() {
  //   if (localStorage.rawProject) {
  //     $.ajax({
  //       type: 'HEAD',
  //       url: 'data/project.json',
  //       success: function(data, message, xhr) {
  //         Project.loadAll(JSON.parse(localStorage.rawProject));
  //         var eTag = xhr.getResponseHeader('eTag');
  //         if (localStorage.eTag || eTag !== localStorage.eTag) {
  //           localStorage.eTag = eTag;
  //         } else {
  //           Project.loadAll(JSON.parse(localStorage.rawProject));
  //           projectView.initIndexPage();
  //         }
  //       }
  //     });
  //     Project.loadAll(JSON.parse(localStorage.rawProject));
  //     projectView.initIndexPage();
  //   } else {
  //     $.getJSON('data/project.json', function(data) {
  //       localStorage.setItem('rawProject', JSON.stringify(data));
  //     });
  //     $.ajax({
  //       type: 'HEAD',
  //       url: 'data/project.json',
  //       success: function(data, message, xhr) {
  //         Project.loadAll(JSON.parse(localStorage.rawProject));
  //         var eTag = xhr.getResponseHeader('eTag');
  //         if (localStorage.eTag || eTag !== localStorage.eTag) {
  //           localStorage.eTag = eTag;
  //         } else {
  //           Project.loadAll(JSON.parse(localStorage.rawProject));
  //           projectView.initIndexPage();
  //         }
  //       }
  //     });
  //     Project.loadAll(JSON.parse(localStorage.rawProject));
  //     projectView.initIndexPage();
  //   }
  // };
  //
  // Education.fetchAll = function() {
  //   if (localStorage.rawEducation) {
  //     $.ajax({
  //       type: 'HEAD',
  //       url: 'data/edu.json',
  //       success: function(data, message, xhr) {
  //         Education.loadAll(JSON.parse(localStorage.rawEducation));
  //         var eTag = xhr.getResponseHeader('eTag');
  //         if (localStorage.eTag || eTag !== localStorage.eTag) {
  //           localStorage.eTag = eTag;
  //         } else {
  //           Education.loadAll(JSON.parse(localStorage.rawEducation));
  //           educationView.initIndexPage();
  //         }
  //       }
  //     });
  //     Education.loadAll(JSON.parse(localStorage.rawEducation));
  //     educationView.initIndexPage();
  //   } else {
  //     $.getJSON('data/edu.json', function(data) {
  //       localStorage.setItem('rawEducation', JSON.stringify(data));
  //     });
  //     $.ajax({
  //       type: 'HEAD',
  //       url: 'data/edu.json',
  //       success: function(data, message, xhr) {
  //         Education.loadAll(JSON.parse(localStorage.rawEducation));
  //       }
  //     });
  //     Education.loadAll(JSON.parse(localStorage.rawEducation));
  //     educationView.initIndexPage();
  //   }
  // };

  /////////////////////////////////////////////////////////
  module.Generic = Generic;

  ////////////////////////////////////////////////////////

}(window));
