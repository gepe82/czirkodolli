module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['js/index.js', 'js/js.js', 'js/kapcsolat.js', 'js/kepek.js', 'js/szolgaltatasok.js']
		},

		'concat': {
            // concat js file of page images
            images: {
                files: {
                    'assets/js/images.min.js' : ['js/jquery-1.4.2.min.js', 'js/jquery-ui-1.10.3.custom.min.js', 'js/jquery.prettyPhoto-compressed.js', 'js/images.min.js']
                }
            },
            // concat js file of page services
            services: {
                files: {
                    'assets/js/services.min.js' : ['js/jquery-1.4.2.min.js', 'js/jquery-ui-1.10.3.custom.min.js', 'js/services.min.js']
                }
            },
            // concat js file of page contact
            contact: {
                files: {
                    'assets/js/contact.min.js' : ['js/jquery-1.10.1.min.map.js', 'js/contact.min.js']
                }
            },
            // concat js file of page about
            about: {
                files: {
                    'assets/js/about.min.js' : ['js/jquery-1.4.2.min.js', 'js/about.min.js']
                }
            }
		},

        uglify: {
            // minify js files of page index
            index: {
                files: {
                    'assets/js/index.js': ['js/index.js', 'js/js.js']
                }
            },
            // minify js files of page images
            images: {
                files: {
                    'js/images.min.js': ['js/kepek.js', 'js/js.js']
                }
            },
            // minify js files of page services
            services: {
                files: {
                    'js/services.min.js': ['js/szolgaltatasok.js', 'js/js.js']
                }
            },
            // minify js files of page contact
            contact: {
                files: {
                    'js/contact.min.js': ['js/kapcsolat.js', 'js/js.js']
                }
            },
            // minify js files of page about
            about: {
                files: {
                    'js/about.min.js': ['js/js.js']
                }
            }
        },

		csslint: {
			all: ['css/*.css']
		},

        /**
         * Index es old-index eseten:
         * 0. stiluslap
         * 1. mobil (media.css)
         * 2. tablet  (media.css)
         * 3. desktop (media.css)
         * 4. large (media.css)
         */
		cssmin: {
            // minify css file for page index
			dist: {
				files: {
					'assets/css/style.min.css': ['css/stiluslap.css', 'css/media.css']
				}
			},

            // minify css files for pages
            pages: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['tartalom.css', 'tartalom-dt.css', 'tartalom-l.css'],
                    dest: 'assets/css/',
                    ext: '.min.css'
                }]
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
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
					livereload: true
				}
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
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

    // task for generating js file of page image
    grunt.registerTask('page-images', [
        'uglify:images',
        'concat:images'
    ]);

    grunt.registerTask('page-services', [
        'uglify:services',
        'concat:services'
    ]);

    grunt.registerTask('page-contact', [
        'uglify:contact',
        'concat:contact'
    ]);

    grunt.registerTask('page-about', [
        'uglify:about',
        'concat:about'
    ]);

    grunt.registerTask('pages', [
        'cssmin:pages'
    ]);
};
