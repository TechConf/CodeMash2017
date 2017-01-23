describe('myAppProjectDisplay', function() {
  var fields   = {};
  var sections = {};
  var tabs     = {};
  var element;

  var expectedData = window.ExpectData.project;

  beforeEach(function() {
    module('MyApp');

    inject(function($compile, $rootScope) {
      var directiveElement = window.Jhelpers.getCompiledElement({
        scope: $rootScope.$new(),
        compile: $compile,
        elementType: 'project',
        action: 'display'
      });

      fields   = window.Jhelpers.getFields(directiveElement);
      sections = window.Jhelpers.getSections(directiveElement);
      tabs     = window.Jhelpers.getTabs(directiveElement);

    });
  });

  expectedData.tabs.forEach(function(tab) {
    describe('should have a set of tabs...\n', function() {
      it('...there should be exactly ' + expectedData.tabs.length + ' tabs', function() {
        expect(Object.keys(tabs).length).toEqual(expectedData.tabs.length);
      });

      it('...there should be a tab named ' + tab.name + '. ', function() {
        expect(tabs[tab.name]).toBeDefined();
      });

      if(tab.sections) {
        it('...there should be exactly ' + tab.sections.length + ' sections on the ' + tab.name + ' tab. ', function() {
          expect(Object.keys(tab.sections).length).toEqual(Object.keys(sections).length);
        })

        tab.sections.forEach(function(section) {
          it('...on the ' + tab.name + ' tab there should be a section named ' + section.name, function() {
            expect(sections[section.name]).toBeDefined();
          });

          section.fields.forEach(function(field) {
            it('...on the ' + tab.name + ' tab, within the ' + section.name + ' section, there should be a field named ' + field.name, function(){
              expect(fields[field.name]).toBeDefined();
            });
          });
        }); // End tab.sections.forEach()
      } // End if(tab.sections)

    }); // End describe('should have a set of tabs...')
  }); // End expectedData.tabs.forEach()
});
