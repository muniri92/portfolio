(function(module) {
  var genericView = {};

  // APPENDS THE SECTION THAT IS RAN IN THE CONTROLLER
  genericView.initIndexPage = function(section) {
    if (section == '#edu') {
      Generic.all.forEach(function(a) {
        $(section).append(a.toHtml('#edu_template'));
      });
    } else {
      Generic.all.forEach(function(a) {
        $(section).append(a.toHtml('#project_template'));
      });
    }
  };
  module.genericView = genericView;
})(window);
