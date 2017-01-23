var Jhelpers = (function() {
  'use strict';

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  var handleError = function(e) {
    var err;

    // Dependency missing in the Karma conf.
    if(e.message && e.message.match("Failed to instantiate module")) {
      var lines = e.message.split('\n');
        err = new Error('A dependency could not be loaded. Is it included in the Karma config?\n' + lines[0] + '\n\t' + lines[1] + '\n\t' + lines[2]);
        throw err;
    }
    throw e;
  }

  var getCompiledElement = function(conf) {
    var element         = angular.element('<'+conf.elementType + '-' + conf.action + '></'+ conf.elementType + '-' + conf.action + '>');
    var compiledElement = conf.compile(element)(conf.scope);
    var cachedTemplate;

    conf.scope.$digest();

    if(conf.httpBackend) {
      conf.httpBackend.flush();
    }

    compiledElement.isolateScope().ctrl.elementData = conf.mockData;
    conf.scope.$digest();

    return compiledElement;
  };

  var getFields = function(directiveElement) {
    var fields = {};

    directiveElement.find("span[class*='field']").toArray().forEach(
      function(val,i,a) {
        if( i%2 === 1) return;
        fields[val.innerText.trim()] = {value: a[i+1].innerHTML.trim(), required: val.classList.contains("required") };
      });

    return fields;
  };

  var getSections = function(directiveElement) {
    var sections = {};

    directiveElement.find("h4").toArray().forEach(
      function(val) {
        sections[val.innerText.trim()] = 1;
      });

    return sections;
  };

  var getTabs = function(directiveElement) {
    var tabs = {};

    directiveElement.find("uib-tab-heading").toArray().forEach(
      function(val) {
        tabs[val.innerText.trim()] = 1;
      });

    return tabs;
  };

  return {
    getCompiledElement: getCompiledElement,
    getFields: getFields,
    getSections: getSections,
    getTabs: getTabs,
    handleError: handleError
  };

}());
