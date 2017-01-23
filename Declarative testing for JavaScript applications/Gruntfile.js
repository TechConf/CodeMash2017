module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks("grunt-ng-annotate");

  var buildTasks = [
    'notify:"build starting..."',
    "jshint",
    "clean",
    "ngtemplates",
    "ngAnnotate",
    "uglify",
    "concat",
    "less",
    "cssmin",
    "copy"
  ];

  grunt.registerTask('default', buildTasks);

  grunt.registerTask('notify', 'tell the user what is happening', function(arg) {
    console.warn(arg);
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'src/js/**/*.js',
        'src/components/**/*.js',
        '!src/components/**/*.spec.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    clean: {
      options: {
        force: true,
      },
      app:{
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['js/**', 'css/**'],
        }]
      }
    },

    less: {
      app: {
        files: {
          'src/tmp/app.max.css' : 'src/css/index.less'
        },
        options: {
          paths: ['src/less']
        }
      }
    },

    ngAnnotate: {
      options: {
        add: true,
        singleQuotes: true
      },
      'app': {
        files: {
          'src/tmp/app.annotated.js':
          [
            'src/js/app.js',
            'src/components/**/*.js',
            'src/js/**/*.js',
            '!src/components/**/*.spec.js'
          ]
        }
      }
    },

    ngtemplates:  {
      'MyApp': {
        cwd: 'src',
        src: [
          'components/**/*.html'
        ],
        dest: 'src/tmp/app-components.js',
        options: {
          standalone: false,
          prefix: '/',
          htmlmin: {
            collapseWhitespace:             true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true,
            keepClosingSlash:               true
          }
        }
      }
    },

    concat: {
      'MyApp': {
        src: ['src/tmp/app.uglified.js', 'src/tmp/app-components.js'],
        dest: 'src/tmp/app.min.js'
      }
    },

    uglify: {
      app: {
        options: {
          sourceMap: true,
          report: 'min'
        },
        src: ['src/tmp/app.annotated.js'],
        dest: 'src/tmp/app.uglified.js'
      },
    },

    cssmin: {
      compress: {
        files: {
          'dist/css/app.min.css': ['src/tmp/app.max.css']
        }
      }
    },

    copy: {
      rootFiles: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'src/index.html'
            ],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              './src/tmp/bootstrap.min.js',
              './src/tmp/app.min.js',
              './src/tmp/app.uglified.js.map',
              './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
            ],
            dest: 'dist/js/',
            filter: 'isFile'
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              './node_modules/bootstrap/dist/css/bootstrap.min.css'
            ],
            dest: 'dist/css/',
            filter: 'isFile'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              './node_modules/bootstrap/fonts/*',
            ],
            dest: 'dist/fonts/',
            filter: 'isFile'
          }
        ]
      }
    }
  });
};
