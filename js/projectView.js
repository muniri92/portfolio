(function(module) {
  var genericView = {};

  // APPENDS THE SECTION THAT IS RAN IN THE CONTROLLER
  genericView.initIndexPage = function(section, temp) {
    Generic.all.forEach(function(a) {
      $(section).append(a.toHtml(temp));
    });
  };
  module.genericView = genericView;
})(window);
