var gulp   = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'), //cross-browser compatibility
    sass   = require('gulp-sass'), //sass conversion
    browserSync = require('browser-sync').create(), //automatic browser reload
    uglify = require("gulp-uglify"), //minify js
    gulpif = require('gulp-if'), //if conditional
    rename = require('gulp-rename'), //rename files
    cssnano = require('gulp-cssnano'), //minify css
    imagemin = require('gulp-imagemin'); //minify images


//browser-sync setup
gulp.task("browserSync", function () {
    browserSync.init({
        server:{
            baseDir: '~/hrn'
        }
    })
});

//convert all sass files to css
gulp.task('build-css', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//minify js
gulp.task('uglify-js',function () {
    return gulp.src("assets/js/*.js")
        //check if it is a js file
        .pipe(gulpif("*.js", uglify()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("production/js"))
})


// minify css - reset and main
gulp.task('uglify-css-reset', function(){
    return gulp.src("assets/css/reset.css")
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("production/css"))
})


gulp.task('uglify-css-main', function(){
    return gulp.src("assets/css/style.css")
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("production/css"))
})

//minify images
gulp.task('minify-image', function () {
    return gulp.src("assets/images/**/*.+(png|jpg|gif|svg)")
        .pipe(imagemin())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("production/images"))
})

//gulp defaults
gulp.task('default', ['build-css']);

// uglify stuff
gulp.task("uglify", ['build-css','uglify-js', 'uglify-css-reset', 'uglify-css-main', 'minify-image']);


//gulp watch
gulp.task('watch', ['build-css'], function() {
    //Reload the browser when these files get saved
    gulp.watch('assets/sass/*.scss', ['build-css']);
});