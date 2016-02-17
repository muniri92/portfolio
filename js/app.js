(function(module) {

  // DYNAMIC CONSTURCTOR
  function Generic(opts) {
    for (var i in opts) {
      this[i] = opts[i];
    }
  };

  // HANDLEBAR TEMPLATES
  Generic.prototype.toHtml = function(temp) {
    if (temp == '#edu_template') {
      var template = Handlebars.compile($(temp).text());
      return template(this);
    } else {
      var template = Handlebars.compile($(temp).text());
      this.daysAgo = parseInt((new Date() - new Date(this.startDate))/60/60/24/1000);
      this.publishStatus = this.startDate ? 'Launched ' + this.daysAgo + ' days ago' : '(draft)';
      return template(this);
    }
  };

  // LOAD DATA INTO ARRAY
  Generic.all = [];
  Generic.loadAll = function(rawData) {
    if (rawData.length == 2) { // CHANGE THE NUMBER DEPENDING ON THE NUMBER OF PROJECTS IN JSON
      rawData.sort(function(a,b) {
        return (new Date(b.startDate)) - (new Date(a.startDate));
      });
    }
    // USED MAP TO CREATE NEW ARRAY
    Generic.all = rawData.map(function(e) {
      return new Generic(e);
    });
  };

  // FETCH DATA USING AJAX
  Generic.fetchAll = function(rawData, dataUrl) {
    if (rawData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/' + dataUrl,
        success: function(data, message, xhr) {
          Generic.loadAll(JSON.parse(rawData));
          var eTag = xhr.getResponseHeader('eTag');
          if (localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
          } else {
            Generic.loadAll(JSON.parse(rawData));
          }
        }
      });
      Generic.loadAll(JSON.parse(rawData));
    } else {
      // COULDN'T FIND DATA IN LOCALSTORAGE, SO I SET IT UP
      $.getJSON('data/' + dataUrl, function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
      });
      Generic.loadAll(JSON.parse(rawData));
    }
  };

  module.Generic = Generic;
}(window));
