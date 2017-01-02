module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'dist/css/material-foundation.css': 'scss/material-foundation.scss',
          'dist/css/demo.css': 'scss/demo.scss'
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'dist/js/material-foundation.js': [
            'node_modules/what-input/what-input.js',
            // 'node_modules/jquery/dist/jquery.js',
            'node_modules/foundation-sites/dist/foundation.js',
            'js/src/ripple.js',
            'js/src/switches.js',
            // 'js/src/material-foundation.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['uglify'],
        options: {
          interrupt: true,
        }
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    },
    release: {
      options: {
        bump: true, //default: true
        changelog: false, //default: false
        changelogText: '<%= version %>\n', //default: '### <%= version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
        file: 'package.json', //default: package.json
        add: false, //default: true
        commit: false, //default: true
        tag: false, //default: true
        push: false, //default: true
        pushTags: false, //default: true
        npm: false, //default: true
        npmtag: true, //default: no tag
        indentation: '\t', //default: '  ' (two spaces)
        folder: 'dist', //default project root
        tagName: '<%= version %>', //default: '<%= version %>'
        commitMessage: 'check out my release <%= version %>', //default: 'release <%= version %>'
        tagMessage: 'tagging version <%= version %>', //default: 'Version <%= version %>',
        beforeBump: [], // optional grunt tasks to run before file versions are bumped
        afterBump: [], // optional grunt tasks to run after file versions are bumped
        beforeRelease: [], // optional grunt tasks to run after release version is bumped up but before release is packaged
        afterRelease: [], // optional grunt tasks to run after release is packaged
        updateVars: [], // optional grunt config objects to update (this will update/set the version property on the object specified)
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-release');
  grunt.registerTask('default', ['sass', 'uglify']);
};
