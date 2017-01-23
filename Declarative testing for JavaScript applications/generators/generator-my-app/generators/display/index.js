'use strict';
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var yosay  = require('yosay');
var _      = require('lodash');

module.exports = yeoman.Base.extend({
  initializing: function() {
    var greet = function() {
      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the superb ' + chalk.red('generator-my-app') + ' generator!'
      ));
    }.bind(this);

    greet();
  },
  prompting: function() {
    var tabs = [];
    var done = this.async();

    var getComponentName = function() {
      return this.prompt([{
        type: 'input',
        name: 'componentName',
        message: 'Enter the component name:'
      }]);
    }.bind(this);

    var getTabs = function() {
      return this.prompt([{
        type: 'input',
        name: 'tabName',
        message: 'Enter a name for a tab or a blank to continue:'
      }]).then((answers) => {
        if(answers.tabName !== '') {
          var idx = tabs.push({name: answers.tabName, sections: []});
          getSections(tabs[idx-1]);
        } else {
          this.answers.tabs = tabs;
          done();
        }
      });
    }.bind(this);

    var getSections = function(tab) {
      return this.prompt([{
        type: 'input',
        name: 'sectionName',
        message: 'Enter the name of a section for the ' + chalk.styles.red.open + tab.name + chalk.styles.red.close + ' tab or a blank to continue:'
      }]).then((answers) => {
        if(answers.sectionName !== '') {
          var idx = tab.sections.push({name: answers.sectionName})

          getFields(tab, tab.sections[idx-1]);
        } else {
          getTabs();
        }
      });
    }.bind(this);

    var getFields = function(tab, section) {
      return this.prompt([{
        type: 'input',
        name: 'fieldName',
        message: 'Enter the name of a field for the ' + chalk.styles.yellow.open + section.name + chalk.styles.yellow.close + ' section or a blank to continue:'
      }]).then((answers) => {
        if(answers.fieldName !== '') {
          if(!section.fields) {
            section.fields = [];
          }
          section.fields.push({name: answers.fieldName});

          getFields(tab,section);
        } else {
          getSections(tab);
        }
      });
    }.bind(this);

    return getComponentName().then((answers) => {
      this.answers = answers;
      getTabs();
    });
  },
  writing() {
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };
    var componentName = this.answers.componentName;
    var tabs = this.answers.tabs;
    var that = this;

    this.fs.copyTpl(
      this.templatePath('display.html.tmplt'),
      this.destinationPath('src/components/' + componentName.toLowerCase() + '/display.html'),
      {
        componentName: componentName,
        tabs: this.answers.tabs
      }
    );

    this.fs.copyTpl(
      this.templatePath('display.js.tmplt'),
      this.destinationPath('src/components/' + componentName.toLowerCase() + '/display.js'),
      {
        componentName: componentName
      }
    );

    tabs.forEach(function(tab) {
      that.fs.copyTpl(
        that.templatePath('tab-summary.html.tmplt'),
        that.destinationPath('src/components/' + componentName.toLowerCase() + '/tab-' + tab.name.toLowerCase() + '.html'),
        {
          componentName: componentName,
          tab: tab
        }
      );
    });

    this.fs.copyTpl(
      this.templatePath('display.expect.js.tmplt'),
      this.destinationPath('test/structural/components/' + componentName.toLowerCase() + '/display.expect.js'),
      {
        componentName: componentName,
        tabs: JSON.stringify(this.answers.tabs, null, 2)
      }
    );

    this.fs.copyTpl(
      this.templatePath('display.spec.js.tmplt'),
      this.destinationPath('test/structural/components/' + componentName.toLowerCase() + '/display.spec.js'),
      { componentName: componentName }
    );
  },
});
