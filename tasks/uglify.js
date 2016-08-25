module.exports = function (grunt) {
    'use strict';

    var files, config;

    files = {
        '<%= config.destination %>/assets/javascript/libs.js': [
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery-pjax/jquery.pjax.js'
        ],
        '<%= config.destination %>/assets/javascript/script.js': [
            '<%= config.assets %>/javascript/script.js'
        ]
    };

    config = {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */',
            sourceMap: true
        },
        develop: {
            options: {
                sourceMap: true,
                beautify: true
            },
            files: files
        },
        build: {
            options: {
                sourceMap: false,
                beautify: false
            },
            files: files
        }
    };

    grunt.config.set('uglify', config);
};
