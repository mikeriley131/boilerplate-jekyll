  module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd-HH-MM") %> - Written by <%= pkg.author %> (<%= pkg.contact %>) */\n'
    },

    jekyll: {
      build: {
        dest: '_site'
      }
    },

    sass: {
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          banner: '<%= meta.banner %>'
        },
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: '_assets/src/scss',
          src: ['*.scss'],  // Actual pattern(s) to match.
          dest: '_assets/css/',
          ext: '.min.css'  // Dest filepaths will have this extension.
        }]
      },
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          banner: '<%= meta.banner %>'
        },
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: '_assets/src/scss',
          src: ['*.scss'],  // Actual pattern(s) to match.
          dest: '_assets/css/',
          ext: '.css'      // Dest filepaths will have this extension.
        }]
      }
    },

    sasslint: {
      options: {
        configFile: '_config/.sass-lint.yml',
        formatter: 'html',
        outputFile: '_config/sass-lint-output.html'
      },
      target: ['_assets/src/scss/partials/*.scss']
    },

    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 versions', 'safari 8', 'ie 8', 'ie 9']
        },
        files:{
          '_assets/css/main.css':'_assets/css/main.css',
          '_assets/css/main.min.css':'_assets/css/main.min.css'
        }
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>',
        report: 'min'
      },
      target: {
        files: '<%= pkg.js %>'
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'sasslint', 'autoprefixer']
      },
      scripts: {
        files: '_assets/src/js/*.js',
        tasks: ['uglify']
      },
      jekyll: {
        files: [
          'index.html',
          '_includes/*.html',
          '_layouts/*.html',
          '_pages/**/*.html',
          '_assets/css/*.css',
          '_assets/js/*.js',
          '!_site/**/*' // Stops watch from triggering again after Jekyll compiles
        ],
        tasks: ['jekyll']
      }
    },

    browserSync: {
      files: ['_site/**/*.*'],
      options: {
        watchTask: true,
        server: {
          baseDir: '_site'
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Custom task
  grunt.registerTask('build', ['sass:prod','sass:dev', 'sasslint', 'autoprefixer:dist', 'uglify', 'jekyll']);

  // Default task
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};