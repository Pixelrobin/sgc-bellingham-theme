const gulp         = require("gulp");
const sass         = require("gulp-sass");
const concat       = require("gulp-concat");
const babel        = require("gulp-babel");
const uglify       = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const cssnano      = require("gulp-cssnano");
const browserSync  = require("browser-sync").create();
const webpack      = require('webpack-stream');
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
		.pipe(browserSync.stream());
});

gulp.task("scripts/global", () =>
	gulp.src("src/scripts/global/*.js")
		.pipe(concat("global.js"))
		.pipe(babel({
			presets: ["env"]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/scripts"))
);

gulp.task("scripts", () =>
	gulp.src("src/scripts/*.js")
		.pipe(named())	
		.pipe(webpack({
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
			}
		}))
		//.pipe(babel({ presets: ["env"] }))
		.pipe(uglify())
		.pipe(gulp.dest("dist/scripts"))
);

gulp.task("watchers", (done) => {
	gulp.watch(["src/styles/**/*.scss", "src/styles/**/*.css"], gulp.parallel("styles"));

	done();
})

gulp.task("dev", gulp.series("styles", "scripts/global", "scripts", "watchers", "sync"))