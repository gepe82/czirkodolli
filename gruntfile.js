module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['js/index.js', 'js/js.js', 'js/kapcsolat.js', 'js/kepek.js', 'js/szolgaltatasok.js']
		},

		//concat: {
		//	dist: {
		//		files: {
		//			'assets/js/app.js' : ['js/js.js', 'js/kapcsolat.js', 'kepek.js', 'szolgaltatasok.js'],
		//		}
		//	}
		//},

        uglify: {
            my_target: {
                files: {
                    'assets/js/index.js': ['js/index.js', 'js/js.js']
                    //'dest/output2.min.js': ['src/input2.js']
                }
            }
        },

		csslint: {
			all: ['css/*.css']
		},

		cssmin: {
			dist: {
				files: {
					'assets/css/style.min.css': ['css/stiluslap.css', 'css/media.css']
				}
			}
		},

		autoprefixer: {
			all: {
				src: 'assets/css/stiluslap.css'
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{jpg,gif,png,svg}'],
					dest: 'assets/img'
				}]
			}
		},

		watch: {
			js: {
				files: ['js/*.js'],
				tasks: ['jshint']
			},
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [
		'jshint',
        'uglify',
        //'csslint',
        //'concat',
        'cssmin',
		'imagemin'
	]);
};