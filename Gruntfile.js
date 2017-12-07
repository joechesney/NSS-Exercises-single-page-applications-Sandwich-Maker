module.exports = function(grunt) {
    grunt.initConfig({
        //define the tasks that we want it to run for us
        browserify: {
            'dist/bundle.js': ['javascripts/SandwichMaker.js']
        },
        jshint: {
            files: ['javascripts/**/*.js'],
            options: {
                predef: ["document", "console"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    'styles.css': 'sass/sass.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['javascripts/**/*.js'],
                task: ['jshint', 'browserify']
            },
            sass: {
                files: ['sass/**/*.scss'],
                task: ['sass']
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);
};