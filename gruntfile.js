module.exports = function(grunt) {

    require('time-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        clean: ['build'],
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*CodedBy roc <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/index.js',
                dest: 'build/index.min.js'
            }
        },
        jshint: {
            src: ['src/index.js']
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'jshint', 'uglify']);
    // A very basic default task.
    // grunt.registerTask('default', 'Log some stuff.', function() {
    //   grunt.log.write('Logging some stuff...');
    // });

};
