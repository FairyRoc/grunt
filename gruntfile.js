/**
 *  by roc
 */
module.exports = function(grunt) {
    var path = require('path');
    require('time-grunt')(grunt);
    var config = require('./tasks/config/grunt.config').config,
        srcConfig = config.src,
        destConfig = config.dest;
    // Project configuration.
    grunt.initConfig({
        clean: 'build',
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js'],
                    dest: 'build/js'
                },{
                    expand: true,
                    cwd: 'app',
                    src: ['*.html'],
                    dest: 'build'
                },
                {
                    expand: true,
                    cwd: 'app',
                    src: '**/*.json',
                    dest: 'build'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: srcConfig.root,
                    src: srcConfig.js.app,
                    dest: path.join(destConfig.root, destConfig.js.basePath)
                }, {
                    expand: true,
                    cwd: srcConfig.root,
                    src: [srcConfig.js.requireJs].concat(srcConfig.js.vendor),
                    dest: path.join(destConfig.root, destConfig.js.basePath)
                }, {
                    expand: true,
                    cwd: srcConfig.root,
                    src: srcConfig.css.vendor.concat(['bower_components/bootstrap/dist/css/bootstrap.min.css']),
                    dest: path.join(destConfig.root, destConfig.css.basePath)
                }, {
                    expand: true,
                    flatten: true,
                    cwd: srcConfig.root,
                    src: srcConfig.font,
                    dest: path.join(destConfig.root, destConfig.font.basePath)
                }, {
                    expand: true,
                    cwd: srcConfig.root,
                    src: srcConfig.image,
                    dest: destConfig.root
                }, {
                    expand: true,
                    flatten: true,
                    cwd: srcConfig.root,
                    src: srcConfig.swf.files,
                    dest: path.join(destConfig.root, destConfig.swf.basePath)
                }]
            }
        },
        react: {
            dev: {
                expand: true,
                cwd: srcConfig.root,
                src: ['**/*.jsx'],
                dest: path.join(destConfig.root, destConfig.js.basePath),
                ext: '.js'
            }
        },
        eslint: {
            all: {
                expand: true,
                cwd: srcConfig.root,
                src: srcConfig.js.app.concat(srcConfig.jsx)
            }
        },
        less: {
            dev: {
                expand: true,
                //flatten: true,
                cwd: 'styles',
                src: ['*.less'],
                dest: path.join(destConfig.root, destConfig.css.basePath),
                ext: '.css'
            }
        },
        concat: {
            options: {
                stripBanners: true
            },
            prod: {
                files: {
                    'build/css/app.css': destConfig.css.app.map(function(file) {
                        return path.join(destConfig.root, destConfig.css.basePath, file);
                    }),
                    'build/css/vendor.css': srcConfig.css.vendor.map(function(file) {
                        return path.join(destConfig.root, destConfig.css.basePath, file);
                    })
                }
            }
        },
        cssmin: {
            //options: {
            //    shorthandCompacting: false,
            //    roundingPrecision: -1
            //},
            target: {
                files: {
                    'build/css/vendor.min.css': path.join(destConfig.root, destConfig.css.basePath, 'vendor.css'),
                    'build/css/app.min.css': path.join(destConfig.root, destConfig.css.basePath, 'app.css')
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: [destConfig.root, destConfig.js.basePath].join('/'),
                    mainConfigFile: [destConfig.root, destConfig.js.basePath, srcConfig.js.appJs].join('/'),
                    //modules: [{
                    //    name: 'app'
                    //}],
                    name: 'index',
                    excludeShallow: [
                        //'jquery',
                        //'bootstrap',
                        //'underscore',
                        //'backbone',
                        //'react',
                        'reactdatagrid',
                        'select2',
                        'select2i18n',
                        //'highchart',
                        //'zeroclipboard',
                        //'reactbootstrap',
                        //'toastr'
                    ],
                    out: [destConfig.root, destConfig.js.basePath, destConfig.js.requireMain + '.js'].join('/'),
                    //optimize: 'none',
                    uglify: {
                        preserveComments: false
                    },
                    preserveLicenseComments: false
                }
            }
        },
        replace: {
            devHtml: {
                options: {
                    patterns: [
                        { match: 'requireJsDest', replacement: ['', destConfig.js.basePath, srcConfig.js.requireJs].join('/') },
                        { match: 'requireMainDest', replacement: ['', destConfig.js.basePath, srcConfig.js.appJs].join('/') },
                        { match: 'bootstrapCssDest', replacement: ['', destConfig.css.basePath, 'bower_components/bootstrap/dist/css/bootstrap.css'].join('/') },
                        { match: 'jqueryJsDest', replacement: ['', destConfig.js.basePath, 'bower_components/jquery/dist/jquery.js'].join('/') },
                        { match: 'jqueryValidateJsDest', replacement: ['', destConfig.js.basePath, 'bower_components/jquery-validation/dist/jquery.validate.js'].join('/') },
                        { match: 'md5JsDest', replacement: ['', destConfig.js.basePath, 'bower_components/blueimp-md5/js/md5.js'].join('/') },
                        { match: 'placeholderJsDest', replacement: ['', destConfig.js.basePath, 'bower_components/jquery-placeholder/jquery.placeholder.min.js'].join('/') }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: srcConfig.root,
                    src: '*.html',
                    dest: destConfig.root
                }]
            },
            devJs: {
                options: {
                    patterns: [
                        { match: 'baseUrl', replacement: ['', destConfig.js.basePath].join('/') },
                    ]
                },
                files: [{
                    expand: true,
                    cwd: destConfig.root,
                    src: 'js/*.js',
                    dest: destConfig.root
                }]
            },
            prodHtml: {
                options: {
                    patterns: [
                        { match: 'requireJsDest', replacement: ['', destConfig.js.basePath, srcConfig.js.requireJs].join('/') },
                        { match: 'requireMainDest', replacement: ['', destConfig.js.basePath, destConfig.js.requireMain].join('/') },
                        { match: 'bootstrapCssDest', replacement: ['', destConfig.css.basePath, 'bower_components/bootstrap/dist/css/bootstrap.min.css'].join('/') },
                        { match: 'jqueryJsDest', replacement: ['', destConfig.js.basePath, 'bower_components/jquery/dist/jquery.min.js'].join('/') },
                        { match: 'md5JsDest', replacement: ['', destConfig.js.basePath, 'bower_components/blueimp-md5/js/md5.min.js'].join('/') }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: srcConfig.root,
                    src: '*.html',
                    dest: destConfig.root
                }]
            },
            prodJs: {
                options: {
                    patterns: [
                        { match: 'baseUrl', replacement: ['', destConfig.js.basePath].join('/') },
                        { match: /"app"/g, replacement: '"' + destConfig.js.requireMain + '"' }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: destConfig.root,
                    src: 'js/*.js',
                    dest: destConfig.root
                }]
            }
        },
        injector: {
            options: {
                addRootSlash: true,
                ignorePath: 'build/'
            },
            dev: {
                files: {
                    'build/index.html': srcConfig.css.vendor.concat(destConfig.css.app).map(function(file) {
                        return path.join(destConfig.root, destConfig.css.basePath, file);
                    })
                }
            },
            prod: {
                files: {
                    'build/index.html': [
                        path.join(destConfig.root, destConfig.css.basePath, 'vendor.min.css'),
                        path.join(destConfig.root, destConfig.css.basePath, 'app.min.css')
                        //path.join(destConfig.root, destConfig.js.basePath, 'vendor.js')
                    ]
                }
            }
        },
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-asset-injector');
    grunt.loadNpmTasks('grunt-babel');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['eslint', 'clean', 'copy:dev', 'react', 'less', 'concat:prod', 'cssmin','replace:devHtml', 'replace:devJs']);
    // A very basic default task.
    // grunt.registerTask('default', 'Log some stuff.', function() {
    //   grunt.log.write('Logging some stuff...');
    // });

};
