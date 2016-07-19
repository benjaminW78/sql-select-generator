/*globals module, require */

const 
    loadGruntTasks = require('load-grunt-tasks'),
    timeGrunt = require('time-grunt');

module.exports = function (grunt) {
    loadGruntTasks(grunt);
    timeGrunt(grunt);

    grunt.initConfig({
        conf: {
            lint: grunt.file.readJSON('_conf/grunt.lint.json'),
            package: grunt.file.readJSON('package.json')
        },

        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: ['<%= conf.lint.eslint%>']
        },

        jsonlint: {
            all: {
                src: ['<%= conf.lint.jsonlint%>']
            }
        },

        watch: grunt.file.readJSON('_conf/grunt.watch.json'),

        shell: {
            test: {
                command: function () {
                    return 'npm test';
                }
            }
        }
    });

    grunt.registerTask('default', [
        'jsonlint',
        'eslint',
        'shell:test'
    ]);
};
