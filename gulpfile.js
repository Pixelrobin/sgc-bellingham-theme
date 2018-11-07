const gulp         = require("gulp");
const sass         = require("gulp-sass");
const webpack      = require('webpack');
const autoprefixer = require("gulp-autoprefixer");
const cssnano      = require("gulp-cssnano");
const bs           = require("browser-sync");
const gulpWebpack  = require('webpack-stream');
const named        = require('vinyl-named');
const del          = require('del');

let mode = 'development';

gulp.task("sync", () => {
	bs.init({
		proxy: "localhost/wordpress",
		ghostMode: false,
		ui: { port: 3001 }
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
		.pipe(gulp.dest("assets/styles"))
		.pipe(bs.stream());
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

			mode: mode
		}, webpack))
		.pipe(gulp.dest("assets/scripts"))
);

gulp.task("watchers", (done) => {
	gulp.watch(["src/styles/**/*.scss", "src/styles/**/*.css"], gulp.parallel("styles"));
	gulp.watch(["src/scripts/**/*.js"], gulp.parallel("scripts")).on('change', bs.reload);
	gulp.watch("./**/*.php").on("change", bs.reload);

	done();
});

gulp.task('clean', () =>
	del([
		'assets/**/*',
		'dist/**/*'
	])
);

gulp.task('copy-to-dist', gulp.series(
	() => gulp.src('./media/**/*').pipe(gulp.dest('dist/media')),  // Media
	() => gulp.src('./**/*.php').pipe(gulp.dest('dist')),          // PHP
	() => gulp.src('./style.css').pipe(gulp.dest('dist')),         // style.css
	() => gulp.src('./assets/**/*').pipe(gulp.dest('dist/assets')) // Assets
));

gulp.task("dev", gulp.series("styles", "scripts", "watchers", "sync"));
gulp.task("build", gulp.series(
		done => {
			mode = 'production';
			done()
		},
		'clean',
		'scripts',
		'styles',
		'copy-to-dist'
	)
);