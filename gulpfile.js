const gulp = require("gulp");
const gulpPug = require("gulp-pug");
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');
const { stream } = require("browser-sync");
const browserSync = require('browser-sync').create();
const imagemin = require("gulp-imagemin");
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

function clean() {
return del(pattern, './');
}



function pugToHtml() {
    return gulp.src("dev/pug/pages/*.pug")
    .pipe(gulpPug({
            pretty:true
        }))
    .pipe(gulp.dest('./'));
}



function CSScompiling() {
    return gulp.src("./dev/scss/styles.scss")
    .pipe(plumber())  
     .pipe(cleanCSS())
    .pipe(sourcemaps.init())
    .pipe(sass({pretty: true}).on("error", sass.logError))
     .pipe(autoprefixer())
    .pipe(browserSync.stream())
    .pipe(plumber.stop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
}


function script() {
    return gulp.src("dev/js/**/*.js")  
      .pipe(babel({
        presets: ['@babel/env']
    })) 
    .pipe(uglify())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./build/js'));
}


function liveserver() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}



 function svgSpriteBuild() {
	return gulp.src("dev/images/sprites/")
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
			.pipe(replace('&gt;', '>'))
			.pipe(gulp.dest('./img/sprites/'));
}



function watcher() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('dev/pug/**/*.pug', pugToHtml);
    gulp.watch('dev/js/main.js', script);
    gulp.watch('dev/scss/**/*scss', CSScompiling);
    gulp.watch('build/*.html').on('change', browserSync.reload);
    gulp.watch('dev/images/**/*.{jpg,png,gif,svg}', imageCompressing);
    gulp.watch('dev/js', script);
  }


function imageCompressing() {
    return gulp.src([
        "dev/images/**/*.{jpg,png,gif,svg}", 
        "!dev/images/sprites/**/*"])
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./img'));
}


exports.default = gulp.parallel(pugToHtml, CSScompiling, script, watcher, imageCompressing, svgSpriteBuild);