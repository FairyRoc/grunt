/**
 * Created by Ryan on 2015/8/26.
 */

exports.config = {
    src: {
        root: 'app',
        js: {
            app: [
                'index.js',
                '**/*.js',
                '!bower_components/**/*.js'
            ],
            requireJs: 'bower_components/requirejs/require.js',
            appJs: 'index.js',
            vendor: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/underscore/underscore.js',
                'bower_components/backbone/backbone.js',
                'bower_components/react/react.min.js', //for react-data-grid
                // 'bower_components/react/JSXTransformer.js',
                'bower_components/react-data-grid/dist/react-data-grid-with-addons.js',
                'bower_components/react-bootstrap/react-bootstrap.js',
                'bower_components/toastr/toastr.js',
                'bower_components/zeroclipboard/dist/ZeroClipboard.js',
                'bower_components/highcharts/highcharts.src.js',
                'bower_components/highcharts/exporting.js',
                'bower_components/highcharts/export-csv.js',
                'bower_components/highcharts/no-data-to-display.js',
                'bower_components/blueimp-md5/js/md5.js',
                'bower_components/blueimp-md5/js/md5.min.js',
                'bower_components/formsy-react/release/formsy-react.js',
                'bower_components/moment/min/moment-with-locales.js',
                'bower_components/bootstrap-daterangepicker/daterangepicker.js',
                'bower_components/select2/dist/js/select2.full.min.js',
                'bower_components/select2/dist/js/i18n/zh-CN.js',
                'bower_components/react-tagsinput/react-tagsinput.js',
                // 'bower_components/echarts/build/dist/echarts-all.js',
                'bower_components/fixed-data-table/dist/fixed-data-table.min.js',
                'bower_components/react-pagify/dist/react-pagify.js',
                'bower_components/superagent/superagent.min.js',
                'bower_components/bluebird/js/browser/bluebird.min.js',
                'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
                'bower_components/tether-shepherd/dist/js/tether.js',
                'bower_components/tether-shepherd/dist/js/shepherd.js',
                'bower_components/jquery-validation/dist/jquery.validate.js',
                'bower_components/jquery-placeholder/jquery.placeholder.min.js'
            ],
            alias: {
                jquery: 'bower_components/jquery/dist/jquery.min',
                bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
                underscore: 'bower_components/underscore/underscore',
                backbone: 'bower_components/backbone/backbone',
                react: 'bower_components/react/react',
                // JSXTransformer: 'bower_components/react/JSXTransformer',
                // text: 'bower_components/requirejs-text/text',
                // jsx: 'bower_components/jsx-requirejs-plugin/js/jsx',
                reactdatagrid: 'bower_components/react-data-grid/dist/react-data-grid-with-addons.min',
                highchart: 'bower_components/highcharts/highcharts.src',
                highchartexporting: 'bower_components/highcharts/exporting',
                highchartexportcsv: 'bower_components/highcharts/export-csv',
                'no-data-to-display': 'bower_components/highcharts/no-data-to-display',
                zeroclipboard: 'bower_components/zeroclipboard/dist/ZeroClipboard',
                reactbootstrap: 'bower_components/react-bootstrap/react-bootstrap',
                toastr: 'bower_components/toastr/toastr',
                formsy: 'bower_components/formsy-react/release/formsy-react',
                reacteditablediv: 'bower_components/react-editable-div/react-editable-div',
                moment: 'bower_components/moment/min/moment-with-locales',
                daterangepicker: 'bower_components/bootstrap-daterangepicker/daterangepicker',
                select2: 'bower_components/select2/dist/js/select2.full.min',
                select2i18n: 'bower_components/select2/dist/js/i18n/zh-CN',
                'react-tagsinput': 'bower_components/react-tagsinput/react-tagsinput',
                // echarts: 'bower_components/echarts/build/dist/echarts-all',
                'fixed-data-table': 'bower_components/fixed-data-table/dist/fixed-data-table.min',
                'react-pagify': 'bower_components/react-pagify/dist/react-pagify',
                'superagent': 'bower_components/superagent/superagent.min',
                'bluebird': 'bower_components/bluebird/js/browser/bluebird.min',
                'bootstrap-daterpicker': 'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min',
                'tether': 'bower_components/tether-shepherd/dist/js/tether',
                'shepherd': 'bower_components/tether-shepherd/dist/js/shepherd'
            }
        },
        jsx: ['**/*.jsx', '!bower_components/**/*.jsx'],
        less: ['styles/less/*.less'],
        css: {
            vendor: [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/font-awesome/css/font-awesome.css',
                'bower_components/react-data-grid/themes/react-data-grid.css',
                'bower_components/toastr/toastr.css',
                'bower_components/bootstrap-daterangepicker/daterangepicker.css',
                'bower_components/select2/dist/css/select2.min.css',
                'bower_components/react-tagsinput/react-tagsinput.css',
                'bower_components/fixed-data-table/dist/fixed-data-table.css',
                'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
                'bower_components/tether-shepherd/dist/css/shepherd-theme-arrows.css'
            ]
        },
        font: [
            'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
            'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
            'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
            'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
            'bower_components/font-awesome/fonts/FontAwesome.otf',
            'bower_components/font-awesome/fonts/fontawesome-webfont.eot',
            'bower_components/font-awesome/fonts/fontawesome-webfont.svg',
            'bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
            'bower_components/font-awesome/fonts/fontawesome-webfont.woff',
            'bower_components/font-awesome/fonts/fontawesome-webfont.woff2'
        ],
        image: [
            'images/**/*.png',
            'images/**/*.jpg'
        ],
        swf: {
            files: [
                'bower_components/zeroclipboard/dist/ZeroClipboard.swf'
            ]
        }
    },
    dest: {
        root: 'build',
        js: {
            basePath: 'js',
            requireMain: 'app-built'
        },
        css: {
            basePath: 'css',
            app: ['*.css']
        },
        font: {
            basePath: 'fonts'
        },
        image: {
            basePath: 'images'
        },
        swf: {
            basePath: 'js'
        }
    }
};
