(function(module) {

  function Generic (opts) {
    for (var i in opts) {
      this[i] = opts[i];
    }
  };
  Generic.all = [];

  // Handlebars template
  /////////////////////////////////////////////////////////
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

  //Load all data into an array
  /////////////////////////////////////////////////////////
  Generic.loadAll = function(rawData) {
    if (rawData.length == 2) { // CHANGE THE NUMBER DEPENDING ON THE NUMBER OF PROJECTS IN JSON
      rawData.sort(function(a,b) {
        return (new Date(b.startDate)) - (new Date(a.startDate));
      });
    }
    Generic.all = rawData.map(function(e) {
      return new Generic(e);
    });
  };

  // Fecth data using an ajax call
  /////////////////////////////////////////////////////////
  Generic.fetchAll = function(rawData, raw, dataUrl) {
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
            if (raw === 'rawEducation') {
              genericView.initIndexPage('#edu');
            } else {
              genericView.initIndexPage('#project');
            }
          }
        }
      });
      Generic.loadAll(JSON.parse(rawData));
      if (raw === 'rawEducation') {
        genericView.initIndexPage('#edu');
      } else {
        genericView.initIndexPage('#project');
      }
    } else if (!rawData) {
      // COULDN'T FIND DATA IN LOCALSTORAGE, SO I SET IT UP
      $.getJSON('data/' + dataUrl, function(data) {
        localStorage.setItem(raw, JSON.stringify(data));
        Generic.loadAll(JSON.parse(data));
        if (raw === 'rawEducation') {
          genericView.initIndexPage('#edu');
        } else {
          genericView.initIndexPage('#project');
        }
      });
    }
  };

  module.Generic = Generic;
}(window));
