(function(module) {

  function Generic (opts) {
    for (var i in opts) {
      this[i] = opts[i];
      // console.log(this[i]);
    }
  };

  Generic.all = [];

  /////////////////////////////////////////////////////////
  // function Project (opts) {
  //   for (var i in opts) {
  //     this[i] = opts[i];
  //   }
  // };

  // function Education (edu) {
  //   for (var i in edu) {
  //     this[i] = edu[i];
  //   }
  // };
  //
  // Project.all = [];
  // Education.all = [];

  /////////////////////////////////////////////////////////


  Generic.prototype.toHtml = function() {
    if (url = 'edu.json') {
      var template = Handlebars.compile($('#edu_template').text());
      return template(this);
    } else {
      var template = Handlebars.compile($('#project_template').text());
      this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
      this.publishStatus = this.startDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
      return template(this);
    }
  };


  // Project.prototype.toHtml = function() {
  //   var template = Handlebars.compile($('#project_template').text());
  //
  //   this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
  //   this.publishStatus = this.startDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  //
  //   return template(this);
  // };
  //
  // Education.prototype.toHtml = function() {
  //   var template = Handlebars.compile($('#edu_template').text());
  //   return template(this);
  // };

  /////////////////////////////////////////////////////////

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
  //
  //
  // Education.loadAll = function(rawEducation) {
  //   rawEducation.forEach(function(e) {
  //     Education.all.push(new Education(e));
  //   });
  // };

  /////////////////////////////////////////////////////////

  function urlGeneric() {
    // TEST 1.2
    var url;
    var urlTest = true;
    if (urlTest) {
      url = 'edu.json';
      console.log(url);
      urlTest = false;
      return url;
    } else {
      url = 'project.json';
      console.log(url);
      return url;
    };

    // TEST 1.1
    // var url;
    // $('#gen_proj').on('click', function() {
    //   url = 'project.json';
    //   console.log('yo');
    //   // return url;
    // });
    // $('#gen_resume').on('click', function() {
    //   url = 'edu.json';
    //   // return url;
    // });
  };
  Generic.fetchAll = function() {
    urlGeneric();
    if (localStorage.rawGeneric) {
      $.ajax({
        type: 'HEAD',
        url: 'data/edu.json' ,
        success: function(data, message, xhr) {
          Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          var eTag = xhr.getResponseHeader('eTag');
          // if (localStorage.eTag || eTag !== localStorage.eTag) {
          //   localStorage.eTag = eTag;
          // } else {
          // Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          genericView.initIndexPage();
          // }
        }
      });
      // Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      genericView.initIndexPage();

    } else {
      $.getJSON('data/edu.json' , function(data) {
        localStorage.setItem('rawGeneric', JSON.stringify(data));
      });
      $.ajax({
        type: 'HEAD',
        url: 'data/edu.json',
        success: function(data, message, xhr) {
          Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          // var eTag = xhr.getResponseHeader('eTag');
          // if (localStorage.eTag || eTag !== localStorage.eTag) {
          //   localStorage.eTag = eTag;
          // } else {
          // Generic.loadAll(JSON.parse(localStorage.rawGeneric));
          genericView.initIndexPage();
          // }
        }
      });
      Generic.loadAll(JSON.parse(localStorage.rawGeneric));
      genericView.initIndexPage();
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

  // module.Project = Project;
  // module.Education = Education;
  ////////////////////////////////////////////////////////

}(window));


// SAVE THIS - TRYING TO GET THE LOAD TO WORK

// // show loading image
// $('.loader').show();
// $('.main_img').hide();
// $('.main_img').on('load', function(){
//   $('.loader').fadeOut('slow');
//   $('.main_img').show();
// });
