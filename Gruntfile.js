const node_sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          implementation: node_sass,
          outputStyle: "compressed"
        },
        files: [{expand: true, cwd: 'src/sass',
                 src: 'main.sass', dest: 'build', ext: '.min.css'}]
      }
    },

    handlebarslayouts: {
      home: {
        files: {
          'build/index.html': 'src/resume.hbs'
        },
        options: {
          modules: ['handlebars-helpers', 'handlebars-helper-moment'],
          context: 'src/resume.json'
        }
      }
    },

    watch: {
      files: ['src/**'],
      tasks: ['sass', 'handlebarslayouts']
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-handlebars-layouts");

  grunt.registerTask('default', ['sass', 'handlebarslayouts']);

};
