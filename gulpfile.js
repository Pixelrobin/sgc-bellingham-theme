const gulp         = require("gulp");
const sass         = require("gulp-sass");
//const babel        = require("gulp-babel");
const uglify       = require("gulp-uglify");
const webpack      = require('webpack');
const autoprefixer = require("gulp-autoprefixer");
const cssnano      = require("gulp-cssnano");
const browserSync  = require("browser-sync").create();
const gulpWebpack  = require('webpack-stream');
const named        = require('vinyl-named');

gulp.task("sync", () => {
	browserSync.init({
		proxy: "localhost/wordpress",
		files: "./**/*",
		open: false,
		ghostMode: false,
		ui: { port: 8081 }
	});
});

gulp.task("styles", () => {
	return gulp.src("src/styles/*.scss")
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ["last 4 versions"],
			cascade: true
		}))
		.pipe(cssnano())
		.pipe(gulp.dest("dist/styles"))
		.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task("scripts", () =>
	gulp.src("src/scripts/*.js")
		.pipe(named())
		.pipe(gulpWebpack({
			module: {
				rules: [{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-env']
						}
					}
				}]
			},

			mode: 'development'
		}, webpack))
		//.pipe(babel({ presets: ["env"] }))
		//.pipe(uglify())
		.pipe(gulp.dest("dist/scripts"))
);

gulp.task("watchers", (done) => {
	gulp.watch(["src/styles/**/*.scss", "src/styles/**/*.css"], gulp.parallel("styles"));
	gulp.watch(["src/scripts/**/*.js"], gulp.parallel("scripts"));

	done();
})

gulp.task("dev", gulp.series("styles", "scripts", "watchers", "sync"))