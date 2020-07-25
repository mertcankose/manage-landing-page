const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create();
const connect = require('gulp-connect'); // Runs a local webserver
//const open = require('gulp-open'); // Opens a URL in a web browser

//compile scss into css

function style() {
    //1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass that file through sass compiler
        .pipe(sass().on('error',sass.logError))
        .pipe(autoprefixer())
    //3. where do i save the compiled css?
        .pipe(gulp.dest('./css'))
    //4. stream changes to all browser
        .pipe(browserSync.stream());
}



function watch() {
    browserSync.init({
        //notify:false,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}



function server(done) {
    return connect.server({
    root: './',
    port: 8080,
    debug: true,
    });
    done();
}

// Default Gulp command
exports.default = gulp.series(server);
exports.style = style;
exports.watch = watch;

